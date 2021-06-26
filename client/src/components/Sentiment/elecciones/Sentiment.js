import React, { useEffect, useState } from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';
import { TransparentInput } from '../../../Utils/components/Select'



export default function Sentiment({ classes }) {
    classes = useStyles();

    const todosLosCandidatos= 
    [
        {
          "id": "Samuel",
          "color": "hsl(25, 87%, 57%)",
          "data": [
            {
                "x": "31 de marzo del 2021",
                "y": 0.263719874
              },
              {
                "x": "30 de abril del 2021",
                "y": 0.055920529
              },
              {
                "x": "31 de mayo del 2021",
                "y": 0.373281815
              },
              {
                "x": "30 de junio del 2021",
                "y": 0.773179606
              }
          ]
        },
        {
          "id": "Fernando",
          "color": "hsl(210, 90%, 34%)",
          "data": [
              {
                "x": "31 de marzo del 2021",
                "y": 0.163719874
              },
              {
                "x": "30 de abril del 2021",
                "y": 0.255920529
              },
              {
                "x": "31 de mayo del 2021",
                "y": 0.073281815
              },
              {
                "x": "30 de junio del 2021",
                "y": 0.073179606
              }
            
          ]
        },
        {
          "id": "Clara Luz",
          "color": "hsl(8, 76%, 43%)",
          "data": [
            {
                "x": "31 de marzo del 2021",
                "y": 0.063719874
              },
              {
                "x": "30 de abril del 2021",
                "y": 0.055920529
              },
              {
                "x": "31 de mayo del 2021",
                "y": 0.173281815
              },
              {
                "x": "30 de junio del 2021",
                "y": 0.173179606
              }
          ]
        },
        {
          "id": "Adrian",
          "color": "hsl(135, 37%, 48%)",
          "data": [
            {
              "x": "31 de marzo del 2021",
              "y": 0.258238091
            },
            {
              "x": "30 de abril del 2021",
              "y": 0.203839314
            },
            {
              "x": "31 de mayo del 2021",
              "y": 0.197265361
            },
            {
              "x": "30 de junio del 2021",
              "y": 0.257063083
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
                    "x": "31 de marzo del 2021",
                    "y": 0.263719874
                  },
                  {
                    "x": "30 de abril del 2021",
                    "y": 0.055920529
                  },
                  {
                    "x": "31 de mayo del 2021",
                    "y": 0.373281815
                  },
                  {
                    "x": "30 de junio del 2021",
                    "y": 0.773179606
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
                    "x": "31 de marzo del 2021",
                    "y": 0.063719874
                  },
                  {
                    "x": "30 de abril del 2021",
                    "y": 0.055920529
                  },
                  {
                    "x": "31 de mayo del 2021",
                    "y": 0.173281815
                  },
                  {
                    "x": "30 de junio del 2021",
                    "y": 0.173179606
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
                    "x": "31 de marzo del 2021",
                    "y": 0.258238091
                  },
                  {
                    "x": "30 de abril del 2021",
                    "y": 0.203839314
                  },
                  {
                    "x": "31 de mayo del 2021",
                    "y": 0.197265361
                  },
                  {
                    "x": "30 de junio del 2021",
                    "y": 0.257063083
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
                    "x": "31 de marzo del 2021",
                    "y": 0.163719874
                  },
                  {
                    "x": "30 de abril del 2021",
                    "y": 0.255920529
                  },
                  {
                    "x": "31 de mayo del 2021",
                    "y": 0.073281815
                  },
                  {
                    "x": "30 de junio del 2021",
                    "y": 0.073179606
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
                            <h2 className={classes.subtitle}><strong>Analisis Sentimientos Gráfica</strong></h2>


                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel component="legend" style={{color: "white", fontSize: "20px", fontWeight: 'bolder'}}>Candidatos</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={state.candidato}
                                    onChange={handleChange}
                                    label="Pais"
                                    input={<TransparentInput style={{marginBottom: 30}}/>}
                                >
                                    <option value={0}>Todos los candidatos</option>
                                    <option value={1}>Samuel García</option>
                                    <option value={2}>Clara Luz Florez</option>
                                    <option value={3}>Fernando Larrazábal</option>
                                    <option value={4}>Adrian de la Garza</option>
                                </Select>
                            </FormControl>


                            {/* <FormControl className= {classes.formControl}>
                                <InputLabel>Candidatos</InputLabel>
                                    <Select value={value} onChange = {handleChange}>
                                        <MenuItem value={todosLosCandidatos}>Todos los candidatos</MenuItem>
                                        <MenuItem value={samuelG}>Samuel García</MenuItem>
                                        <MenuItem value={claraLF}>Clara Luz Florez</MenuItem>
                                        <MenuItem value={fernandoF}>Fernando Larrazábal</MenuItem>
                                        <MenuItem value={adrianG}>Adrian de la Garza</MenuItem>
                                    </Select>
                            </FormControl> */}
                        </div>
                        <div className={classes.chartContainer}>
                            <CompoundLine data={state.data}/>
                        </div>
                    </div>
                    <div className={classes.itemContainer}>
                        <div style={{flex: '0.5'}}>
                            <h2 className={classes.subtitle}><strong>Analisis Sentimientos Texto</strong></h2>
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

