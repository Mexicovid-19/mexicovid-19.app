import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import * as colors from '../../constants/colors';

const Footer = ({ classes}) => {
  classes = useStyles();
  const url= process.env.PUBLIC_URL;

  let click = () => {
    window.scrollTo({ behavior: 'smooth', top: -60 })
  }
    
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Menu</Typography>
          <div className={classes.columns}>
            <Link to={url+'/'} className={classes.name}><Typography className={classes.rows}>Inicio</Typography></Link>
            <Link to={url+'/research'} onClick={click} className={classes.name}><Typography className={classes.rows}>Investigación</Typography></Link>
            <Link to={url+'/regions'} onClick={click} className={classes.name}><Typography className={classes.rows}>Gráficos por Región</Typography></Link>
            <Link to={url+'/simulation'} onClick={click} className={classes.name}><Typography className={classes.rows}>Prospectiva</Typography></Link>
            <Link to={url+'/methodology'} onClick={click} className={classes.name}><Typography className={classes.rows}>Metodologías</Typography></Link>
            <Link to={url+'/about-us'} onClick={click} className={classes.name}><Typography className={classes.rows}>Acerca de Nosotros</Typography></Link>
          </div>
        </div>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Investigación</Typography>
          <div className={classes.columns}>
            <Link to={url+'/research?cat=1'} onClick={click} className={classes.name}><Typography className={classes.rows}>Infraestructura Hospitalaria</Typography></Link>
            <Link to={url+'/research?cat=2'} onClick={click} className={classes.name}><Typography className={classes.rows}>Economía</Typography></Link>
            <Link to={url+'/research?cat=3'} onClick={click} className={classes.name}><Typography className={classes.rows}>Analisis de la base de pruebas</Typography></Link>
            <Link to={url+'/research?cat=4'} onClick={click} className={classes.name}><Typography className={classes.rows}>Confirmados positivos en los Estado</Typography></Link>
            <Link to={url+'/research?cat=5'} onClick={click} className={classes.name}><Typography className={classes.rows}>Información clínica de pacientes diagnosticados con covid-19 en México</Typography></Link>
            <Link to={url+'/research?cat=6'} onClick={click} className={classes.name}><Typography className={classes.rows}>Geografía</Typography></Link>
            <Link to={url+'/research?cat=7'} onClick={click} className={classes.name}><Typography className={classes.rows}>Comercio</Typography></Link>
          </div>
        </div>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Seguimiento por Región</Typography>
          <div className={classes.columns}>
            <Link to={url+'/regions?show=States'} onClick={click} className={classes.name}><Typography className={classes.rows}>Estados</Typography></Link>
            <Link to={url+'/regions?show=Municipalities'} onClick={click} className={classes.name}><Typography className={classes.rows}>Municipios</Typography></Link>
          </div>
        </div>
      </div>
      <div className={classes.img}>   
        <img   className={classes.imglogo} title="logo tec Escuelas Gobernanza" src={process.env.PUBLIC_URL +'/img/EGyTP.png'}/>
        <img   className={classes.imglogo} title="logo tec Escuela Ingenieria" src={process.env.PUBLIC_URL +'/img/ING.png'}/>
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
  },
  
  imglogo: {
    maxHeight: '150px'
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