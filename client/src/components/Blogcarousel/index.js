import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    labelp:{
        textAlign:'center',
        fontWeight: 'bold'
    }
}));

export const Blogcarousel= () => {
    const classes = useStyles();
    return (
    <InfiniteCarousel
        breakpoints={[
        {
            breakpoint: 500,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            },
        },
        ]}
        showSides={true}
        sidesOpacity={.1}
        sideSize={.1}
        slidesToScroll={1}
        slidesToShow={4}
        scrollOnDevice={true}
    >
        <div>
            <img src="icons/iconosInfraestructura.png" alt="iconosInfraestructura"/>
            <div className={classes.labelp}>
                Infraestructura
            </div>
        </div>
        <div>
            <img src="icons/iconosEconomia.png" alt="iconosEconomia"/>
            <div className={classes.labelp}>
                Economía
            </div>
        </div>
        <div>
            <img src="icons/iconosExaminacion.png" alt="iconosExaminacion"/>
            <div className={classes.labelp}>
                Analisis de pruebas
            </div>
        </div>
        <div>
            <img src="icons/iconosConfirmados.png" alt="iconosConfirmados"/>
            <div className={classes.labelp}>
                Confirmados
            </div>
        </div>
        <div>
            <img src="icons/iconosDesglose.png" alt="iconosDesglose"/>
            <div className={classes.labelp}>
                Información clinica
            </div>
        </div>
        <div>
            <img src="icons/iconosGeografia.png" alt="iconosGeografia"/>
            <div className={classes.labelp}>
                Geografía
            </div>
        </div>
    </InfiniteCarousel>
    );
}

export default Blogcarousel;