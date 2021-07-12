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


export default function SentimentPolarity({ classes }) {
    classes = useStyles();

    const todosLosCandidatos= 
    [
        {
          "id": "Samuel",
          "color": "hsl(25, 87%, 57%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.07470958
            },
            {
              "x": "14/03/21",
              "y": 0.058079496
            },
            {
              "x": "21/03/21",
              "y": 0.029023498
            },
            {
              "x": "28/03/21",
              "y": 0.053207816
            },
            {
              "x": "04/04/21",
              "y": 0.081876412
            },
            {
              "x": "11/04/21",
              "y": 0.016068378
            },
            {
              "x": "18/04/21",
              "y": 0.028725008
            },
            {
              "x": "25/04/21",
              "y": 0.035591131
            },
            {
              "x": "02/05/21",
              "y": 0.028191136
            },
            {
              "x": "09/05/21",
              "y": 0.069894617
            },
            {
              "x": "16/05/21",
              "y": 0.069405823
            },
            {
              "x": "23/05/21",
              "y": 0.064952081
            },
            {
              "x": "30/05/21",
              "y": 0.057121963
            },
            {
              "x": "06/06/21",
              "y": 0.020479773
            }  
          ]
        },
        {
          "id": "Fernando",
          "color": "hsl(210, 90%, 34%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.098234901
            },
            {
              "x": "14/03/21",
              "y": 0.115825892
            },
            {
              "x": "21/03/21",
              "y": 0.096238602
            },
            {
              "x": "28/03/21",
              "y": 0.102862568
            },
            {
              "x": "04/04/21",
              "y": 0.064559359
            },
            {
              "x": "11/04/21",
              "y": 0.11697975
            },
            {
              "x": "18/04/21",
              "y": 0.149271708
            },
            {
              "x": "25/04/21",
              "y": 0.090053105
            },
            {
              "x": "02/05/21",
              "y": 0.101679993
            },
            {
              "x": "09/05/21",
              "y": 0.167346239
            },
            {
              "x": "16/05/21",
              "y": 0.133934672
            },
            {
              "x": "23/05/21",
              "y": 0.11481339
            },
            {
              "x": "30/05/21",
              "y": 0.18609382
            },
            {
              "x": "06/06/21",
              "y": 0.145455327
            }
          ]
        },
        {
          "id": "Clara Luz",
          "color": "hsl(8, 76%, 43%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.087769746
            },
            {
              "x": "14/03/21",
              "y": 0.051372795
            },
            {
              "x": "21/03/21",
              "y": 0.069507237
            },
            {
              "x": "28/03/21",
              "y": 0.069181022
            },
            {
              "x": "04/04/21",
              "y": 0.04471918
            },
            {
              "x": "11/04/21",
              "y": 0.084084346
            },
            {
              "x": "18/04/21",
              "y": 0.077004228
            },
            {
              "x": "25/04/21",
              "y": 0.072552016
            },
            {
              "x": "02/05/21",
              "y": 0.127806464
            },
            {
              "x": "09/05/21",
              "y": 0.119332433
            },
            {
              "x": "16/05/21",
              "y": 0.105139114
            },
            {
              "x": "23/05/21",
              "y": 0.092355985
            },
            {
              "x": "30/05/21",
              "y": 0.111387454
            },
            {
              "x": "06/06/21",
              "y": 0.136804149
            }
          ]
        },
        {
          "id": "Adrian",
          "color": "hsl(135, 37%, 48%)",
          "data": [
            {
                "x": "07/03/21",
                "y": 0.184090474
              },
              {
                "x": "14/03/21",
                "y": 0.150527686
              },
              {
                "x": "21/03/21",
                "y": 0.204337825
              },
              {
                "x": "28/03/21",
                "y": 0.101634432
              },
              {
                "x": "04/04/21",
                "y": 0.142399529
              },
              {
                "x": "11/04/21",
                "y": 0.148019913
              },
              {
                "x": "18/04/21",
                "y": 0.105666123
              },
              {
                "x": "25/04/21",
                "y": 0.092054719
              },
              {
                "x": "02/05/21",
                "y": 0.118915573
              },
              {
                "x": "09/05/21",
                "y": 0.118698886
              },
              {
                "x": "16/05/21",
                "y": 0.105036816
              },
              {
                "x": "23/05/21",
                "y": 0.109092147
              },
              {
                "x": "30/05/21",
                "y": 0.145888485
              },
              {
                "x": "06/06/21",
                "y": 0.13130735
              }
          ]
        }
      ];
    const samuelG = [
        {
            "id": "Samuel",
            "color": "hsl(25, 87%, 57%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.07470958
              },
              {
                "x": "14/03/21",
                "y": 0.058079496
              },
              {
                "x": "21/03/21",
                "y": 0.029023498
              },
              {
                "x": "28/03/21",
                "y": 0.053207816
              },
              {
                "x": "04/04/21",
                "y": 0.081876412
              },
              {
                "x": "11/04/21",
                "y": 0.016068378
              },
              {
                "x": "18/04/21",
                "y": 0.028725008
              },
              {
                "x": "25/04/21",
                "y": 0.035591131
              },
              {
                "x": "02/05/21",
                "y": 0.028191136
              },
              {
                "x": "09/05/21",
                "y": 0.069894617
              },
              {
                "x": "16/05/21",
                "y": 0.069405823
              },
              {
                "x": "23/05/21",
                "y": 0.064952081
              },
              {
                "x": "30/05/21",
                "y": 0.057121963
              },
              {
                "x": "06/06/21",
                "y": 0.020479773
              }                                 
            ]
          }

    ];
    const claraLF = [
        {
            "id": "Clara Luz",
            "color": "hsl(8, 76%, 43%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.087769746
              },
              {
                "x": "14/03/21",
                "y": 0.051372795
              },
              {
                "x": "21/03/21",
                "y": 0.069507237
              },
              {
                "x": "28/03/21",
                "y": 0.069181022
              },
              {
                "x": "04/04/21",
                "y": 0.04471918
              },
              {
                "x": "11/04/21",
                "y": 0.084084346
              },
              {
                "x": "18/04/21",
                "y": 0.077004228
              },
              {
                "x": "25/04/21",
                "y": 0.072552016
              },
              {
                "x": "02/05/21",
                "y": 0.127806464
              },
              {
                "x": "09/05/21",
                "y": 0.119332433
              },
              {
                "x": "16/05/21",
                "y": 0.105139114
              },
              {
                "x": "23/05/21",
                "y": 0.092355985
              },
              {
                "x": "30/05/21",
                "y": 0.111387454
              },
              {
                "x": "06/06/21",
                "y": 0.136804149
              }
            ]
          }
    ];
    const adrianG = [
        {
            "id": "Adrian",
            "color": "hsl(135, 37%, 48%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.184090474
              },
              {
                "x": "14/03/21",
                "y": 0.150527686
              },
              {
                "x": "21/03/21",
                "y": 0.204337825
              },
              {
                "x": "28/03/21",
                "y": 0.101634432
              },
              {
                "x": "04/04/21",
                "y": 0.142399529
              },
              {
                "x": "11/04/21",
                "y": 0.148019913
              },
              {
                "x": "18/04/21",
                "y": 0.105666123
              },
              {
                "x": "25/04/21",
                "y": 0.092054719
              },
              {
                "x": "02/05/21",
                "y": 0.118915573
              },
              {
                "x": "09/05/21",
                "y": 0.118698886
              },
              {
                "x": "16/05/21",
                "y": 0.105036816
              },
              {
                "x": "23/05/21",
                "y": 0.109092147
              },
              {
                "x": "30/05/21",
                "y": 0.145888485
              },
              {
                "x": "06/06/21",
                "y": 0.13130735
              }        
            ]
          }
    ];

    const fernandoF=[
        {
            "id": "Fernando",
            "color": "hsl(210, 90%, 34%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.098234901
              },
              {
                "x": "14/03/21",
                "y": 0.115825892
              },
              {
                "x": "21/03/21",
                "y": 0.096238602
              },
              {
                "x": "28/03/21",
                "y": 0.102862568
              },
              {
                "x": "04/04/21",
                "y": 0.064559359
              },
              {
                "x": "11/04/21",
                "y": 0.11697975
              },
              {
                "x": "18/04/21",
                "y": 0.149271708
              },
              {
                "x": "25/04/21",
                "y": 0.090053105
              },
              {
                "x": "02/05/21",
                "y": 0.101679993
              },
              {
                "x": "09/05/21",
                "y": 0.167346239
              },
              {
                "x": "16/05/21",
                "y": 0.133934672
              },
              {
                "x": "23/05/21",
                "y": 0.11481339
              },
              {
                "x": "30/05/21",
                "y": 0.18609382
              },
              {
                "x": "06/06/21",
                "y": 0.145455327
              }
            ]
          }
    ];

    const [state, setState] = useState({
        data: todosLosCandidatos,
        candidato: 0,
    })


    const handleChange = e => {
        switch (e.target.value) {
            case 0:
                setState({...state, data: todosLosCandidatos, candidato: e.target.value})
                break;
            case 1:
                setState({...state, data: samuelG, candidato: e.target.value})
                break;
            case 2:
                setState({...state, data: claraLF, candidato: e.target.value})
                break;
            case 3:
                setState({...state, data: fernandoF, candidato: e.target.value})
                break;
            case 4:
                setState({...state, data: adrianG, candidato: e.target.value})
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
                            <h2 className={classes.subtitle}><strong>Analisis Polaridad Gráfica</strong></h2>
                        </div>
                        <div className={classes.scrollContainer}>
                          <p className={classes.scrollText}>scroll</p>
                          <ArrowRightAltRoundedIcon className={classes.scrollIcon}/>
                        </div>
                        <div className={classes.chartContainer}>
                            <CompoundLine data={state.data}/>
                        </div>
                        <div className={classes.chartFooterContainer}>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel component="legend" style={{ color: "white", fontSize: "20px", fontWeight: 'bolder'}}>Candidatos</InputLabel>
                              <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={state.candidato}
                                  onChange={handleChange}
                                  label="Pais"
                                  input={<TransparentInput style={{marginBottom: 30}}/>}
                              >
                                  <MenuItem value={0}>Todos los candidatos</MenuItem>
                                  <MenuItem value={1}>Samuel García</MenuItem>
                                  <MenuItem value={2}>Clara Luz Florez</MenuItem>
                                  <MenuItem value={3}>Fernando Larrazábal</MenuItem>
                                  <MenuItem value={4}>Adrian de la Garza</MenuItem>
                              </Select>
                            </FormControl>
                            <Legend/>
                        </div>
                    </div>
                    <div className={classes.itemContainer2}>
                        <h2 className={classes.subtitle}><strong>Analisis Polaridad Texto</strong></h2>
                        <h2 className={classes.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra sollicitudin sem nec efficitur. Nullam eu varius lectus. Aliquam orci velit, mattis et ullamcorper tempor, ultrices eu ipsum. Mauris sed nunc aliquet, convallis libero id, pretium tellus. Donec aliquam nibh diam, a euismod turpis semper vitae. Morbi sollicitudin, justo vitae ullamcorper suscipit, libero justo rutrum nunc, vel dictum erat sapien sed nisi. Donec in nibh vitae eros lacinia semper sed sit amet neque. Phasellus ut elit a arcu hendrerit faucibus et at enim. Duis condimentum orci non enim pretium ornare. Aenean mattis semper eleifend. Vivamus et nisl at lacus euismod facilisis. Vivamus auctor tristique odio id maximus. Vivamus tincidunt porta urna id euismod. Maecenas nec vulputate metus.</h2>
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

