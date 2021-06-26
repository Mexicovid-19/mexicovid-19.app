import React, { useState, useEffect, useRef } from 'react'

/* Material UI */
import { withStyles } from '@material-ui/core/styles';
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from '@material-ui/core';
/* Mapbox */

// CSS

// Utils
import * as colors from '../../constants/colors';
import CompoundLine from './CompoundLine.js';
import { color } from '@material-ui/system';


const Sentimientos = ({ classes }) => {

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
    const [value, setCandidato]=useState(todosLosCandidatos);
    const handleChange = e => setCandidato(e.target.value);
    const isMobile = window.innerWidth < 1000;
    document.title = "Elecciones 2021 | MexiCOVID"
    useEffect(() => {
    }, []);
    

    return (
        <div className={classes.itemsContainer}>
            <div className = {classes.chartContainer}style={{height: "100%"}}>
                <h2 className={classes.subtitle}><strong>Analisis Sentimientoa Texto</strong></h2>
                <h2 className={classes.subtitle5}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra sollicitudin sem nec efficitur. Nullam eu varius lectus. Aliquam orci velit, mattis et ullamcorper tempor, ultrices eu ipsum. Mauris sed nunc aliquet, convallis libero id, pretium tellus. Donec aliquam nibh diam, a euismod turpis semper vitae. Morbi sollicitudin, justo vitae ullamcorper suscipit, libero justo rutrum nunc, vel dictum erat sapien sed nisi. Donec in nibh vitae eros lacinia semper sed sit amet neque. Phasellus ut elit a arcu hendrerit faucibus et at enim. Duis condimentum orci non enim pretium ornare. Aenean mattis semper eleifend. Vivamus et nisl at lacus euismod facilisis. Vivamus auctor tristique odio id maximus. Vivamus tincidunt porta urna id euismod. Maecenas nec vulputate metus.</h2>
                <h2 className={classes.subtitle5}>Nam blandit risus tortor, malesuada efficitur erat iaculis a. Etiam nunc arcu, faucibus id lectus eget, ornare imperdiet arcu. Duis luctus nisl id lobortis blandit. Integer facilisis velit ac lacus condimentum lobortis. Vestibulum nisi diam, euismod sit amet tincidunt nec, tempus porta tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec venenatis venenatis consequat. Sed suscipit eros ac consequat ultricies. Duis vitae viverra nisi. Mauris malesuada est nisl, venenatis vulputate felis accumsan in. Quisque ultricies, nulla ut sollicitudin viverra, ante lacus consectetur sem, id condimentum nunc ante iaculis dolor. Suspendisse tempor leo ac leo lobortis consequat. Vestibulum a maximus sem. Cras leo sem, feugiat sit amet mattis quis, commodo vitae eros. Phasellus blandit sem ac mattis volutpat. Curabitur egestas fermentum consequat.</h2> 
            </div>
            <div className = {classes.outerChartContainer}>
                <div className = {classes.chartContainer}>
                <h2 className={classes.subtitle}><strong>Analisis Sentimientos Gráfica</strong></h2>
                <CompoundLine data = {value}/>
                <div className = {classes.chartContainer}>
                    <FormControl className= {classes.formControl}>
                        <InputLabel>Candidatos</InputLabel>
                            <Select value={value} onChange = {handleChange}>
                                <MenuItem value={todosLosCandidatos}>Todos los candidatos</MenuItem>
                                <MenuItem value={samuelG}>Samuel García</MenuItem>
                                <MenuItem value={claraLF}>Clara Luz Florez</MenuItem>
                                <MenuItem value={fernandoF}>Fernando Larrazábal</MenuItem>
                                <MenuItem value={adrianG}>Adrian de la Garza</MenuItem>
                            </Select>
                    </FormControl>
                </div>
                </div>
            </div>
       
        </div>
    );
}

const styles = () => ({
  /* Desktop */
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
  },
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 2,
  },
  map: {
    height: 'calc(100vh -  148px)',
    minHeight: '800px',
    width: '50vw',
    margin: 'auto',
    borderBottom:  '1px solid white',
  },
  outerChartContainer: {
    paddingTop: '30px',
    borderLeft:  '1px solid white',
    borderBottom:  '1px solid white',
    borderRight:  '1px solid white',
  },
  chartContainer: {
    height: '600px',
    minHeight: '600px',
    width: '50vw',
    flex: 1,
    margin: 'auto',
    padding: '50px',
  },
  subtitle: {
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: colors.WHITE
  },
  subtitle2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.WHITE
    },
  subtitle5: {
    textAlign: 'center',
    textAlign: 'justify',
    fontSize: 20,
    fontWeight: 'normal',
    paddingTop: '45px',
    //paddingBottom: '-200px',
    paddingLeft: '60px',
    paddingRight: '60px',
    color: colors.WHITE,
  },
  chartTitle:{
    fontSize: '20px',
    textAlign: 'center'
  },
  error: {
    color: colors.WHITE,
    textAlign: 'center',
    position: 'relative',
    top: '100px',
    fontSize: '30px'
},


  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    itemsContainer: {
        display: 'block',
        margin: 'auto',
    },
    map: {
        minHeight: '400px',
        height: '400px',
        width: '100vw',
    },
    outerChartContainer: {
        paddingTop: '30px',
        borderLeft:  '1px solid white',
        borderBottom:  '1px solid white',
        borderRight:  '1px solid white',
    },
    chartContainer: {
        height: '500px',
        width: '100vw',
        flex: 1,
        margin: 'auto',
        padding: '0px',
        paddingBottom: '100px'
    },
    subtitle: {
      fontSize: 20,
    },
  }
  
});

export default withStyles(styles)(Sentimientos);
