import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  bar: {
    backgroundColor: colors.BLACK + ' !important'
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexGrow: 1
  }

}));

const Header = ({classes}) => {
    classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Link to={'./'}>
            <button variant="raised">
              <Typography variant="h6" className={classes.title}>
                COVID-19 en México
              </Typography>
            </button>
          </Link>
          <div className={classes.buttons}>
            <Button color="inherit">Métodologia</Button>
            <Button color="inherit">Seguimiento a estados</Button>
            <Button color="inherit">Investigación</Button>
            <Link to={'./about-us'}>
              <button variant="raised">
              <Button color="inherit">Acerca de nosotros</Button>
              </button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;