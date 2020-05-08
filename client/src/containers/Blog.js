import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import  Loader  from '../components/Loaders';
import { BlogContainer } from '../components/Blog';
import { Card } from '../components/Blog/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BlogContext } from '../contexts/BlogContext';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  imgSelector: {
    maxWidth: '30px',
    marginRight: '20px'
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px 0px'
  },
  form: {
    flex: 1,
    maxWidth: '300px'
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
    form: {
      maxWidth: '100%'
    },
  }
}));

const ContentItem = ({classes, category}) => {
  const { img, alt, text } = category;
  
  return (
    <div className={classes.itemContainer}>
      <img className={classes.imgSelector} src={img} alt={alt}/>
      {text}  
    </div>
  );
}

const Blog = () => {
  const { posts, loading, openBlog, categories, category, onChangeCategory } = React.useContext(BlogContext);
  const classes = useStyles();
  const isMobile = window.innerWidth < 1000;

  return (
    <div className={classes.container}>
      <Header fixed={true}/>
        <main className={classes.BlogsContainer}>
        <header className={classes.header}>
          <Typography className={classes.h1} variant={'h1'}>Investigación {!isMobile && "de COVID-19 en México"}</Typography>	
        </header>
        <section className={classes.selectorContainer}>
          <div>
            Las investigaciones realizadas puedes encontrarlas organizadas por categorias. Selecciona la categoria de interés:
          </div>
          <FormControl  classes={{ root: classes.form}}>
            <InputLabel id="category-selector">Categoria</InputLabel>
            <Select
              labelId="category-selector"
              value={category}
              onChange={onChangeCategory}
              label="Categoria"
            >
              <MenuItem value={0}>
                Todos
              </MenuItem>
              <MenuItem value={1}>
                <ContentItem category={categories[1]} classes={classes}/>
              </MenuItem>
              <MenuItem value={2}>
                <ContentItem category={categories[2]} classes={classes}/>
              </MenuItem>
              <MenuItem value={3}>
                <ContentItem category={categories[3]} classes={classes}/>
              </MenuItem>
              <MenuItem value={4}>
                <ContentItem category={categories[4]} classes={classes}/>
              </MenuItem>
              <MenuItem value={5}>
                <ContentItem category={categories[5]} classes={classes}/>
              </MenuItem>
              <MenuItem value={6}>
                <ContentItem category={categories[6]} classes={classes}/>
              </MenuItem>
              <MenuItem value={7}>
                <ContentItem category={categories[7]} classes={classes}/>
              </MenuItem>
            </Select>
          </FormControl>
        </section>
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
        <span className={classes.disclaimer}>
          Los resultados de esta sección de Investigación y Análisis provienen de investigaciones en curso y no son resultados definitivos. Adicionalmente, las opiniones vertidas son a título personal de los investigadores y e investigadoras y no reflejan la posición oficial del Tecnológico de Monterrey ni de la Escuela de Gobierno y Transformación Pública.
        </span>
      </main>
      <Footer/>
    </div>
  );
}

export default Blog;
