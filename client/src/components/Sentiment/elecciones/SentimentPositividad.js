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

export default function SentimentPositividad({ classes }) {
    classes = useStyles();

    const todosLosCandidatos= 
    [
        {
          "id": "Samuel",
          "color": "hsl(25, 87%, 57%)",
          "data": [
              {
                "x": "07/03/21",
                "y": 0.093919643
              },
              {
                "x": "14/03/21",
                "y": 0.110814626
              },
              {
                "x": "21/03/21",
                "y": 0.185296561
              },
              {
                "x": "28/03/21",
                "y": 0.109931354
              },
              {
                "x": "04/04/21",
                "y": 0.123063492
              },
              {
                "x": "11/04/21",
                "y": 0.104943311
              },
              {
                "x": "18/04/21",
                "y": 0.139292778
              },
              {
                "x": "25/04/21",
                "y": 0.107166467
              },
              {
                "x": "02/05/21",
                "y": 0.100783457
              },
              {
                "x": "09/05/21",
                "y": 0.068089713
              },
              {
                "x": "16/05/21",
                "y": 0.10007241
              },
              {
                "x": "23/05/21",
                "y": 0.110098273
              },
              {
                "x": "30/05/21",
                "y": 0.124013242
              },
              {
                "x": "06/06/21",
                "y": 0.108695862
              }
          ]
        },
        {
          "id": "Fernando",
          "color": "hsl(210, 90%, 34%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.227533333
            },
            {
              "x": "14/03/21",
              "y": 0.198928571
            },
            {
              "x": "21/03/21",
              "y": 0.211666667
            },
            {
              "x": "28/03/21",
              "y": 0.256491667
            },
            {
              "x": "04/04/21",
              "y": 0.164277778
            },
            {
              "x": "11/04/21",
              "y": 0.168535714
            },
            {
              "x": "18/04/21",
              "y": 0.253533333
            },
            {
              "x": "25/04/21",
              "y": 0.108106667
            },
            {
              "x": "02/05/21",
              "y": 0.257338889
            },
            {
              "x": "09/05/21",
              "y": 0.243363095
            },
            {
              "x": "16/05/21",
              "y": 0.218306536
            },
            {
              "x": "23/05/21",
              "y": 0.194262525
            },
            {
              "x": "30/05/21",
              "y": 0.147449315
            },
            {
              "x": "06/06/21",
              "y": 0.186727679
            }
          ]
        },
        {
          "id": "Clara Luz",
          "color": "hsl(8, 76%, 43%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.114665266
            },
            {
              "x": "14/03/21",
              "y": 0.127920696
            },
            {
              "x": "21/03/21",
              "y": 0.146510204
            },
            {
              "x": "28/03/21",
              "y": 0.092809378
            },
            {
              "x": "04/04/21",
              "y": 0.082964286
            },
            {
              "x": "11/04/21",
              "y": 0.073132086
            },
            {
              "x": "18/04/21",
              "y": 0.027332011
            },
            {
              "x": "25/04/21",
              "y": 0.18931
            },
            {
              "x": "02/05/21",
              "y": 0.282934084
            },
            {
              "x": "09/05/21",
              "y": 0.10934529
            },
            {
              "x": "16/05/21",
              "y": 0.086930989
            },
            {
              "x": "23/05/21",
              "y": 0.093171429
            },
            {
              "x": "30/05/21",
              "y": 0.133095238
            },
            {
              "x": "06/06/21",
              "y": 0.088720238
            }
          ]
        },
        {
          "id": "Adrian",
          "color": "hsl(135, 37%, 48%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.23625
            },
            {
              "x": "14/03/21",
              "y": 0.176380952
            },
            {
              "x": "21/03/21",
              "y": 0.305685714
            },
            {
              "x": "28/03/21",
              "y": 0.297169388
            },
            {
              "x": "04/04/21",
              "y": 0.197566667
            },
            {
              "x": "11/04/21",
              "y": 0.151865741
            },
            {
              "x": "18/04/21",
              "y": 0.270705556
            },
            {
              "x": "25/04/21",
              "y": 0.338208333
            },
            {
              "x": "02/05/21",
              "y": 0.330267857
            },
            {
              "x": "09/05/21",
              "y": 0.189605527
            },
            {
              "x": "16/05/21",
              "y": 0.316130952
            },
            {
              "x": "23/05/21",
              "y": 0.25252406
            },
            {
              "x": "30/05/21",
              "y": 0.279481293
            },
            {
              "x": "06/06/21",
              "y": 0.228801667
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
                "y": 0.093919643
              },
              {
                "x": "14/03/21",
                "y": 0.110814626
              },
              {
                "x": "21/03/21",
                "y": 0.185296561
              },
              {
                "x": "28/03/21",
                "y": 0.109931354
              },
              {
                "x": "04/04/21",
                "y": 0.123063492
              },
              {
                "x": "11/04/21",
                "y": 0.104943311
              },
              {
                "x": "18/04/21",
                "y": 0.139292778
              },
              {
                "x": "25/04/21",
                "y": 0.107166467
              },
              {
                "x": "02/05/21",
                "y": 0.100783457
              },
              {
                "x": "09/05/21",
                "y": 0.068089713
              },
              {
                "x": "16/05/21",
                "y": 0.10007241
              },
              {
                "x": "23/05/21",
                "y": 0.110098273
              },
              {
                "x": "30/05/21",
                "y": 0.124013242
              },
              {
                "x": "06/06/21",
                "y": 0.108695862
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
                "y": 0.114665266
              },
              {
                "x": "14/03/21",
                "y": 0.127920696
              },
              {
                "x": "21/03/21",
                "y": 0.146510204
              },
              {
                "x": "28/03/21",
                "y": 0.092809378
              },
              {
                "x": "04/04/21",
                "y": 0.082964286
              },
              {
                "x": "11/04/21",
                "y": 0.073132086
              },
              {
                "x": "18/04/21",
                "y": 0.027332011
              },
              {
                "x": "25/04/21",
                "y": 0.18931
              },
              {
                "x": "02/05/21",
                "y": 0.282934084
              },
              {
                "x": "09/05/21",
                "y": 0.10934529
              },
              {
                "x": "16/05/21",
                "y": 0.086930989
              },
              {
                "x": "23/05/21",
                "y": 0.093171429
              },
              {
                "x": "30/05/21",
                "y": 0.133095238
              },
              {
                "x": "06/06/21",
                "y": 0.088720238
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
                "y": 0.23625
              },
              {
                "x": "14/03/21",
                "y": 0.176380952
              },
              {
                "x": "21/03/21",
                "y": 0.305685714
              },
              {
                "x": "28/03/21",
                "y": 0.297169388
              },
              {
                "x": "04/04/21",
                "y": 0.197566667
              },
              {
                "x": "11/04/21",
                "y": 0.151865741
              },
              {
                "x": "18/04/21",
                "y": 0.270705556
              },
              {
                "x": "25/04/21",
                "y": 0.338208333
              },
              {
                "x": "02/05/21",
                "y": 0.330267857
              },
              {
                "x": "09/05/21",
                "y": 0.189605527
              },
              {
                "x": "16/05/21",
                "y": 0.316130952
              },
              {
                "x": "23/05/21",
                "y": 0.25252406
              },
              {
                "x": "30/05/21",
                "y": 0.279481293
              },
              {
                "x": "06/06/21",
                "y": 0.228801667
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
                "y": 0.227533333
              },
              {
                "x": "14/03/21",
                "y": 0.198928571
              },
              {
                "x": "21/03/21",
                "y": 0.211666667
              },
              {
                "x": "28/03/21",
                "y": 0.256491667
              },
              {
                "x": "04/04/21",
                "y": 0.164277778
              },
              {
                "x": "11/04/21",
                "y": 0.168535714
              },
              {
                "x": "18/04/21",
                "y": 0.253533333
              },
              {
                "x": "25/04/21",
                "y": 0.108106667
              },
              {
                "x": "02/05/21",
                "y": 0.257338889
              },
              {
                "x": "09/05/21",
                "y": 0.243363095
              },
              {
                "x": "16/05/21",
                "y": 0.218306536
              },
              {
                "x": "23/05/21",
                "y": 0.194262525
              },
              {
                "x": "30/05/21",
                "y": 0.147449315
              },
              {
                "x": "06/06/21",
                "y": 0.186727679
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
                            <h2 className={classes.subtitle}><strong>Analisis Positividad Gráfica</strong></h2>
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
                        <h2 className={classes.subtitle}><strong>Analisis Positividad Texto</strong></h2>
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

