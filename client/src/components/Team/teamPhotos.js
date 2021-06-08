import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';

const PhotoGrid = ({classes}) => {
    return (
        <div className="container-fluid bg-3 text-center">    

            {/* actual */}
            <Typography align={'center'} variant={'h2'} classes={{root:classes.sectionTitles}}>
                Equipo de Desarrollo Web - actual 
            </Typography>
            <Grid className={classes.grid} container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItem}>
                    <p className={classes.names} align={'center'}>Estefanía Charles</p>
                    {/* <img src="images/angelfigueroa.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante  de ingeniería en Tecnologías Computacionales. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Ana Elisa Estrada</p>
                    {/* <img src="images/juancarlosgarfias.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante  de ingeniería en Tecnologías Computacionales. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Abraham Cepeda</p>
                    {/* <img src="images/mildred.jpg" className="img-responsive" alt="Image"/> */}
                    {/* <p>Estudiante de Ingeniería en Tecnologías Computacionales, buscando tener un impacto positivo en la ciudad a través del desarrollo de nuevas tecnologías.</p> */}
                    <p>Estudiante  de ingeniería en Tecnologías Computacionales. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Juan Díaz</p>
                    {/* <img src="images/lourdesBadilla.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante  de ingeniería en Tecnologías Computacionales. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Javier Agostini</p>
                    {/* <img src="images/eduardovillalpan.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante  de ingeniería en Tecnologías Computacionales. Equipo de desarrollo web.</p>
                </div>
            </Grid> 

            {/* Anterior */}
            <Typography align={'center'} variant={'h2'} classes={{root:classes.sectionTitles}}>
                Equipo de Desarrollo Web - anterior 
            </Typography>
            <Grid container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Mildred Irais Gil Melchor</p>
                    {/* <img src="images/mildred.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante de Ingeniería en Tecnologías Computacionales, apasionada por el desarrollo de tecnología y su impacto en la vida diaria. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className={classes.names} align={'center'}>Ángel Francisco Figueroa Rivera</p>
                    {/* <img src="images/angelfigueroa.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante de Ingeniería Mecatrónica con intereses en el área de software y las aplicaciones móviles industriales. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Juan Carlos Garfias</p>
                    {/* <img src="images/juancarlosgarfias.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante  de ingeniería en Tecnologías Computacionales, amante de las tecnologías emergentes. Equipo de desarrollo web.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>María de Lourdes Badillo Granillo</p>
                    {/* <img src="images/lourdesBadilla.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante de Ingeniería en Tecnologías Computacionales. Busco desarrollar soluciones a problemas por medio de la programación y el emprendimiento.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Eduardo Villalpando Mello</p>
                    {/* <img src="images/eduardovillalpan.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante de ITC, apasionado por impactar positivamente la vida de muchas personas mediante la programación y el diseño</p>
                </div>
            </Grid>

            {/* Información */}
            <Typography align={'center'} variant={'h2'} classes={{root:classes.sectionTitles}}>
                Equipo de Información
            </Typography>
            <Grid container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Michelle Acosta</p>
                    {/* <img src="images/lourdesBadilla.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante de licenciatura en Gobierno y Transformación Pública. Equipo de Información.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>Juan Antonio Muñoz</p>
                    {/* <img src="images/eduardovillalpan.jpg" className="img-responsive" alt="Image"/> */}
                    <p>Estudiante de licenciatura en Economía. Equipo de Información.</p>
                </div>
            </Grid>

            {/* Profesores */}
            <Typography align={'center'} variant={'h2'} classes={{root:classes.sectionTitles}}>
                Equipo Interdisciplinario de Profesores
            </Typography>
            <Grid className={classes.grid} container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItemTeacher}> 
                    <p className={classes.names} align={'left'}>Dr. Alejandro Díaz Domínguez</p>
                    {/* <img src="images/Alejandrodiaz.jpg" className="img-responsive" alt="Image"/> */}
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
                    <p className={classes.names} align={'left'}>Dr. Alfredo Galván Galván</p>
                    {/* <img src="images/alfredogalvan.jpg" className="img-responsive" alt="Image"/> */}
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
                    <p className={classes.names} align={'left'}>Dr. Fernando Gómez Zaldívar</p>
                    {/* <img src="images/fernandogomez.jpg" className="img-responsive" alt="Image"/> */}
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
                    <p className={classes.names} align={'left'}>Dr. Diego Fabián Lozano</p>
                    {/* <img src="images/fabianlozano.jpg" className="img-responsive" alt="Image"/> */}
                    <p>
                        <Grid>
                            <a href="images/fabianlozano.jpg" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>dflozano@tec.mx</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}> 
                    <p className={classes.names} align={'left'}>Dra. Grissel Olivera Martínez</p>
                    {/* <img src="images/grisselolivera.jpg" className="img-responsive" alt="Image"/> */}
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
                    <p className={classes.names} align={'left'}><a href="https://www.edmundomolinamx.org/" target="_blank">Dr. Edmundo Molina</a></p>
                    {/* <img src="images/edmundomolina.jpg" className="img-responsive" alt="Image"/> */}
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
                    <p className={classes.names} align={'left'}><a href="http://www.robertoponcelopez.com" target="_blank">Dr. Roberto Ponce López</a></p>
                    {/* <img src="images/robertoponce.jpg" className="img-responsive" alt="Image"/> */}
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
                    <p className={classes.names} align={'left'}>Mpa. Azucena Rojas Parra</p>
                    {/* <img src="images/azucenarojas.jpg" className="img-responsive" alt="Image"/> */}
                    <p>
                        <Grid>
                            <a href="mailto:azuropa@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>azuropa@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/azuropa" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@azuropa</a>
                        </Grid>
                    </p>
                </div>
                <div className={classes.photoGridItemTeacher}> 
                    <p className={classes.names} align={'left'}>Mto. Arturo Sánchez</p>
                    {/* <img src="images/azucenarojas.jpg" className="img-responsive" alt="Image"/> */}
                    <p>
                        <Grid>
                            <a href="mailto:arturo.sanchezg@tec.mx" target="_blank" className={classes.contactText}><MailIcon className={classes.iconspace}/>arturo.sanchezg@tec.mx</a>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                            <a href="https://twitter.com/ArturoSanchezG" target="_blank" className={classes.contactText}><TwitterIcon className={classes.iconspace}/>@ArturoSanchezG</a>
                        </Grid>
                    </p>
                </div>
            </Grid>
              
            {/* <Typography align={'center'} variant={'h2'} classes={{root:classes.sectionTitles}}>
                Equipo de Investigación 
            </Typography>
            <Grid container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
            <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Natalia Aguirre Sánchez</p>
                    <img src="images/nataliaaguirre.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses profesionales son la política mexicana e internacional, estudios de género y política pública.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Mónica Lizzette P. Ayala</p>
                    <img src="images/monicaayala.jpeg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Publicidad y Comunicación de Mercados (LPM). Sus intereses son la creatividad, redacción, nutrición y bienestar.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Abigail Barrera Suárez</p>
                    <img src="images/abigailbarrera.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses van desde la interpretación de datos y el uso de tecnologías en el área de gobierno hasta la redacción y la pintura.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Lucía Cuellar D´Amico</p>
                    <img src="images/luciacuellar.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de doble titulación en Economía y Relaciones Internacionales de segundo semestre. Sus intereses profesionales son economía política internacional, economía digital y diplomacia corporativa.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Manuel Espinosa de los Monteros Muciño</p>
                    <img src="images/manuelespinosa.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería en Desarrollo Sustentable. Sus intereses profesionales son el análisis de datos espaciales y el desarrollo Regional.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Sebastián Fajardo Turner</p>
                    <img src="images/sebastianfajardo.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería Química. Intereses en el desarrollo de energías renovables y procesos sustentables.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Marcelo Galán González</p>
                    <img src="images/marcelogalan.jpeg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Sus intereses profesionales recaen en la economía nacional, la política transparente, y la anticorrupción.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Lucía Gallardo Mariela</p>
                    <img src="images/luciagallardo.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Sus intereses generales son la lectura, la psicología, el bienestar, la belleza y el arte, el mundo y lo que está detrás de todo.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Humberto García Salinas</p>
                    <img src="images/humbertogarcia.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Sus intereses profesionales son el emprendimiento, las finanzas y estudios para el desarrollo de las ciudades en A.L.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>José Ángel García Villanueva</p>
                    <img src="images/joseangelgarcia.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Paola Gonzalez</p>
                    <img src="images/paolagonzalez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Diseño Industrial.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Marcelo González Meier</p>
                    <img src="images/marcelogonzalez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales, intereses en geografía (continente africano), historia y el fútbol.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Yael Jesús Heredia Mandujano</p>
                    <img src="images/yaelheredia.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Derecho. Sus intereses son el comportamiento del ciudadano, así como el de la sociedad, buscando un comportamiento que maximice los beneficios de la sociedad.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>León Hernández Robles</p>
                    <img src="images/leonhernandez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Gobierno y Transformación Pública. Interesado en análisis de datos y diseño de políticas públicas.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Ximena Jiménez Martínez</p>
                    <img src="images/ximenajimenez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Administración Financiera. Sus intereses profesionales son el desarrollo de sistemas que fomenten la inclusión financiera en la población.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Alicia Landín</p>
                    <img src="images/alicelandin.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería en Desarrollo Sustentable. Intereses profesionales en el desarrollo y planeación urbana, Sistemas de Información Geográfica y políticas públicas.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Cinthia Janette Lara Luna</p>
                    <img src="images/cinthiajanette.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Gobierno y Transformación Pública. Intereses profesionales en emprendimiento público y desarrollo de políticas públicas.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Lorena Lazos</p>
                    <img src="images/lorenalazos.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Romina Mané Pérez Robles</p>
                    <img src="images/rominaperez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante en la Licenciatura de Relaciones Internacionales.Sus intereses son, la implementación de tecnologías para las Ciencias Sociales,la inclusión social, así como las artes.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Verónica Márquez</p>
                    <img src="images/veronicamarquez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses son la historia, la diplomacia,  el emprendimiento social y la búsqueda del respeto a los derechos humanos.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Sebastián Marquinez Rodríguez</p>
                    <img src="images/sebastianmarquinez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciaturas en Gobierno y Transformación Pública y en Economía. Sus intereses profesionales son la educación, la política mexicana, las finanzas, y la sociología.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Brenda Guadalupe Martínez Orta</p>
                    <img src="images/brendamartinez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería Física Industrial. Sus intereses van desde la astronomía hasta el análisis de datos para optimización.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Mónica Medellín Estrada</p>
                    <img src="images/monicamedellin.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Sus intereses profesionales son los estudios para el desarrollo, ciudades y América Latina.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Felipe José Mercado</p>
                    <img src="images/felipemercado.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Derecho. Intereses profesionales en derecho internacional, debate, política y emprendimiento social.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Juan Antonio Muñoz</p>
                    <img src="images/juanantoniomunos.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Su interés profesional es el análisis de datos para la toma de decisiones y la planeación de proyectos.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Jacobo Navarro Aguilar</p>
                    <img src="images/juliannavarro.jpg" className="img-responsive" alt="Image"/>
                    <p></p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Elena Núñez Banuet Flores</p>
                    <img src="images/elenanunez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de la Licenciatura en Derecho. Le apasiona la lectura y la danza clásica. Su objetivo con el Derecho es otorgar mayor transparencia a los procesos jurídicos.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Karla Osorio Ferrer</p>
                    <img src="images/karlaosorio.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Gobierno y Transformación Pública. Su interés profesional es el análisis de datos para la toma de decisiones y la planeación de proyectos.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Pedro Pacheco Solano</p>
                    <img src="images/pedropacheco.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Arquitectura. Tiene intereses profesionales en planeación y regeneración urbana así como restauración y rehabitiación de edificaciones.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Mario Armando Ramírez Vielma</p>
                    <img src="images/armandoramirez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Ingeniería en Mecatrónica. Sus intereses personales son el desarrollo e implementación de tecnologías que generen un bien social.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Lucía Retes Colfer</p>
                    <img src="images/luciaeretes.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Relaciones Internacionales. Su interés profesional es la geopolítica y políticas públicas.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Andrea Salinas Blancas</p>
                    <img src="images/andreasalinas.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Gobierno y Transformación Pública. Sus intereses profesionales son el emprendimiento público y  el trabajo social.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Daniel Schulz López</p>
                    <img src="images/danielschulz.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Intereses profesionales en Finanzas y Sociología.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Gabriela Nayeli Suárez Rodríguez</p>
                    <img src="images/gabrielasuarez.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Sus principales intereses son el estudio de la Economía del desarrollo y el impacto de las políticas públicas en la distribución de la riqueza.</p>
                </div>
                <div className={classes.photoGridItem}>
                    <p className="names" align={'center'}>Idalee Vargas</p>
                    <img src="images/idaleevargas.jpg" className="img-responsive" alt="Image"/>
                    <p>Licenciatura de Economía. Intereses: Economía matemática, análisis de datos y desarrollo económico.</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className="names" align={'center'}>Arnulfo Emmanuel Zaldívar Ruenes</p>
                    <img src="images/fitozaldivar.jpg" className="img-responsive" alt="Image"/>
                    <p>Estudiante de Licenciatura en Economía. Intereses profesionales en economía, finanzas, política y en investigación, búsqueda e interpretación de datos.</p>
                </div>
            </Grid> */}
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

    grid: {
        marginBottom: '50px'
    },

    photoGridItem: {
        //border: '1px solid #fff',
        width: '300px',
        height: '30px',
        marginTop: '30px !important',
        marginBottom: '150px !important'
    },

    photoGridItemTeacher: {
        border: '1px solid #fff',
        width: '300px',
        height: '40px',
        marginTop: '30px !important',
        marginBottom: '80px !important'
    },
    names: {
        fontWeight: 'bold'
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

    [`@media (max-width: ${1000}px)`]: {
        sectionTitles:{
            fontSize: 'xx-large',
        }		
	},
    
});

   
export default withStyles(styles)(PhotoGrid);