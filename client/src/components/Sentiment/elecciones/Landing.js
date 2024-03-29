import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';

/* Router */

/* Components */
import Header from '../../Header'

function Landing({ classes }) {
    classes = useStyles();
    return (
        <div className={classes.component}>
            <Header/>
            <div className={classes.background}>
                <div className={classes.overlay}>
                    <div className={classes.container}>
                        <h1 className={classes.title}>Análisis de sentimientos - elecciones NL 2021</h1>
                        <h3 className={classes.description}>La pandemia motivó que un grupo de estudiantes y profesores del Tecnológico de Monterrey desarrollaran una plataforma que permitiera informar la evolución temporal y geográfica de la pandemia de Covid19 en México. Hoy que México vive un proceso electoral histórico, esta plataforma permite también difundir los resultados que los institutos electorales locales y el INE empiezan a difundir de la elección del 6 de junio del 2021.</h3>
                    </div>
                    <div className={classes.line}></div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    component:{
        width: '100%',
        height:'100vh'
    },
    background: {
        width: '100vw',
        height: 'calc(100vh - 64px)',
        backgroundPosition: 'center',
        backgroundSize:  'cover',
        backgroundImage: 'url(./img/sentiment/background.png)'
    },
    overlay: {
        width: '100vw',
        height: 'calc(100vh - 64px)',
        backgroundImage: `linear-gradient(to bottom, rgba(34, 35, 35,0.85)10%, rgba(34, 35, 35,1)90%)`,
        color: 'white',
        paddingTop: '300px',
        overflow: 'hidden'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: '45px',
        lineHeight: '45px',
        fontWeight: 'bold',
        marginBottom: '50px'
    },
    description: {
        textAlign: 'justify',
        maxWidth: '650px',
        margin: 'auto',
        fontSize: '18px',
    },
    container: {
        position: 'relative',
        width: '90%',
        maxWidth: '650px',
        margin: 'auto'
    },
    line: {
        width: '2px',
        height: '150px',
        background: 'white',
        margin: ' auto',
        position: 'absolute',
        bottom: '0px',
        left: 'calc(50% - 1px)'
    },

  [`@media (max-width: ${1000}px)`]: {
        background: {
            height: 'calc(100vh - 56px)',
        },
        overlay: {
            height: 'calc(100vh - 56px)',
        },
        title: {
            fontSize: '40px',
            lineHeight: '40px',
        },

  },

  [`@media (max-width: ${600}px)`]: {
    overlay: {
        paddingTop:'75px'
    },
    title: {
        fontSize: '35px',
        lineHeight: '35px',
    },
    description: {
        fontSize: '14px'
    },
    container: {
        position: 'relative',
        padding: '0px 10px 0px 10px'
    },
  },
  [`@media (max-width: ${400}px)`]: {
    title: {
        fontSize: '30px',
        lineHeight: '30px',
    },
  }
}));

export default Landing
