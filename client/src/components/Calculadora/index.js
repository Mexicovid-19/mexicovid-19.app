import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { ResponsiveBar } from '@nivo/bar'
import { CalculatorContext } from '../../contexts/CalculatorContext';

import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import Footer from '../Footer';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalculatorData, {PIB} from './data'


const Calculadora = ({ classes }) => {
    // const { calculatorData } = React.useContext(CalculatorContext);

    const [age, setAge,stateValue] = React.useState('');

    const [tc_pib, setTc_pib] = React.useState(-10)
    const [tc_g, setTc_g] = React.useState(0.09)
    
    const [withEFN, setWithEFN] = React.useState(0);
    
    const [efn, setEfn] =  React.useState(983099);
    const [mult, setMult] = React.useState(1.3);

    const [year, setYear] = React.useState(2020);
    const [valorNominal, setValorNominal] = React.useState(false);
    //porcentaje de deuda
    // const {
    //     states,
    // } = React.useContext(CalculatorContext);

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
return (
  <div>
    {/* <ResponsiveBar
            data={"calculatorData"}
            keys={[
                'ANO',
                'PIB',
                'DA',
                'C',
                'G',
                'I',
                'INV',
                'XM',
                'X',
                'M',
                'E'
                 ]}
            indexBy="ANO"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
    /> */}

    <div className={classes.container}>
        <div className={classes.subsection}>
            <Typography className={classes.h3} variant='h3'>ESCENARIO BASE {!withEFN ? 'SIN' : 'CON'} ESTÍMULO FISCAL</Typography>
            <Typography className={classes.h3} variant='h3'>{ !withEFN ? (
                CalculatorData.obtenerAnioSiguienteSegunTC( tc_pib, tc_g ).tc_dabase.toPrecision(4)
            ):(
                (CalculatorData.obtenerAnioSiguienteSegunTC( tc_pib, tc_g ).obtenerConEstimuloFiscal(efn, null, mult).pib / CalculatorData.pib -1).toPrecision(4)
            )}%</Typography>
        </div>
        <fieldset className={classes.fieldset}>
            <Typography gutterBottom>Estimación de crecimiento de PIB</Typography>
            <Slider 
                defaultValue={tc_pib} step={1} min={-100} max={100}
                onChange={(e,v)=>{setTc_pib(v)}}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                marks={[
                    {value: -10, label: '-10%'}
                ]}
            ></Slider>
        </fieldset>

        <fieldset className={classes.fieldset}>
            <Typography gutterBottom>Crecimiento en Presupuesto de Egresos de la Federación</Typography>            
            <Slider 
                defaultValue={tc_g} step={0.1} min={-100} max={100}
                onChange={(e,v)=>{setTc_g(v)}}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                marks={[
                    {value: 0.9, label: '0.9%'}
                ]}
            ></Slider>
        </fieldset>
        <fieldset className={classes.fieldset}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography gutterBottom>Estimulo fiscal</Typography>            
                <Switch color="primary" value={withEFN} onChange={(e)=>{ setWithEFN(e.target.checked) }}></Switch>
            </div>
            {withEFN ? (
                [
                    <TextField label="Pesos nominales" type="number" value={efn}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        onChange={(e)=>{
                            setEfn(e.target.value)
                        }}
                    ></TextField>,
                    <TextField label="Multiplicador" type="number" value={mult} onChange={e=>{
                        setMult(e.target.value)
                    }}></TextField>
                ]
            ):null}
        </fieldset>

    </div>
    
    <div className={classes.container}>
        <div className={classes.subsection}>
            <Typography className={classes.h3} variant='h3'>CALCULO DE PIB {valorNominal ? 'NOMINAL':null} EN {year} </Typography>
            <Typography className={classes.h3} variant='h3'>{(valorNominal?(
                PIB.obtenerPIBNsinComponentes(year, CalculatorData.obtenerAnioSiguienteSegunTC( tc_pib, tc_g ))
            ):(
                PIB.obtenerPIBsinComponentes(year, CalculatorData.obtenerAnioSiguienteSegunTC( tc_pib, tc_g ))
            )).toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})}</Typography>
        </div>
        <fieldset className={classes.fieldset} style={{flex: 3}}>
            <Slider 
                defaultValue={year} step={1} min={2020} max={2025}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="on"
                onChange={(e, v)=>{ setYear(v) }}
            ></Slider>
        </fieldset>
        <fieldset className={classes.fieldset}>
            <Typography gutterBottom>Valor nominal</Typography>            
            <Switch color="primary" value={valorNominal} onChange={(e)=>{ setValorNominal(e.target.checked) }}></Switch>
        </fieldset>
        <fieldset className={classes.fieldset}>
            <Typography gutterBottom>Usar valores pronosticados</Typography>            
            <Switch color="primary" ></Switch>
        </fieldset>

        
    </div> 


  </div>
  );
}

const styles = () => ({
  section: {
    margin: '20px 0px',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: colors.GRAY,
    height: '800px'
  },
  
  container: {
    width: '100%',
    backgroundColor: colors.WHITE,
    display: 'flex',
    padding: '4px',
    flexWrap: 'wrap',
    margin: '8px',

  },

  subsection: {
    flexBasis: '100%',
    margin: '8px',
    display: 'flex', 
    alignItems: 'baseline',
    justifyContent: 'space-between',
    fontSize: '1.5em'
  },

  fieldset: {
    backgroundColor: '#FFF',
    flex: 1,
    margin: '8px',
    padding: '16px', 
    borderRadius: '8px',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'space-around'
  },

  subsectionButton:{
    flexBasis: '100%',
    alignSelf: 'flex-end', 
    margin: '8px'
  },

  graphicContainer: {
    marginTop: '50px'
  },
  
  header: {
    borderBottom: `1px solid ${colors.BLACK}`,
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  h3: {
    fontSize: '1.5em'
  },
  
  textclass: {
    marginTop: '0px',
    marginBottom: '0px'
  },   
});

export default withStyles(styles)(Calculadora);
