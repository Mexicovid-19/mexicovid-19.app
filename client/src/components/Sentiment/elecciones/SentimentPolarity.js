import React, { useEffect, useState } from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';
import { TransparentInput } from '../../../Utils/components/Select'



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
                "y": 0.047569444
              },
              {
                "x": "14/03/21",
                "y": 0.193034297
              },
              {
                "x": "21/03/21",
                "y": 0.162220805
              },
              {
                "x": "28/03/21",
                "y": 0.205759191
              },
              {
                "x": "04/04/21",
                "y": 0.264305556
              },
              {
                "x": "11/04/21",
                "y": 0.037513743
              },
              {
                "x": "18/04/21",
                "y": 0.33814899
              },
              {
                "x": "25/04/21",
                "y": 0.1
              },
              {
                "x": "02/05/21",
                "y": 0.156084656
              },
              {
                "x": "09/05/21",
                "y": 0.13802229
              },
              {
                "x": "16/05/21",
                "y": 0.152142857
              },
              {
                "x": "23/05/21",
                "y": 0.213983823
              },
              {
                "x": "30/05/21",
                "y": 0.138819369
              },
              {
                "x": "06/06/21",
                "y": 0.075055556
              }
          ]
        },
        {
          "id": "Fernando",
          "color": "hsl(210, 90%, 34%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.251289683
            },
            {
              "x": "14/03/21",
              "y": 0.212083333
            },
            {
              "x": "21/03/21",
              "y": 0.120396091
            },
            {
              "x": "28/03/21",
              "y": 0.261895743
            },
            {
              "x": "04/04/21",
              "y": 0.105555556
            },
            {
              "x": "11/04/21",
              "y": 0.212911255
            },
            {
              "x": "18/04/21",
              "y": 0.188079365
            },
            {
              "x": "25/04/21",
              "y": 0.109794974
            },
            {
              "x": "02/05/21",
              "y": 0.301742798
            },
            {
              "x": "09/05/21",
              "y": 0.21748469
            },
            {
              "x": "16/05/21",
              "y": 0.232070806
            },
            {
              "x": "23/05/21",
              "y": 0.116000067
            },
            {
              "x": "30/05/21",
              "y": 0.066515152
            },
            {
              "x": "06/06/21",
              "y": -0.095982143
            }
          ]
        },
        {
          "id": "Clara Luz",
          "color": "hsl(8, 76%, 43%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.00934057
            },
            {
              "x": "14/03/21",
              "y": -0.038484081
            },
            {
              "x": "21/03/21",
              "y": 0.015855116
            },
            {
              "x": "28/03/21",
              "y": -0.000898459
            },
            {
              "x": "04/04/21",
              "y": 0.008788179
            },
            {
              "x": "11/04/21",
              "y": 0.01561319
            },
            {
              "x": "18/04/21",
              "y": -0.163534187
            },
            {
              "x": "25/04/21",
              "y": 0.037143579
            },
            {
              "x": "02/05/21",
              "y": 0.021268163
            },
            {
              "x": "09/05/21",
              "y": 0.022169811
            },
            {
              "x": "16/05/21",
              "y": -0.020856063
            },
            {
              "x": "23/05/21",
              "y": 0.04792806
            },
            {
              "x": "30/05/21",
              "y": 0.054605442
            },
            {
              "x": "06/06/21",
              "y": -0.028571429
            }
          ]
        },
        {
          "id": "Adrian",
          "color": "hsl(135, 37%, 48%)",
          "data": [
            {
                "x": "07/03/21",
                "y": 0.047569444
              },
              {
                "x": "14/03/21",
                "y": 0.193034297
              },
              {
                "x": "21/03/21",
                "y": 0.162220805
              },
              {
                "x": "28/03/21",
                "y": 0.205759191
              },
              {
                "x": "04/04/21",
                "y": 0.264305556
              },
              {
                "x": "11/04/21",
                "y": 0.037513743
              },
              {
                "x": "18/04/21",
                "y": 0.33814899
              },
              {
                "x": "25/04/21",
                "y": 0.1
              },
              {
                "x": "02/05/21",
                "y": 0.156084656
              },
              {
                "x": "09/05/21",
                "y": 0.13802229
              },
              {
                "x": "16/05/21",
                "y": 0.152142857
              },
              {
                "x": "23/05/21",
                "y": 0.213983823
              },
              {
                "x": "30/05/21",
                "y": 0.138819369
              },
              {
                "x": "06/06/21",
                "y": 0.075055556
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
                    "y": 0.047569444
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.193034297
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.162220805
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.205759191
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.264305556
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.037513743
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.33814899
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.1
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.156084656
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.13802229
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.152142857
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.213983823
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.138819369
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.075055556
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
                    "y": 0.00934057
                  },
                  {
                    "x": "14/03/21",
                    "y": -0.038484081
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.015855116
                  },
                  {
                    "x": "28/03/21",
                    "y": -0.000898459
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.008788179
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.01561319
                  },
                  {
                    "x": "18/04/21",
                    "y": -0.163534187
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.037143579
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.021268163
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.022169811
                  },
                  {
                    "x": "16/05/21",
                    "y": -0.020856063
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.04792806
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.054605442
                  },
                  {
                    "x": "06/06/21",
                    "y": -0.028571429
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
                "y": 0.047569444
              },
              {
                "x": "14/03/21",
                "y": 0.193034297
              },
              {
                "x": "21/03/21",
                "y": 0.162220805
              },
              {
                "x": "28/03/21",
                "y": 0.205759191
              },
              {
                "x": "04/04/21",
                "y": 0.264305556
              },
              {
                "x": "11/04/21",
                "y": 0.037513743
              },
              {
                "x": "18/04/21",
                "y": 0.33814899
              },
              {
                "x": "25/04/21",
                "y": 0.1
              },
              {
                "x": "02/05/21",
                "y": 0.156084656
              },
              {
                "x": "09/05/21",
                "y": 0.13802229
              },
              {
                "x": "16/05/21",
                "y": 0.152142857
              },
              {
                "x": "23/05/21",
                "y": 0.213983823
              },
              {
                "x": "30/05/21",
                "y": 0.138819369
              },
              {
                "x": "06/06/21",
                "y": 0.075055556
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
                    "y": 0.251289683
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.212083333
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.120396091
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.261895743
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.105555556
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.212911255
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.188079365
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.109794974
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.301742798
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.21748469
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.232070806
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.116000067
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.066515152
                  },
                  {
                    "x": "06/06/21",
                    "y": -0.095982143
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
                        <div className={classes.chartContainer}>
                            <CompoundLine data={state.data}/>
                        </div>
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
                    </div>
                    <div className={classes.itemContainer}>
                        <div style={{flex: '0.5'}}>
                            <h2 className={classes.subtitle}><strong>Analisis Polaridad Texto</strong></h2>
                        </div>
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
        height:'100vh',
        background: 'rgb(34, 35, 35)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 20px'
    },
    itemContainer: {
        padding: 30
    },
    description: {
        color: colors.WHITE,
        paddingTop: 60
    },
    chartContainer: {
        height: '600px',
        minHeight: '600px',
        width: '50vw',
        flex: 1,
        margin: 'auto',
    },
    formControl: {
        minWidth: 100,
        flex: 1,
        marginLeft: 20
    },
    [`@media (max-width: ${1000}px)`]: {
        subtitle: {
            fontSize: 20,
        },
    }
}));

