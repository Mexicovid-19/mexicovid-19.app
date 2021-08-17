import React, { useEffect, useState } from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';
import { TransparentInput } from '../../../Utils/components/Select';
import Adrian from './topicsAdrian.json';
import Clara from './topicsClara.json';
import Fernando from './topicsFernando.json';
import Samuel from './topicsSamuel.json';
import LegendTopics from './LegendTopics';
//Components
import Legend from './Legend';


export default function Topicos({ classes }) {
    classes = useStyles();

    const topicosAdrian= Adrian
    const topicosClara= Clara
    const topicosFernando= Fernando
    const topicosSamuel= Samuel

    const textoAdrian= "El análisis de tópicos se construyó utilizando la técnica de Latent Dirichlet Analysis (LDA) del contenido de los tweets donde se menciona a Adrián de la Garza. El análisis del contenido identificó cinco tópicos recurrentes: 1) Promesas de gobierno hechas por el candidato; 2) Contenido auto promocional del candidato; 3) Contenido asociado a la participación en los debates con otros candidatos; 4) Ataques a su rival Samuel García; 5) Ataques recibidos por el candidato, principalmente de parte del presidente López Obrador. El gráfico ilustra varios ciclos interesantes. En primer lugar, la presencia en redes se incrementó hacia el final de la campaña. Los ataques al rival y las propuestas alcanzaron un pico concurrente el 18 de abril. Esta fecha coincidió con el esfuerzo de posicionar al candidato Adrián de la Garza como puntero, esfuerzo que terminaría fracasando. Por el contrario, los ataques a Adrián de la Garza tuvieron su punto más álgido en la semana del 9 de mayo, cuando recibió señalamientos de mal uso de recursos en campaña por parte del presidente López Obrador en una conferencia mañanera.  De forma interesante, los tópicos que observamos en redes sociales reflejan los eventos más importantes ocurridos durante la campaña."
    const textoClara= "En el caso de la candidata Clara Luz Flores, se identifican los cinco temas más importantes en el contenido en redes sociales de la campaña. Hay un tema predominante que etiquetamos como “Promesas de gobierno”. Este tema engloba todos los mensajes relacionados con temáticas de gobierno y de la campaña. También incluye defensas de los ataques que recibió la candidata. Al analizar el contenido de texto y el contexto de las palabras en cada mensaje, el algoritmo clasifica como un solo tópico las propuestas y defensa de campaña, a diferencia del caso de Adrián de la Garza que lo separa en dos categorías. La curva en azul identifica el número de mensajes asociados con el tópico más importante y se pueden observar los picos en la campaña. El pico de finales de marzo corresponde a la defensa de los videos que relacionaban a la candidata con una secta. El pico de mayo corresponde al relanzamiento de la campaña."
    const textoFernando= "El tema más relevante en redes sociales de la campaña de Fernando Larrazábal fue su participación en los debates y la disputa entorno a su no participación en un debate organizado por un medio local. Fuera de este tema, se identificaron pocos tópicos y presencia de estos en la campaña. Se puede observar un aumento en la presencia de los ataques a otros candidatos y partidos conforme se fue aproximando el día de la elección. Llama la atención que la herramienta no identificó propuestas o campaña positiva como un tópico en el contenido en la red asociado a este candidato."
    const textoSamuel = "El candidato Samuel García fue el más atacado en redes sociales y esto se puede apreciar en los tópicos recurrentes que se encontraron en el análisis de texto. Tres de los cinco tópicos más importantes son ataques al candidato. El cuarto tópico recoge los elementos propositivos de su campaña. Llama la atención el quinto tópico referente al debate. Este último fue un tópico recurrente en el análisis de texto de los cuatro candidatos, particularmente la decisión de varios de ellos de no asistir al debate organizado por un medio de comunicación local. El gráfico de Samuel García muestra los picos de los eventos que marcaron su campaña: la asistencia al debate y los ataques en torno a su trayectoria pública. "
    const [state, setState] = useState({
        data: topicosAdrian,
        candidato: 0,      
        nombre: "Adrián de la Garza",
        texto:  textoAdrian
    })


    console.log(state.data[0].id)


    const handleChange = e => {
      switch (e.target.value) {        
          case 0:
              setState({...state, data: topicosAdrian, candidato: e.target.value, nombre: "Adrián de la Garza", texto: textoAdrian})
              break;
          case 1:
              setState({...state, data: topicosClara, candidato: e.target.value, nombre: "Clara Luz Flores", texto: textoClara})
              
              break;
          case 2:
              setState({...state, data: topicosFernando, candidato: e.target.value, nombre: "Fernando Larrazábal", texto: textoFernando})
              
              break;    
          case 3:
              setState({...state, data: topicosSamuel, candidato: e.target.value, nombre: "Samuel García", texto: textoSamuel})
              
              break;                    
          default:
              break;
      }
  };

    return (
        <div className={classes.component}>
            <div className={classes.line}></div>
            <div className={classes.container}>
                <div className={classes.itemsContainer}>
                    <div className={classes.itemContainer}>
                         <div className={classes.titleContainer}>
                            <h2 className={classes.subtitle}><strong>Principales Tópicos Identificados en Twitter Asociados al contenido donde se menciona al Candidato</strong></h2>
                            <h2 className={classes.subtitle}><strong>{state.nombre}</strong></h2>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={state.candidato}
                                  onChange={handleChange}
                                  label="Pais"
                                  input={<TransparentInput style={{marginBottom: 30}}/>}
                              >
                                  <MenuItem value={0}>Tópicos Adrian</MenuItem>
                                  <MenuItem value={1}>Tópicos Clara Luz</MenuItem>
                                  <MenuItem value={2}>Tópicos Fernando</MenuItem>
                                  <MenuItem value={3}>Tópicos Samuel</MenuItem>
                              </Select>
                              </FormControl>
                        </div>
                        <div className={classes.scrollContainer}>
                          <p className={classes.scrollText}>scroll</p>
                          <ArrowRightAltRoundedIcon className={classes.scrollIcon}/>
                        </div>
                        <div className={classes.chartContainer}>
                            <CompoundLine data={state.data}/>
                        </div>
                        <div className={classes.chartFooterContainer}>                   
                            <LegendTopics topico1= {state.data[0].id}  topico2= {state.data[1].id} topico3= {state.data[2].id} topico4= {state.data[3].id} topico5= {state.data[4].id}/>
                        </div>
                    </div>
                    <div className={classes.itemContainer2}>
                        <h2 className={classes.subtitle}><strong>Análisis de Tópicos</strong></h2>
                        <h2 className={classes.description}> {state.texto}</h2>
                    </div>
                    
                </div>
            </div>
            <div className={classes.lineB}></div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    component:{
        width: '100%',
        background: 'rgb(34, 35, 35)',
    },
    line: {
        width: '2px',
        height: '50px',
        background: 'white',
        margin: '0px auto',
    },
    lineB: {
        width: '2px',
        height: '50px',
        background: 'white',
        margin: '0px auto',
    },
    container: {
        width: '95%',
        maxWidth: '1500px',
        margin: 'auto',
        border: '1px solid white',
        borderRadius: '10px'
    },
    titleContainer: {
        display: 'flex',
        flex: '0.5',
        display:'flex',
        alignContent: 'center',
        flexDirection:'column',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        wordWrap: 'normal',
        color: colors.WHITE,
        flex: 1
    },
    itemsContainer: {
        padding: '20px 20px'
    },
    itemContainer: {
        padding: 30,
        overflowX: 'scroll',
        flex: 1
    },
    itemContainer2: {
        padding: 30,
        overflowX: 'scroll',
        flex: 0.3
    },
    description: {
        color: colors.WHITE,
        paddingTop: 50,
        textAlign: 'justify'
    },
    chartContainer: {
        height: '600px',
        minHeight: '600px',
        minWidth: 800,
        flex: 1,
        margin: 'auto',
    },
    chartFooterContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems:  'center',
      marginLeft: 20,
    },
    formControl: {
        maxWidth: 200,
        minWidth: 100,
        flex: 1,
    },
    scrollContainer: {
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
      position: 'relative',
      top: '30px'
    },
    scrollText: {
      marginBottom: 0,
      marginRight: 5,
      flex: 1
    },
    scrollIcon: {
      
    },
    [`@media (min-width: ${1001}px)`]: {
        component:{
            width: '100%',
            height:'100vh',
            background: 'rgb(34, 35, 35)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        itemsContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 20px'
        },
        chartContainer: {
            //width: '50vw',
            flex: 1,
        },
        subtitle: {
            fontSize: 20,
        },
        scrollContainer: {
          display: 'none'
        },
        formControl: {
          position: 'relative',
          top: 15
        }
    },
    [`@media (max-width: ${1000}px)`]: {
        subtitle: {
            fontSize: 20,
        },
    },
    [`@media (max-width: ${576}px)`]: {
        chartFooterContainer: {
          display: 'block'
        },
        description: {
          textAlign: 'justify',
          paddingTop: 20
        }
    },
}));

