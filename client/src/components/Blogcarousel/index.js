import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    labelp:{
        textAlign:'center',
        fontWeight: 'bold'
    }
}));

const icons = [{
        img: "icons/iconosInfraestructura.png" ,
        alt: "iconosInfraestructura",
        text: "    Infraestructura"
    },        
    {
        img: "icons/iconosEconomia.png" ,
        alt: "iconosEconomia",
        text: "    Economía"
    },        
    {
        img: "icons/iconosExaminacion.png" ,
        alt: "iconosExaminacion",
        text: "    Analisis de pruebas"
    },        
    {
        img: "icons/iconosConfirmados.png" ,
        alt: "iconosConfirmados",
        text: "    Confirmados"
    },        
    {
        img: "icons/iconosDesglose.png" ,
        alt: "iconosDesglose",
        text: "    Información clinica"
    },        
    {
        img: "icons/iconosGeografia.png" ,
        alt: "iconosGeografia",
        text: "    Geografía"
    }
]

const Element = (props) => {
    const {
        classes,
        img,
        alt,
        text,
        onClick,
        key
    } = props;
    console.log("key",key)
    return (
        <div>
            <img src={img} alt={alt}/>
            <div className={classes.labelp} onClick={onClick}>
                {text}
            </div>
        </div>
    );
}

const Blogcarousel = ( props ) => {
    const { posts, onClick } = props;
    const classes = useStyles();
    console.log(posts, icons)
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
            animationDuration={500}
        >
            {
                posts.map((v, i) => {
                  return <Element blog={v} onClick={onClick} key={i} />;
                })
            }
        </InfiniteCarousel>
        );
}

export default Blogcarousel;