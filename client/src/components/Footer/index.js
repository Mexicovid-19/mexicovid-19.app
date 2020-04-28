import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import * as colors from '../../constants/colors';

const Footer = ({ classes}) => {
    classes = useStyles();
    
    return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Menu</Typography>
          <div className={classes.columns}>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Inicio</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Investigación</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Gráficos por Región</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Simulaciones</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Metodologías</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Acerca de Nosotros</Typography></Link>
          </div>
        </div>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Investigación</Typography>
          <div className={classes.columns}>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Infraestructura Hospitalaria</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Economía</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Analisis de la base de pruebas</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Confirmados positivos en los Estado</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Información clínica de pacientes diagnosticados con covid-19 en México</Typography></Link>
          </div>
        </div>
        <div className={classes.columnsContainer}>
          <Typography className={classes.title}>Seguimiento por Región</Typography>
          <div className={classes.columns}>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Estados</Typography></Link>
            <Link to={'./'} className={classes.name}><Typography className={classes.rows}>Municipios</Typography></Link>
          </div>
        </div>
      </div>
      <img className={classes.img} title="logo tec escuelas" src='/img/logoEGTP-MENUnuevo-01.png'/>
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
    maxHeight: '75px',
    display: 'flex',
    justifyContent: 'end',
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
    }
  }
}));

export default Footer;