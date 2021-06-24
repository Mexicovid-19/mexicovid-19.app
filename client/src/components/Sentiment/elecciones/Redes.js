import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';

/* Router */

/* Components */

export default function Redes({ classes }) {
    classes = useStyles();
    return (
        <div className={classes.component}>
            <div className={classes.line}></div>
            <img className={classes.redesSvg} src='./img/sentiment/redes.svg'/>
            <div className={classes.lineB}></div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    component:{
        width: '100%',
        height:'100vh',
        background: 'rgb(34, 35, 35)',
    },
    redesSvg: {
        width: '90%',
        height: '90%',
        position: 'relative',
        left: '5%',
        top: '5%'
    },
    line: {
        width: '2px',
        height: '50px',
        background: 'white',
        margin: ' auto',
        position: 'absolute',
        top: '0px',
        left: '50%'
    },
    lineB: {
        width: '2px',
        height: '50px',
        background: 'white',
        margin: ' auto',
        position: 'absolute',
        bottom: '0px',
        left: '50%'
    },
}));

