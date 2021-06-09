import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/';
import Footer from '../Footer/';
import * as colors from '../../constants/colors';
import PhotoGrid from './teamPhotos';
import { Helmet } from 'react-helmet';

const Team = ({classes}) => {
  document.title = "¿Quiénes Somos? | MexiCOVID";
  return (
    <div>
      <Helmet>
          <title>¿Quiénes Somos? | MexiCOVID</title>
          <meta name="description" content="La plataforma www.mexicovid19.mx es un esfuerzo conjunto de un grupo de alumnos y profesores del Tecnológico de Monterrey para dar seguimiento y fácil acceso a la información de salud más relevante en el contexto de la pandemia de Coronavirus en México. " />
          <meta name="keywords" content="equipo mexicovid,quienes somos covid,quienes somos mexicovid"/>

          <meta property="og:title" content="¿Quiénes Somos? | MexiCOVID"/>
          <meta property="og:description" content="La plataforma www.mexicovid19.mx es un esfuerzo conjunto de un grupo de alumnos y profesores del Tecnológico de Monterrey para dar seguimiento y fácil acceso a la información de salud más relevante en el contexto de la pandemia de Coronavirus en México."/>

      </Helmet>
      <div className={classes.container}>
        <Header fixed={true}/>
        <div className={classes.teamsContainer}>
          <header className={classes.header}>
              <Typography className={classes.h1} variant={'h1'}>¿Quiénes Somos?</Typography>	
          </header>
          <div className="container text-justify">      
            <section className={classes.section}>
            <div>
              <Typography align = {"justify"} className={classes.textclass}>
                La plataforma <a href="/">mexicovid19.app </a> 
                es un esfuerzo conjunto de un grupo de alumnos y profesores del Tecnológico de 
                Monterrey para dar seguimiento y fácil acceso a la información de salud más relevante 
                en el contexto de la pandemia de Coronavirus en México. Mediante herramientas de 
                visualización e investigación aplicada, esta plataforma busca ser un nodo para discusión 
                y el análisis que reflejen la importancia de los datos para la toma de decisiones y el 
                diseño de política pública. Este proyecto surgió como un proyecto de la clase Herramientas 
                Tecnológicas para las Ciencias Sociales, un bloque del modelo Tec 21. Los estudiantes son de 
                diversas carreras y participan voluntariamente con su tiempo en la recolección de información, 
                ejecución de las visualizaciones de información cuantitativa y desarrollo de la plataforma.
              </Typography>  
            </div>
            </section>
            <PhotoGrid/>
          </div>   
        </div>
        <Footer/>
      </div>
    </div>
    );
}

const styles = () => ({
  section: {
		margin: '20px 0px',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: colors.GRAY,
	},
  
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },

  teamsContainer: {
    width: '70%',
		margin: 'auto',
		padding: '25px',
    paddingTop: '28px',
    backgroundColor: colors.WHITE
  },
  
  header: {
		borderBottom: `1px solid ${colors.BLACK}`,
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

  [`@media (max-width: ${1000}px)`]: {
		teamsContainer: {
			width: '100%',
			padding: '10px',
			paddingTop: '20px'
		},
		header: {
			alignItems: 'flex-end'
		},
		h1: {
			fontSize: '24px'
		},
  }
  
});
 
export default withStyles(styles)(Team);