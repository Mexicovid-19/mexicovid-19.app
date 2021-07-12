import React, { useEffect, useState } from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';
import { TransparentInput } from '../../../Utils/components/Select'

//Components
import Legend from './Legend';

/* D3 */
import * as d3 from "d3";

/* Data */
import adrian_csv from './data/AdrianCompoundRT.csv'
import clara_csv from './data/ClaraCompoundRT.csv'
import fernando_csv from './data/FernandoCompoundRT.csv'
import samuel_csv from './data/SamuelCompoundRT.csv'

/* Charts */
import BumpChart from './BumpChart'

export default function SentimentMain({ classes }) {
    classes = useStyles();

    const [state, setState] = useState({
        data: [],
        candidato: 0,
    })

    
    var loadFiles = [
      d3.csv(fernando_csv),
      d3.csv(samuel_csv),
      d3.csv(adrian_csv),
      d3.csv(clara_csv),
      
    ]

    useEffect(() => {
      Promise.all(loadFiles).then(function (data){

        //data
        let todos = []

        for (let index = 0; index < 4; index++) {
            //vars
            let numSemana = data[index][0].numSemana
            let semana = data[index][0].creacion
            let candidatoData = []
            let count = 0
            

            
            data[index].map((item) => {
              if(numSemana != item.numSemana){
                candidatoData.push({
                  "x": semana,
                  "y": count
                })

                semana = item.creacion
                numSemana = item.numSemana
                count = 0

              } else{
                count += 1
              }
            
          })
          candidatoData.push({
            "x": semana,
            "y": count
          })
          switch (index) {
            case 2:
                todos.push({
                    "id": "Adrian",
                    "color": "hsl(135, 37%, 48%)",
                    "data": candidatoData
                })
              break;
            case 1:
                todos.push({
                    "id": "Samuel",
                    "color": "hsl(25, 87%, 57%)",
                    "data": candidatoData
                })
              break;
            case 3:
                todos.push({
                    "id": "Clara Luz",
                    "color": "hsl(8, 76%, 43%)",
                    "data": candidatoData
                })
              break;
            case 0:
                todos.push({
                    "id": "Fernando",
                    "color": "hsl(210, 90%, 34%)",
                    "data": candidatoData
                })
              break;
            default:
              break;
          }
          //console.log("todos", todos)
          
          
        }
        setState({...state, 
            data: todos,
        })
      })
      

    },[])

    

    return (
        <div className={classes.component}>
            <div className={classes.line}></div>
            <div className={classes.container}>
                <div className={classes.itemsContainer}>
                    <div className={classes.itemContainer}>
                         <div className={classes.titleContainer}>
                            <h2 className={classes.subtitle}><strong>Tweets por semana de cada candidato</strong></h2>
                        </div>
                        <div className={classes.scrollContainer}>
                          <p className={classes.scrollText}>scroll</p>
                          <ArrowRightAltRoundedIcon className={classes.scrollIcon}/>
                        </div>
                        <div className={classes.chartContainer}>
                            <BumpChart data={state.data}/>
                        </div>
                        <div className={classes.chartFooterContainer}>
                            <Legend/>
                        </div>
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
        justifyContent: 'space-between',
        flex: '0.5'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
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
      alignItems:  'center'
    },
    formControl: {
        minWidth: 100,
        flex: 1,
        marginRight: 20
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

