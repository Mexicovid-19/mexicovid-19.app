import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';

/* Router */
import { Link } from 'react-router-dom';

/* Components */
import Header from '../Header'
import { WhiteButton } from '../../Utils/components/Buttons';

function Landing({ classes }) {
    classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.overlay}>
                {/* Header */}
                <Header/>

                <div className={classes.container}>
                    {/* title */}
                    <h1 className={classes.title}>Mexicovid-19</h1>

                    {/* Description */}
                    <h3 className={classes.description}>La pandemia motivo que un grupo de estudiantes y profesores del Tecnológico de Monterrey desarrollaran una plataforma que permitiera informar la evolución temporal y geográfica de la pandemia de Covid19 en México. Hoy que México vive un proceso electoral histórico, esta plataforma permite también difundir los resultados que los institutos electorales locales y el INE empiezan a difundir de la elección del 6 de junio del 2021.</h3>

                    {/* Botones */}
                    <div className={classes.btnsContainer}>
                        <div>
                            <Link to="/covid-19">
                                <WhiteButton className={classes.btn}>
                                    Covid19
                                </WhiteButton>
                            </Link>
                        </div>
                        
                        <div>
                            <Link to="/elecciones">
                                <WhiteButton className={classes.btn}>
                                    Elecciones 2021
                                </WhiteButton>
                            </Link>
                        </div>
                        
                        
                    </div>
                </div>

                
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    background: {
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize:  'cover',
        backgroundImage: 'url(./img/landing/background.jpg)'
    },
    overlay: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `linear-gradient(to bottom, rgba(34, 35, 35,1)10%, rgba(34, 35, 35,0.9)100%)`,
        color: 'white',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: '100px',
        fontWeight: 'bold',
        marginBottom: '50px'
    },
    description: {
        textAlign: 'justify',
        maxWidth: '650px',
        margin: 'auto',
        fontSize: '18px',
        marginBottom: '20px',
    },
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '90%',
        maxWidth: '650px'
    },
    btnsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    btn: {
        width: '180px'
    },

  [`@media (max-width: ${999}px)`]: {
    title: {
        fontSize: '70px',
    },
  },

  [`@media (max-width: ${600}px)`]: {
    title: {
        fontSize: '45px',
    },
    container: {
        position: 'relative',
    },
    btnsContainer: {
        display: 'block',
        textAlign: 'center'
    },
    btn: {
        marginBottom: '20px'
    },
  }
}));

export default Landing
