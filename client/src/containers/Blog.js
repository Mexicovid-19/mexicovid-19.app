import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Loader } from '../components/Common'
import { BlogContainer } from '../components/Blog';
import { Card } from '../components/Blog/Card';
import Blogcarousel from '../components/Blogcarousel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { BlogContext } from '../contexts/BlogContext';

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
    fontStyle: 'italic',
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'justify'
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

const Blog = () => {
  const { posts, loading, openBlog } = React.useContext(BlogContext);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header fixed={true}/>
        <main className={classes.BlogsContainer}>
        <header className={classes.header}>
              <Typography className={classes.h1} variant={'h1'}>Investigación de COVID-19 en México</Typography>	
          </header>
          <BlogContainer className={classes.white}>
            <div>
            {
              loading 
              ? <Loader />
              : posts.map((v, i) => {
                  return <Card blog={v} onClick={openBlog} key={i} />;
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
