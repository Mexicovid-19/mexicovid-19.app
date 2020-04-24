import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';


const PhotoGrid = ({classes}) => {
    return (
        <div className="container-fluid bg-3 text-center">    
        <Typography align={'center'} variant={'h2'}>
            Equipo de Investigación 
        </Typography>
        <div className={classes.photoGridContainer}>
            <div className={classes.photoGridItem}>
                <p className="names" align={'center'} >Mónica Lizzette P. Ayala</p>
                <img src="images/monicaayala.png" className="img-responsive" alt="Image"/>
                <p>Estudiante de Licenciatura en Publicidad y Comunicación de Mercados (LPM). Sus intereses son la creatividad, redacción, nutrición y bienestar.</p>
            </div>
            <div className={classes.photoGridItem}> 
                <p className="names" align={'center'}>Abigail Barrera Suárez</p>
                <img src="images/abigailbarrera.png" className="img-responsive" alt="Image"/>
                <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses van desde la interpretación de datos y el uso de tecnologías en el área de gobierno hasta la redacción y la pintura. </p>
            </div>
            <div className={classes.photoGridItem}> 
                <p className="names" align={'center'}>Sebastián Fajardo Turner</p>
                <img src="images/sebastianfajardo.jpg" className="img-responsive" alt="Image"/>
                <p>Estudiante de Ingeniería en Desarrollo Sustentable. Sus intereses profesionales son el análisis de datos espaciales y el desarrollo Regional. </p>
            </div>
            <div className={classes.photoGridItem}> 
                <p className="names" align={'center'}>Marcelo Galán González</p>
                <img src="images/marcelogalan.jpeg" className="img-responsive" alt="Image"/>
                <p>Estudiante de Licenciatura en Economía. Sus intereses profesionales recaen en la economía nacional, la política transparente, y la anticorrupción.</p>
            </div>
            <div className={classes.photoGridItem}> 
                <p className="names" align={'center'}>Marcelo Galán González</p>
                <img src="images/marcelogalan.jpeg" className="img-responsive" alt="Image"/>
                <p>Estudiante de Licenciatura en Economía. Sus intereses profesionales recaen en la economía nacional, la política transparente, y la anticorrupción.</p>
            </div>
        </div>
    </div>
    );
};

const styles = () => ({
    container: {
        width: '100%',
        backgroundColor: colors.GRAY,
    },

    teamsContainer: {
        width: '70%',
        margin: 'auto',
        paddingTop: '64px',
        backgroundColor: colors.WHITE
    },

    photoGridContainer: {
        display: 'flex',
        justifyContent: 'center',
    },

    photoGrid: {
        width: '900px',
        display: 'flex',
        justifyContent: 'flex-start',
    },

    photoGridItem: {
        border: '1px solid #fff',
        width: '300px',
        height: '300px',
    },
});

   
export default withStyles(styles)(PhotoGrid);