import React, { useEffect, useState } from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';
import { TransparentInput } from '../../../Utils/components/Select'



export default function SentimentFear({ classes }) {
    classes = useStyles();

    const todosLosCandidatos= 
    [
        {
          "id": "Samuel",
          "color": "hsl(25, 87%, 57%)",
          "data": [
              {
                "x": "07/03/21",
                "y": 0.056730769
              },
              {
                "x": "14/03/21",
                "y": 0.014814815
              },
              {
                "x": "21/03/21",
                "y": 0.027380952
              },
              {
                "x": "28/03/21",
                "y": 0.039261067
              },
              {
                "x": "04/04/21",
                "y": 0.013095238
              },
              {
                "x": "11/04/21",
                "y": 0.077819708
              },
              {
                "x": "18/04/21",
                "y": 0.075
              },
              {
                "x": "25/04/21",
                "y": 0.017361111
              },
              {
                "x": "02/05/21",
                "y": 0.043039809
              },
              {
                "x": "09/05/21",
                "y": 0.03367071
              },
              {
                "x": "16/05/21",
                "y": 0.032929422
              },
              {
                "x": "23/05/21",
                "y": 0.101619651
              },
              {
                "x": "30/05/21",
                "y": 0.048767539
              },
              {
                "x": "06/06/21",
                "y": 0.037941799
              }
          ]
        },
        {
          "id": "Fernando",
          "color": "hsl(210, 90%, 34%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.040368357
            },
            {
              "x": "14/03/21",
              "y": 0.012704687
            },
            {
              "x": "21/03/21",
              "y": 0.011111111
            },
            {
              "x": "28/03/21",
              "y": 0.054824561
            },
            {
              "x": "04/04/21",
              "y": 0
            },
            {
              "x": "11/04/21",
              "y": 0.098412698
            },
            {
              "x": "18/04/21",
              "y": 0.046666667
            },
            {
              "x": "25/04/21",
              "y": 0.013888889
            },
            {
              "x": "02/05/21",
              "y": 0.021161616
            },
            {
              "x": "09/05/21",
              "y": 0.022485055
            },
            {
              "x": "16/05/21",
              "y": 0.031124692
            },
            {
              "x": "23/05/21",
              "y": 0.040557012
            },
            {
              "x": "30/05/21",
              "y": 0.029310967
            },
            {
              "x": "06/06/21",
              "y": 0.059895833
            }
          ]
        },
        {
          "id": "Clara Luz",
          "color": "hsl(8, 76%, 43%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.037543438
            },
            {
              "x": "14/03/21",
              "y": 0.03624227
            },
            {
              "x": "21/03/21",
              "y": 0.090326461
            },
            {
              "x": "28/03/21",
              "y": 0.125801981
            },
            {
              "x": "04/04/21",
              "y": 0.030723734
            },
            {
              "x": "11/04/21",
              "y": 0.038155363
            },
            {
              "x": "18/04/21",
              "y": 0.19727237
            },
            {
              "x": "25/04/21",
              "y": 0.052261905
            },
            {
              "x": "02/05/21",
              "y": 0.034780668
            },
            {
              "x": "09/05/21",
              "y": 0.059811719
            },
            {
              "x": "16/05/21",
              "y": 0.053754202
            },
            {
              "x": "23/05/21",
              "y": 0.080498866
            },
            {
              "x": "30/05/21",
              "y": 0.038174603
            },
            {
              "x": "06/06/21",
              "y": 0.107440476
            }
          ]
        },
        {
          "id": "Adrian",
          "color": "hsl(135, 37%, 48%)",
          "data": [
              {
                "x": "07/03/21",
                "y": 0.056730769
              },
              {
                "x": "14/03/21",
                "y": 0.014814815
              },
              {
                "x": "21/03/21",
                "y": 0.027380952
              },
              {
                "x": "28/03/21",
                "y": 0.039261067
              },
              {
                "x": "04/04/21",
                "y": 0.013095238
              },
              {
                "x": "11/04/21",
                "y": 0.077819708
              },
              {
                "x": "18/04/21",
                "y": 0.075
              },
              {
                "x": "25/04/21",
                "y": 0.017361111
              },
              {
                "x": "02/05/21",
                "y": 0.043039809
              },
              {
                "x": "09/05/21",
                "y": 0.03367071
              },
              {
                "x": "16/05/21",
                "y": 0.032929422
              },
              {
                "x": "23/05/21",
                "y": 0.101619651
              },
              {
                "x": "30/05/21",
                "y": 0.048767539
              },
              {
                "x": "06/06/21",
                "y": 0.037941799
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
                    "y": 0.056730769
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.014814815
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.027380952
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.039261067
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.013095238
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.077819708
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.075
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.017361111
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.043039809
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.03367071
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.032929422
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.101619651
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.048767539
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.037941799
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
                    "y": 0.037543438
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.03624227
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.090326461
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.125801981
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.030723734
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.038155363
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.19727237
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.052261905
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.034780668
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.059811719
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.053754202
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.080498866
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.038174603
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.107440476
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
                    "y": 0.056730769
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.014814815
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.027380952
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.039261067
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.013095238
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.077819708
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.075
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.017361111
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.043039809
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.03367071
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.032929422
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.101619651
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.048767539
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.037941799
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
                    "y": 0.040368357
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.012704687
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.011111111
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.054824561
                  },
                  {
                    "x": "04/04/21",
                    "y": 0
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.098412698
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.046666667
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.013888889
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.021161616
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.022485055
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.031124692
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.040557012
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.029310967
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.059895833
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
                            <h2 className={classes.subtitle}><strong>Analisis Miedo Gráfica</strong></h2>
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
                            <h2 className={classes.subtitle}><strong>Analisis Miedo Texto</strong></h2>
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

