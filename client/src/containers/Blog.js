import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Loader } from '../components/Common'
import { BlogContainer } from '../components/Blog';
import { Card } from '../components/Blog/Card';
import { Blogcarousel } from '../components/Blogcarousel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'showdown-youtube';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#DADFDF',
  },
  
  BlogsContainer: {
    width: '70%',
		margin: 'auto',
    padding: '25px',
    paddingTop: '128px',
    backgroundColor: '#FAFAFA'
  },
  h1: {
		fontSize: '36px'
  },
  header: {
		borderBottom: `1px solid `,
		display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  blogPadding:{
    margin: '5rem auto 0'
  },
  disclaimer:{
    textAlign:'center',
    fontStyle: 'italic'
  },
  [`@media (max-width: ${1000}px)`]: {
		BlogsContainer: {
			width: '100%',
			padding: '10px',
			paddingTop: '85px'
		},
		header: {
			alignItems: 'flex-end'
		},
		h1: {
			fontSize: '24px'
		},
  }
}));

const GET_POSTS = gql`{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }) {
      nodes {
        title
        body
        bodyHTML
        bodyText
        number
        labels(first: 100) {
          nodes {
            color
            name
            id
          }
        }
        author {
          url
          avatarUrl
          login
        }
        updatedAt
        id
      }
    }
  }
}
`
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);
  const classes = useStyles();

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error)
      }

      if (data) {
        setPosts(data?.repository?.issues?.nodes)
        console.log("ya cargo los datos")
        console.log(posts)
      }
    }
  }, [loading, error, data]);

  //<Blogcarousel/> meterlo despues de blog container   Investigación y Análisis de Covid-19 en México

  //blog carousel añadir tag del objeto de informacion(mapeado)
  return (
    <div className={classes.container}>
      <Header fixed={true}/>
        <main className={classes.BlogsContainer}>
        <header className={classes.header}>
              <Typography className={classes.h1} variant={'h1'}>Investigación de COVID-19 en México</Typography>	
          </header>
          <BlogContainer className={classes.white}>
            <div>
            <Blogcarousel/> 
            {
              loading 
              ? <Loader />
              : posts.map((v, i) => {
                  return <Card blog={v} key={i} />;
                })
            }
            </div>
          </BlogContainer>
          <h1 className={classes.disclaimer}>
            Los resultados de esta sección de Investigación y Análisis provienen de investigaciones en curso y no son resultados definitivos. Adicionalmente, las opiniones vertidas son a título personal de los investigadores y e investigadoras y no reflejan la posición oficial del Tecnológico de Monterrey ni de la Escuela de Gobierno y Transformación Pública.
          </h1>
        </main>
      <Footer/>
    </div>
  );
}

export default Blog;
