import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/';
import Footer from '../Footer/';
import * as colors from '../../constants/colors'

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
          <div className="container-fluid bg-3 text-center">    
            <Typography align={'center'} variant={'h2'}>
             Equipo de Investigación 
            </Typography>
            <div className={classes.photoGridContainer}>
              <div className={classes.photoGridItem}>
                <p className="names">Mónica Lizzette P. Ayala</p>
                <img src="images/monicaayala.png" className="img-responsive" alt="Image"/>
                <p>Estudiante de Licenciatura en Publicidad y Comunicación de Mercados (LPM). Sus intereses son la creatividad, redacción, nutrición y bienestar.</p>
              </div>
              <div className={classes.photoGridItem}> 
                <p className="names">Abigail Barrera Suárez</p>
                <img src="images/abigailbarrera.png" className="img-responsive" alt="Image"/>
                <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses van desde la interpretación de datos y el uso de tecnologías en el área de gobierno hasta la redacción y la pintura. </p>
              </div>
              <div className={classes.photoGridItem}> 
                <p className="names">Sebastián Fajardo Turner</p>
                <img src="images/sebastianfajardo.jpg" className="img-responsive" alt="Image"/>
                <p>Estudiante de Ingeniería en Desarrollo Sustentable. Sus intereses profesionales son el análisis de datos espaciales y el desarrollo Regional. </p>
              </div>
              <div className={classes.photoGridItem}> 
                <p className="names">Marcelo Galán González</p>
                <img src="images/marcelogalan.jpeg" className="img-responsive" alt="Image"/>
                <p>Estudiante de Licenciatura en Economía. Sus intereses profesionales recaen en la economía nacional, la política transparente, y la anticorrupción.</p>
              </div>
            </div>
          </div>
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
    paddingTop: '128px',
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