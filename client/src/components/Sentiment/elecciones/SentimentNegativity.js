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
              "y": 0.077959767
            },
            {
              "x": "14/03/21",
              "y": 0.093517538
            },
            {
              "x": "21/03/21",
              "y": 0.094769824
            },
            {
              "x": "28/03/21",
              "y": 0.092160046
            },
            {
              "x": "04/04/21",
              "y": 0.060883975
            },
            {
              "x": "11/04/21",
              "y": 0.101008077
            },
            {
              "x": "18/04/21",
              "y": 0.068776288
            },
            {
              "x": "25/04/21",
              "y": 0.079517551
            },
            {
              "x": "02/05/21",
              "y": 0.070152395
            },
            {
              "x": "09/05/21",
              "y": 0.076521323
            },
            {
              "x": "16/05/21",
              "y": 0.085680541
            },
            {
              "x": "23/05/21",
              "y": 0.084934741
            },
            {
              "x": "30/05/21",
              "y": 0.082197528
            },
            {
              "x": "06/06/21",
              "y": 0.080523694
            }
          ]
        },
        {
          "id": "Fernando",
          "color": "hsl(210, 90%, 34%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.062945914
            },
            {
              "x": "14/03/21",
              "y": 0.054804463
            },
            {
              "x": "21/03/21",
              "y": 0.05193821
            },
            {
              "x": "28/03/21",
              "y": 0.070980757
            },
            {
              "x": "04/04/21",
              "y": 0.062090809
            },
            {
              "x": "11/04/21",
              "y": 0.065457111
            },
            {
              "x": "18/04/21",
              "y": 0.051765508
            },
            {
              "x": "25/04/21",
              "y": 0.065953458
            },
            {
              "x": "02/05/21",
              "y": 0.060409662
            },
            {
              "x": "09/05/21",
              "y": 0.064896577
            },
            {
              "x": "16/05/21",
              "y": 0.044898785
            },
            {
              "x": "23/05/21",
              "y": 0.068636143
            },
            {
              "x": "30/05/21",
              "y": 0.045917973
            },
            {
              "x": "06/06/21",
              "y": 0.047212523
            }
          ]
        },
        {
          "id": "Clara Luz",
          "color": "hsl(8, 76%, 43%)",
          "data": [
            {
              "x": "07/03/21",
              "y": 0.078215128
            },
            {
              "x": "14/03/21",
              "y": 0.089776532
            },
            {
              "x": "21/03/21",
              "y": 0.10833721
            },
            {
              "x": "28/03/21",
              "y": 0.103536226
            },
            {
              "x": "04/04/21",
              "y": 0.075377982
            },
            {
              "x": "11/04/21",
              "y": 0.08627237
            },
            {
              "x": "18/04/21",
              "y": 0.093320498
            },
            {
              "x": "25/04/21",
              "y": 0.10232958
            },
            {
              "x": "02/05/21",
              "y": 0.099142526
            },
            {
              "x": "09/05/21",
              "y": 0.0644174
            },
            {
              "x": "16/05/21",
              "y": 0.077670902
            },
            {
              "x": "23/05/21",
              "y": 0.07278002
            },
            {
              "x": "30/05/21",
              "y": 0.040960068
            },
            {
              "x": "06/06/21",
              "y": 0.071737212
            }
          ]
        },
        {
          "id": "Adrian",
          "color": "hsl(135, 37%, 48%)",
          "data": [
            {
                "x": "07/03/21",
                "y": 0.05410072
              },
              {
                "x": "14/03/21",
                "y": 0.037939041
              },
              {
                "x": "21/03/21",
                "y": 0.03703859
              },
              {
                "x": "28/03/21",
                "y": 0.080043936
              },
              {
                "x": "04/04/21",
                "y": 0.06066339
              },
              {
                "x": "11/04/21",
                "y": 0.052287872
              },
              {
                "x": "18/04/21",
                "y": 0.050290268
              },
              {
                "x": "25/04/21",
                "y": 0.081696177
              },
              {
                "x": "02/05/21",
                "y": 0.0614866
              },
              {
                "x": "09/05/21",
                "y": 0.065849298
              },
              {
                "x": "16/05/21",
                "y": 0.111774495
              },
              {
                "x": "23/05/21",
                "y": 0.071541307
              },
              {
                "x": "30/05/21",
                "y": 0.053585299
              },
              {
                "x": "06/06/21",
                "y": 0.059105144
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
                "y": 0.077959767
              },
              {
                "x": "14/03/21",
                "y": 0.093517538
              },
              {
                "x": "21/03/21",
                "y": 0.094769824
              },
              {
                "x": "28/03/21",
                "y": 0.092160046
              },
              {
                "x": "04/04/21",
                "y": 0.060883975
              },
              {
                "x": "11/04/21",
                "y": 0.101008077
              },
              {
                "x": "18/04/21",
                "y": 0.068776288
              },
              {
                "x": "25/04/21",
                "y": 0.079517551
              },
              {
                "x": "02/05/21",
                "y": 0.070152395
              },
              {
                "x": "09/05/21",
                "y": 0.076521323
              },
              {
                "x": "16/05/21",
                "y": 0.085680541
              },
              {
                "x": "23/05/21",
                "y": 0.084934741
              },
              {
                "x": "30/05/21",
                "y": 0.082197528
              },
              {
                "x": "06/06/21",
                "y": 0.080523694
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
                    "y": 0.078215128
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.089776532
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.10833721
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.103536226
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.075377982
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.08627237
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.093320498
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.10232958
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.099142526
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.0644174
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.077670902
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.07278002
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.040960068
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.071737212
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
                "y": 0.05410072
              },
              {
                "x": "14/03/21",
                "y": 0.037939041
              },
              {
                "x": "21/03/21",
                "y": 0.03703859
              },
              {
                "x": "28/03/21",
                "y": 0.080043936
              },
              {
                "x": "04/04/21",
                "y": 0.06066339
              },
              {
                "x": "11/04/21",
                "y": 0.052287872
              },
              {
                "x": "18/04/21",
                "y": 0.050290268
              },
              {
                "x": "25/04/21",
                "y": 0.081696177
              },
              {
                "x": "02/05/21",
                "y": 0.0614866
              },
              {
                "x": "09/05/21",
                "y": 0.065849298
              },
              {
                "x": "16/05/21",
                "y": 0.111774495
              },
              {
                "x": "23/05/21",
                "y": 0.071541307
              },
              {
                "x": "30/05/21",
                "y": 0.053585299
              },
              {
                "x": "06/06/21",
                "y": 0.059105144
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
                    "y": 0.062945914
                  },
                  {
                    "x": "14/03/21",
                    "y": 0.054804463
                  },
                  {
                    "x": "21/03/21",
                    "y": 0.05193821
                  },
                  {
                    "x": "28/03/21",
                    "y": 0.070980757
                  },
                  {
                    "x": "04/04/21",
                    "y": 0.062090809
                  },
                  {
                    "x": "11/04/21",
                    "y": 0.065457111
                  },
                  {
                    "x": "18/04/21",
                    "y": 0.051765508
                  },
                  {
                    "x": "25/04/21",
                    "y": 0.065953458
                  },
                  {
                    "x": "02/05/21",
                    "y": 0.060409662
                  },
                  {
                    "x": "09/05/21",
                    "y": 0.064896577
                  },
                  {
                    "x": "16/05/21",
                    "y": 0.044898785
                  },
                  {
                    "x": "23/05/21",
                    "y": 0.068636143
                  },
                  {
                    "x": "30/05/21",
                    "y": 0.045917973
                  },
                  {
                    "x": "06/06/21",
                    "y": 0.047212523
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
                        <h2 className={classes.subtitle}><strong>Analisis Negatividad Texto</strong></h2>
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

