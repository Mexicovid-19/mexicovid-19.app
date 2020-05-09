import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import * as colors from '../../constants/colors';

const Footer = ({ classes}) => {
  classes = useStyles();
  const url= process.env.PUBLIC_URL;
    
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Menu</Typography>
          <div className={classes.columns}>
            <Link to={url+'/'} className={classes.name}><Typography className={classes.rows}>Inicio</Typography></Link>
            <Link to={url+'/'} className={classes.name}><Typography className={classes.rows}>Investigación</Typography></Link>
            <Link to={url+'/regions'} className={classes.name}><Typography className={classes.rows}>Gráficos por Región</Typography></Link>
            <Link to={url+'/simulation'} className={classes.name}><Typography className={classes.rows}>Simulaciones</Typography></Link>
            <Link to={url+'/methodology'} className={classes.name}><Typography className={classes.rows}>Metodologías</Typography></Link>
            <Link to={url+'/about-us'} className={classes.name}><Typography className={classes.rows}>Acerca de Nosotros</Typography></Link>
          </div>
        </div>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Investigación</Typography>
          <div className={classes.columns}>
            <Link to={url+'/research/Diagnóstico%20de%20recursos%20físicos%20y%20humanos%20para%20atender%20la%20contingencia%20COVID-19/1'} className={classes.name}><Typography className={classes.rows}>Infraestructura Hospitalaria</Typography></Link>
            <Link to={url+'/research/Actualización%20del%20impacto%20en%20México%20por%20el%20COVID19/4'} className={classes.name}><Typography className={classes.rows}>Economía</Typography></Link>
            <Link to={url+'/research/Recuento%20y%20exploración%20de%20las%20cifras%20de%20pruebas%20de%20COVID-19%20realizadas%20por%20la%20autoridad%20federal%20(con%20fecha%20de%20corte%20del%2017%20de%20abril)/5'} className={classes.name}><Typography className={classes.rows}>Analisis de la base de pruebas</Typography></Link>
            <Link to={url+'/research/Curvas%20de%20casos%20positivos%20reportados%20por%20entidad%20federativa/2'} className={classes.name}><Typography className={classes.rows}>Confirmados positivos en los Estado</Typography></Link>
            <Link to={url+'/research/Información%20clínica%20de%20pacientes%20diagnosticados%20con%20covid-19%20en%20México/11'} className={classes.name}><Typography className={classes.rows}>Información clínica de pacientes diagnosticados con covid-19 en México</Typography></Link>
          </div>
        </div>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Seguimiento por Región</Typography>
          <div className={classes.columns}>
            <Link to={url+'/regions'} className={classes.name}><Typography className={classes.rows}>Estados</Typography></Link>
            <Link to={url+'/regions'} className={classes.name}><Typography className={classes.rows}>Municipios</Typography></Link>
          </div>
        </div>
      </div>
      <div className={classes.img}>   
        <img   title="logo tec Escuelas Gobernanza" src={process.env.PUBLIC_URL +'/img/EGyTP.png'}/>
        <img   title="logo tec Escuela Ingenieria" src={process.env.PUBLIC_URL +'/img/ING.png'}/>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `10px ridge ${colors.WHITE}`,
    backgroundColor: '#222222',
    height: 'fit-content',
    display: 'flex',
    marginTop: '50px',
    flexDirection: 'column',
    alignItems: 'center'
  },

  title: {
    marginBottom: '20px',
    borderBottom: `1px solid ${colors.WHITE}`
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    color: colors.WHITE,
    width: '80%',
    margin: 'auto'
  },

  columnsContainer: {
    flex: 1,
    padding: '30px 50px'
  },

  rows: {
    fontSize: '12px',
    marginBottom: '10px',
  },
  
  img: {
    display: 'flex',
    justifyContent: 'center',
    width: '24%',
  },

  [`@media (max-width: ${1000}px)`]: {
    columnsContainer: {
      padding: '10px'
    },
    content: {
      display: 'flex',
      flexDirection: 'column'
    },
    rows: {
      textAlign: 'center'
    },
    title: {
      textAlign: 'center'
    },
    root: {
      marginTop: '0px',
    },

    img: {
      width: '80%',
      display: 'flex',
      flexFlow: 'wrap',
    },
    
  }
  
}));

export default Footer;