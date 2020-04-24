import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  bar: {
    backgroundColor: colors.BLACK + ' !important'
  },
  name: {
    flex: '1'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '2'
  },
  button: {
    '&:hover': {
      borderBottom: '1px solid',
      borderRadius: '0px',
    }
  },
  selectedBtn: {
    borderBottom: '1px solid',
    borderRadius: '0px',
  },
  img: {
    maxWidth: '30px',
    verticalAlign: 'top',
    marginRight: '10px',
  }
}));

const Header = ({ classes, fixed=false}) => {
    classes = useStyles();
    let location = window.location.pathname;
    
    return (
      <AppBar position={`${fixed ? 'fixed' : 'static'}`} className={classes.bar}>
        <Toolbar>
          <Link to={'./'} className={classes.name}>
            <img className={classes.img} title="logo tec" src='/img/192x192.png'/>
            <button variant="raised">
              <Typography variant="h6" className={classes.title}>
                COVID-19 en México
              </Typography>
            </button>
          </Link>
          <div className={classes.buttons}>
            <Link to={'./about-us'}>
              <Button className={location === '/about-us' ? classes.selectedBtn : classes.button} color="inherit">Acerca de nosotros</Button>
            </Link>
            <Link to={'./methodology'}>
              <Button className={location === '/methodology' ? classes.selectedBtn : classes.button} color="inherit">Métodologia</Button>
            </Link>
            <Link to={'./regions'}>
            <Button className={location === '/regions' ? classes.selectedBtn : classes.button} color="inherit">Seguimiento por Regiones</Button>
            </Link>
            <Button className={location === '/investigation' ? classes.selectedBtn : classes.button} color="inherit">Investigación</Button>
            <Link to={'./'}>
              <Button className={location === '/' ? classes.selectedBtn : classes.button} color="inherit">Inicio</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default Header;