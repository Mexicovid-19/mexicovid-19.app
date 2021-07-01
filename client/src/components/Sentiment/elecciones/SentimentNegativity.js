import React, { useEffect, useState } from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';
import { TransparentInput } from '../../../Utils/components/Select'



export default function SentimentNegativity({ classes }) {
    classes = useStyles();

    const todosLosCandidatos= 
    [
        {
          "id": "Samuel",
          "color": "hsl(25, 87%, 57%)",
          "data": [
              {
                "x": "07/03/21",
                "y": 0.047333333
              },
              {
                "x": "14/03/21",
                "y": 0.03152381
              },
              {
                "x": "21/03/21",
                "y": 0.048685714
              },
              {
                "x": "28/03/21",
                "y": 0.048170748
              },
              {
                "x": "04/04/21",
                "y": 0.06
              },
              {
                "x": "11/04/21",
                "y": 0.088259259
              },
              {
                "x": "18/04/21",
                "y": 0.0933
              },
              {
                "x": "25/04/21",
                "y": 0.005458333
              },
              {
                "x": "02/05/21",
                "y": 0.062421429
              },
              {
                "x": "09/05/21",
                "y": 0.072802296
              },
              {
                "x": "16/05/21",
                "y": 0.061002976
              },
              {
                "x": "23/05/21",
                "y": 0.048132749
              },
              {
                "x": "30/05/21",
                "y": 0.059455102
              },
              {
                "x": "06/06/21",
                "y": 0.093235556
              }
          ]
        },
        {
          "id": "Fernando",
          "color": "hsl(210, 90%, 34%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.093383333
            },
            {
              "x": "14/03/21",
              "y": 0.058928571
            },
            {
              "x": "21/03/21",
              "y": 0.121777778
            },
            {
              "x": "28/03/21",
              "y": 0.076375
            },
            {
              "x": "04/04/21",
              "y": 0.036111111
            },
            {
              "x": "11/04/21",
              "y": 0.042928571
            },
            {
              "x": "18/04/21",
              "y": 0
            },
            {
              "x": "25/04/21",
              "y": 0.048353333
            },
            {
              "x": "02/05/21",
              "y": 0.024922222
            },
            {
              "x": "09/05/21",
              "y": 0.086470238
            },
            {
              "x": "16/05/21",
              "y": 0.016894118
            },
            {
              "x": "23/05/21",
              "y": 0.08122403
            },
            {
              "x": "30/05/21",
              "y": 0.089628788
            },
            {
              "x": "06/06/21",
              "y": 0.0905625
            }
          ]
        },
        {
          "id": "Clara Luz",
          "color": "hsl(8, 76%, 43%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.156347339
            },
            {
              "x": "14/03/21",
              "y": 0.113593407
            },
            {
              "x": "21/03/21",
              "y": 0.140732143
            },
            {
              "x": "28/03/21",
              "y": 0.160945785
            },
            {
              "x": "04/04/21",
              "y": 0.142293651
            },
            {
              "x": "11/04/21",
              "y": 0.087039683
            },
            {
              "x": "18/04/21",
              "y": 0.208767857
            },
            {
              "x": "25/04/21",
              "y": 0.1257
            },
            {
              "x": "02/05/21",
              "y": 0.151645419
            },
            {
              "x": "09/05/21",
              "y": 0.138266667
            },
            {
              "x": "16/05/21",
              "y": 0.159087798
            },
            {
              "x": "23/05/21",
              "y": 0.123106463
            },
            {
              "x": "30/05/21",
              "y": 0.08132381
            },
            {
              "x": "06/06/21",
              "y": 0.156845238
            }
          ]
        },
        {
          "id": "Adrian",
          "color": "hsl(135, 37%, 48%)",
          "data": [
            {
                "x": "07/03/21",
                "y": 0.047333333
              },
              {
                "x": "14/03/21",
                "y": 0.03152381
              },
              {
                "x": "21/03/21",
                "y": 0.048685714
              },
              {
                "x": "28/03/21",
                "y": 0.048170748
              },
              {
                "x": "04/04/21",
                "y": 0.06
              },
              {
                "x": "11/04/21",
                "y": 0.088259259
              },
              {
                "x": "18/04/21",
                "y": 0.0933
              },
              {
                "x": "25/04/21",
                "y": 0.005458333
              },
              {
                "x": "02/05/21",
                "y": 0.062421429
              },
              {
                "x": "09/05/21",
                "y": 0.072802296
              },
              {
                "x": "16/05/21",
                "y": 0.061002976
              },
              {
                "x": "23/05/21",
                "y": 0.048132749
              },
              {
                "x": "30/05/21",
                "y": 0.059455102
              },
              {
                "x": "06/06/21",
                "y": 0.093235556
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
                    "y": 0.047333333
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.03152381
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.048685714
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.048170748
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.06
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.088259259
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.0933
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.005458333
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.062421429
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.072802296
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.061002976
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.048132749
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.059455102
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.093235556
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
                    "y": 0.156347339
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.113593407
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.140732143
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.160945785
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.142293651
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.087039683
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.208767857
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.1257
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.151645419
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.138266667
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.159087798
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.123106463
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.08132381
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.156845238
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
                "y": 0.047333333
              },
              {
                "x": "14/03/21",
                "y": 0.03152381
              },
              {
                "x": "21/03/21",
                "y": 0.048685714
              },
              {
                "x": "28/03/21",
                "y": 0.048170748
              },
              {
                "x": "04/04/21",
                "y": 0.06
              },
              {
                "x": "11/04/21",
                "y": 0.088259259
              },
              {
                "x": "18/04/21",
                "y": 0.0933
              },
              {
                "x": "25/04/21",
                "y": 0.005458333
              },
              {
                "x": "02/05/21",
                "y": 0.062421429
              },
              {
                "x": "09/05/21",
                "y": 0.072802296
              },
              {
                "x": "16/05/21",
                "y": 0.061002976
              },
              {
                "x": "23/05/21",
                "y": 0.048132749
              },
              {
                "x": "30/05/21",
                "y": 0.059455102
              },
              {
                "x": "06/06/21",
                "y": 0.093235556
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
                    "y": 0.093383333
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.058928571
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.121777778
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.076375
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.036111111
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.042928571
                  },
                  {
                    "x": "18/04/21",
                    "y": 0
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.048353333
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.024922222
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.086470238
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.016894118
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.08122403
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.089628788
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.0905625
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
                            <h2 className={classes.subtitle}><strong>Analisis Negatividad Gráfica</strong></h2>
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
                            <h2 className={classes.subtitle}><strong>Analisis Negatividad Texto</strong></h2>
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

