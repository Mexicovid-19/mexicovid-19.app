import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import {Helmet} from 'react-helmet';
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom';
import './404.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#DADFDF',
  },
  back:{
      color:'#262626'
  }
}));

const LinkElement = (props) => {
    const {classes, element, url} = props;
  
    return (
      <NavLink to={process.env.PUBLIC_URL+url} className={classes}>
        {element}
      </NavLink>
    )
}

const NotFoundPage = () => {

    const classes = useStyles();
    document.title = "Página no encontrada | MexiCOVID";
    return (
        <div className={classes.container}>
            <Helmet>
                <title>404 | MexiCOVID</title>
            </Helmet>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h3>Oops! Página no encontrada</h3>
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <h2>Lo sentimos, pero no se encontró la página solicitada</h2>
                    <LinkElement url='/' element={
                        <Button variant="contained">
                            Ir a inicio
                        </Button>
                    }/>
                </div>
            </div>
        </div>
  );
}

export default NotFoundPage;
