import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';

const PhotoGrid = ({classes}) => {
    return (
        <div className="container-fluid bg-3 text-center">    
            <Typography align={'center'} variant={'h2'}>
                Equipo de Investigación 
            </Typography>
            <Grid container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Mónica Lizzette P. Ayala</p>
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
                    <p className="names" align={'center'}>Lucía Gallardo Mariela</p>
                    <img src="images/luciagallardo.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Sus intereses generales son la lectura, la psicología, el bienestar, la belleza y el arte, el mundo y lo que está detrás de todo.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>José Ángel García Villanueva</p>
                    <img src="images/joseangelgarcia.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Paola Gonzalez</p>
                    <img src="images/paolagonzalez.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Diseño Industrial.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Yael Jesús Heredia Mandujano</p>
                    <img src="images/yaelheredia.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Derecho. Sus intereses son el comportamiento del ciudadano, así como el de la sociedad, buscando un comportamiento que maximice los beneficios de la sociedad.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Cinthia Janette Lara Luna</p>
                    <img src="images/cinthiajanette.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Gobierno y Transformación Pública. Intereses profesionales en emprendimiento público y desarrollo de políticas públicas.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Alicia Landín</p>
                    <img src="images/alicelandin.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería en Desarrollo Sustentable. Intereses profesionales en el desarrollo y planeación urbana, Sistemas de Información Geográfica y políticas públicas.</p>
                </div>  
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Lorena Lazos</p>
                    <img src="images/lorenalazos.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Verónica Márquez</p>
                    <img src="images/veronicamarquez.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses son la historia, la diplomacia,  el emprendimiento social y la búsqueda del respeto a los derechos humanos.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Sebastián Marquinez Rodríguez</p>
                    <img src="images/sebastianmarquinez.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciaturas en Gobierno y Transformación Pública y en Economía. Sus intereses profesionales son la educación, la política mexicana, las finanzas, y la sociología.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Mónica Medellín Estrada</p>
                    <img src="images/monicamedellin.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses profesionales son los estudios para el desarrollo, ciudades y América Latina.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Felipe José Mercado</p>
                    <img src="images/felipemercado.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Derecho. Intereses profesionales en derecho internacional, debate, política y emprendimiento social.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Juan Antonio Muñoz</p>
                    <img src="images/juanantoniomunos.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Su interés profesional es el análisis de datos para la toma de decisiones y la planeación de proyectos.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Karla Osorio Ferrer</p>
                    <img src="images/karlaosorio.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Gobierno y Transformación Pública. Su interés profesional es el análisis de datos para la toma de decisiones y la planeación de proyectos.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Pedro Pacheco Solano</p>
                    <img src="images/pedropacheco.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Arquitectura. Tiene intereses profesionales en planeación y regeneración urbana así como restauración y rehabitiación de edificaciones.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Lucía Retes Colfer</p>
                    <img src="images/luciaeretes.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Su interés profesional es la geopolítica y políticas públicas.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Andrea Salinas Blancas</p>
                    <img src="images/andreasalinas.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Gobierno y Transformación Pública. Sus intereses profesionales son el emprendimiento público y  el trabajo social.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Daniel Schulz López</p>
                    <img src="images/danielschulz.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Intereses profesionales en Finanzas y Sociología.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Idalee Vargas</p>
                    <img src="images/idaleevargas.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Publicidad y Comunicación de Mercados (LPM). Sus intereses son la creatividad, redacción, nutrición y bienestar.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Arnulfo Emmanuel Zaldívar Ruenes</p>
                    <img src="images/fitozaldivar.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Intereses profesionales en economía, finanzas, política y en investigación, búsqueda e interpretación de datos.</p>
                </div>
            </Grid>
            <Typography align={'center'} variant={'h2'}>
                Equipo de Desarrollo Web 
            </Typography>
            <Grid container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Mildred Irais Gil Melchor</p>
                    <img src="images/mildred.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería en Tecnologías Computacionales, apasionada por el desarrollo de tecnología y su impacto en la vida diaria. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Ángel Francisco Figueroa Rivera</p>
                    <img src="images/angelfigueroa.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería Mecatrónica con intereses en el área de software y las aplicaciones móviles industriales. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Juan Carlos Garfias</p>
                    <img src="images/juancarlosgarfias.png" className="img-responsive" alt="Image"/>
                    <p>Estudiante  de ingeniería en Tecnologías Computacionales, amante de las tecnologías emergentes. Equipo de desarrollo web.</p>
                </div>
            </Grid>
            <Typography align={'center'} variant={'h2'}>
                Equipo Interdisciplinario de Profesores
            </Typography>
            <Grid container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItemTeacher}> 
                    <p className="names" align={'center'}>Dr. Alejandro Díaz Domínguez</p>
                    <img src="images/alejandrodiaz.png" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="mailto:alejandrod.dominguez@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>alejandrod.dominguez@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/alejdiazd" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@alejdiazd</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}>
                    <p className="names" align={'center'}>Dr. Alfredo Galván Galván</p>
                    <img src="images/alfredogalvan.jpg" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="mailto:alfredo.galvan@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>alfredo.galvan@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/jagalvan2" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@jagalvan2</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}>
                    <p className="names" align={'center'}>Dr. Fernando Gómez Zaldívar</p>
                    <img src="images/fernandogomez.png" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="mailto:fergo7@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>fergo7@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/fgmzz" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@fgmzz</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}>
                    <p className="names" align={'center'}>Dr. Diego Fabián Lozano</p>
                    <img src="images/fabianlozano.png" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="images/fabianlozano.png" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>dflozano@tec.mx</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}> 
                    <p className="names" align={'center'}>Dra. Grissel Olivera Martínez</p>
                    <img src="images/grisselolivera.png" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="mailto:grissel.olivera@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>grissel.olivera@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/grissel_olivera" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@grissel_olivera</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}>
                    <p className="names" align={'center'}><a href="https://www.edmundomolinamx.org/" target="_blank">Dr. Edmundo Molina</a></p>
                    <img src="images/edmundomolina.jpg" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="mailto:edmundo.molina@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>edmundo.molina@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/EdmundoMolinaMx" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@EdmundoMolinaMx</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}>
                    <p className="names" align={'center'}><a href="www.robertoponcelopez.com" target="_blank">Dr. Roberto Ponce López</a></p>
                    <img src="images/robertoponce.png" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="mailto:rpl@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>rpl@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/roponmx" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@roponmx</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}> 
                    <p className="names" align={'center'}>Mta. Azucena Rojas Parra</p>
                    <img src="images/azucenarojas.png" className="img-responsive" alt="Image"/>
                    <p>
                        <Grid>
                            <a href="mailto:azuropa@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>azuropa@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/azuropa" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@azuropa</a>
                        </Grid>
                    </p>
                </div>
            </Grid>       
        </div>
    );
};

const styles = () => ({
    container: {
        width: '100%',
        backgroundColor: colors.GRAY,
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
        marginTop: '30px !important',
        marginBottom: '150px !important'
    },

    photoGridItemTeacher: {
        border: '1px solid #fff',
        width: '300px',
        height: '300px',
        marginTop: '30px !important',
        marginBottom: '80px !important'
    },

    contactText:{
        display:'flex',
        
    },

    iconspace: {
        marginRight: '5px',
        top: '0px',
        left: '0px',
        cursor: 'pointer',
        color: colors.BLACK,
    },

});

   
export default withStyles(styles)(PhotoGrid);