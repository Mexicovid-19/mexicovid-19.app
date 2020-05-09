import React, { useState, useEffect, useCallback, useRef } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as colors from "../constants/colors";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { config } from "../config";
import { getEmojiByName, getNameByEmoji } from '../Utils/emoji';
import { getAuthenticatedUser } from '../Utils/auth'
import  Loader  from '../components/Loaders';
import { PostContainer, PostTitle, PostDate, PostDateLink, PostReaction, BackButton, Time, Text} from "../components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../components/Post/Author";
import { GithubLogin } from '../components/Header'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Divider from '@material-ui/core/Divider';
import MarkdownView from 'react-showdown';
import showdown from 'showdown';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import youtube from 'showdown-youtube';
import {Helmet} from 'react-helmet';
import '../css/Blog.css';

import Button from '@material-ui/core/Button';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const styles = () => ({
  section: {
    margin: '20px 0px',
    borderRadius: '5px',
    backgroundColor: '#DADFDF',
    height: '100%'
  },
  
  container: {
    width: '100%',
    backgroundColor: '#FAFAFA'
  },

  graphicContainer: {
    marginTop: '50px'
  },
  
  header: {
    borderBottom: `1px solid `,
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  h1: {
    fontSize: '36px'
  },
  
  textclass: {
    marginTop: '0px',
    marginBottom: '0px'
  }, 
  teamsContainer: {
    width: '70%',
		margin: 'auto',
    padding: '25px',
    paddingTop: '6.8rem',
    backgroundColor: '#FAFAFA'
  },
  divide:{
    color:colors.BLACK,
  },
  label: {
		color: colors.GRAY_LIGHT
	},
  [`@media (max-width: ${1000}px)`]: {
		teamsContainer: {
			width: '100%',
			padding: '10px',
			paddingTop: '65px'
		},
		header: {
			alignItems: 'flex-end'
		},
		h1: {
			fontSize: '24px'
		},
  }
  
});

export default withStyles(styles)(function BlogHome({classes}) {
  const issueNumber = parseInt(window.location.href.split("/").pop());
  const GET_POSTS = gql`{
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issue(number: ${issueNumber}) {
        title
        body
        bodyHTML
        url
        bodyText
        number
        bodyHTML
        author {
          url
          avatarUrl
          login
        }
        reactions(first:100){
          nodes{
            content
            user{
              id
              login
            }
          }
        }
        updatedAt
        id
      }
    }
  }
  `;
  const [post, setPost] = useState([]);
  const [postNodeId, setPostNodeId] = useState('');
  const [reactionPopup, setReactionPopup] = useState(false);
  const [postReactions, setPostReactions] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);
  const reactionsContainer = useRef(null);
  const userToken = localStorage.getItem('githubToken');

  const setReactionFun = useCallback((reactions) => {
    // {
    //   emoji: "👍", // String emoji reaction
    //   by: "case" // String of persons name
    // }

    let reactions_array = [];
    reactions.forEach(element => {
      let obj = {
        by: element.user.login,
        emoji: getEmojiByName(element.content)
      };
      reactions_array.push(obj);
    });

    setPostReactions(reactions_array);
  }, []);

  const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className="blog-post-anchor">
      {children}
      <style jsx="true">
        {`
          a {
            color: #484848;
            font-weight: 400;
          }
        `}
      </style>
    </a>
  );

  const CodeBlock = ({ children }) => (
    <SyntaxHighlighter language="javascript" style={docco}>
      {children.props.children}
    </SyntaxHighlighter>
  );

  
  useEffect(() => {
    if (!loading) {
      if (data) {
        const issues = data.repository.issue;
        setPostNodeId(issues.id);
        setPost(issues);
        setReactionFun(issues.reactions.nodes);
      }
    }
  }, [loading, error, data, setReactionFun]);

  if (loading) {
    return (
    <React.Fragment>
      <Header/>
      <Loader />
    </React.Fragment>
    );
  }


  console.log(post);

  let converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    strikethrough: true, 
    tables: true,
    metadata: true
  })

  const isMobile = window.innerWidth < 1000;
  const textmd = post.body;
  document.title = post.title+" | MexiCOVID";
  return (
    <div>
      <Helmet>
          <title>{post.title+" | MexiCOVID"}</title>
          <meta name="description" content={post.body}/>
          <meta name="keywords" content="tec mexicovid, coronavirus mexico tec,casos coronavirus investigacion,coronavirus impacto economico,coronavirus impacto social"/>
          
          <meta property="og:title" content={post.title+" | MexiCOVID"}/>
          <meta property="og:description" content={post.body}/>

      </Helmet>
      <div className={classes.section}>
        <Header fixed={true}/>
        <div className={classes.teamsContainer}>
          <header className={classes.header}>
            <Typography className={classes.h1} variant={'h1'}>Investigación {!isMobile && "de COVID-19 en México"}</Typography>	
            <Button className={classes.label} href="/research"> 
              <ArrowBackIosRoundedIcon/>
              Regresar
            </Button>
          </header>
          {post.title && (
            <PostContainer>
              <PostTitle>{post.title}</PostTitle>
              <div>
                <Time>
                  Tiempo de lectura: {Math.round(readingTime(post.body).minutes)} min.
                </Time>
              </div>
              <MarkdownView
                markdown={textmd}
                options={{
                  tasklists:true,
                  tables: true, emoji: true,
                  ghCompatibleHeaderId: true,
                  strikethrough: true, 
                  metadata: true,
                  extensions: ['youtube']
                }}
                className="BlogContainer"
              />
            </PostContainer>
          )}
        </div>
        <Footer/>
      </div>
    </div>
  );
})

