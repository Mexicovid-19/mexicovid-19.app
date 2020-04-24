import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/';
import Footer from '../Footer/';
import * as colors from '../../constants/colors';
import PhotoGrid from './teamPhotos';

const Team = ({classes}) => {
  
  return (
    <div className={classes.container}>
      <Header isFixed={true}/>
      <div className={classes.teamsContainer}>
        <div className="container text-center">
          <Typography align={'center'} variant={'h1'}>¿Quiénes Somos?</Typography>      
          <div>
            <Typography>
              La plataforma <a href="www.mexicovid19.mx">www.mexicovid19.mx</a> 
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
          <PhotoGrid/>
        </div>
      </div>
      <Footer/>
    </div>
    );
}

const styles = () => ({
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },

  teamsContainer: {
    width: '70%',
    margin: 'auto',
    paddingTop: '64px',
    backgroundColor: colors.WHITE
  },

  photoGridContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  
  photoGrid: {
    width: '900px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  
  photoGridItem: {
    border: '1px solid #fff',
    width: '300px',
    height: '300px',
  },
});
 
export default withStyles(styles)(Team);