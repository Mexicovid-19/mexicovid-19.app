import React, { useState, useEffect, useCallback, useRef } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { userClient } from '../Utils/apollo'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { config } from "../config";
import { getEmojiByName, getNameByEmoji } from '../Utils/emoji';
import { getAuthenticatedUser } from '../Utils/auth'
import { Loader } from "../components/Common";
import { PostContainer, PostTitle, PostDate, PostDateLink, PostReaction, BackButton, Time} from "../components/Post";
import { AuthorDetails, AuthorAvatar, AuthorName } from "../components/Post/Author";
import { GithubLogin } from '../components/Header'
import {Header} from "../components/Header";
import Divider from '@material-ui/core/Divider';
import MarkdownView from 'react-showdown';
import showdown from 'showdown';

export default function BlogHome() {
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
    return <Loader />;
  }

  const onBackClick = () => {
    // ifthe previous page does not exist in the history list. this method to load the previous (or next) URL in the history list.
    window.history.go();
    // The back() method loads the previous URL in the history list.
    window.history.back();
  };

  console.log(post);

  let converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    strikethrough: true, 
    tables: true,
    metadata: true
  })

  const textmd = post.body;


  
  return (
    <>
      
      {post.title && (
        <PostContainer>
          <BackButton onClick={() => onBackClick()}>Regresar</BackButton>

          <PostTitle>{post.title}</PostTitle>
          <div>
          <PostDate>
                  Fecha publicación: {moment(post.updatedAt).format("DD MMM YYYY")}
                </PostDate>
                <Divider/>
                <Time>
                  Tiempo de lectura: {Math.round(readingTime(post.body).minutes)} min.
                </Time>
          </div>
          <MarkdownView
            markdown={textmd}
            options={{
              tables: true, emoji: true,
              ghCompatibleHeaderId: true,
              strikethrough: true, 
              metadata: true
            }}
          />
        </PostContainer>
      )}
    </>
  );
}
