import React, { Component } from 'react';
import { withStyles,makeStyles, useTheme } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { ResponsiveBar } from '@nivo/bar'
import { CalculatorContext } from '../../contexts/CalculatorContext';

import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import Footer from '../Footer';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalculatorData, {PIB} from './data'
import {ResponsiveContainer,ComposedChart, Line, Area, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip,Legend, Scatter, ReferenceLine,LineChart} from 'recharts';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
		flexGrow: 1
	},
	padding: {
		padding: theme.spacing(3)
	},
	demo1: {
		backgroundColor: theme.palette.background.paper
	},
	demo2: {
		backgroundColor: "#2e1534"
	}
  }));  

const Calculadora = ({ classes }) => {

    const [age, setAge,stateValue] = React.useState('');

    const [tc_pib, setTc_pib] = React.useState(-10)
    const [tc_g, setTc_g] = React.useState(-0.09)
    
    const [withEFN, setWithEFN] = React.useState(0);
    
    const [efn, setEfn] =  React.useState(983099);
    const [mult, setMult] = React.useState(1.3);

    const [year, setYear] = React.useState(2020);
    const [valorNominal, setValorNominal] = React.useState(false);

    let anioSiguiente = withEFN?(
        CalculatorData.obtenerAnioSiguienteSegunTC( tc_pib/100, tc_g/100 ).obtenerConEstimuloFiscal(efn, null, mult)
    ):(
        CalculatorData.obtenerAnioSiguienteSegunTC( tc_pib/100, tc_g/100 )
    )

    let prediccion = PIB.obtenerPrediccion(anioSiguiente, tc_pib/100)
    
    const classes1 = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const handleChangeIndex = (index) => {
        setValue(index);
    };

return (
  <div>
    <div className={classes1.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Completa" {...a11yProps(0)} />
          <Tab label="Tasa de crecimiento" {...a11yProps(1)} />
          <Tab label="PIB" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <div style={{ height: "23rem", width: '100%'}}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={600}
                        height={400}
                        data={prediccion}
                        margin={{
                            // top: 10, right: 10, bottom: 10, left: 10,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="anio" />
                        <YAxis yAxisId="percentage" orientation="right" tickFormatter={item=>100*item+'%'} domain={[-1, 1]} scale='linear'/>
                        <YAxis yAxisId="money" tickFormatter={item=>'$'+(item/1000000).toFixed(2)+'M'} scale='linear'/>
                        <Tooltip />
                        <Legend />
                        {valorNominal ? (
                            <Bar yAxisId="money" dataKey="pibNominal" barSize={20} fill="#413ea0" name="PIB N" />
                        ):(
                            <Bar yAxisId="money" dataKey="pib" barSize={20} fill="#413ea0" name="PIB ($MXN)" />
                        )}
                        
                        <Area yAxisId="money" dataKey="tc_mxn" barSize={20} fill="#05A1A0" name="TC PIB ($MXN)" />
                        <Line yAxisId="percentage" type="monotone" dataKey="tc" stroke="#ff7300" name="TC PIB (%)"/>
                        <Line yAxisId="percentage" type="monotone" dataKey="inpc" stroke="#ff7300" name="TC INPC vs. 2013 (%)" />

                        <ReferenceLine x={year} stroke="green" yAxisId="money"/>
                    </ComposedChart>

                    
                </ResponsiveContainer>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <div style={{ height: "23rem", width: '100%'}}>
                <ResponsiveContainer>
                    <LineChart
                        width={600}
                        height={400}
                        data={prediccion}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="anio"/>
                        <YAxis tickFormatter={item=>100*item+'%'} scale='linear'/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="tc" stroke="#8884d8" activeDot={{ r: 8 }} name="Tasa de Crecimiento PIB (%)" />
                        <ReferenceLine x={year} stroke="red" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <div style={{ height: "23rem", width: '100%'}}>
                    <ResponsiveContainer>
                        <LineChart
                            width={600}
                            height={400}
                            data={prediccion}
                            margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="anio" />
                            <YAxis tickFormatter={item=>'$'+(item/1000000).toFixed(2)+'M'} scale='linear' domain={[10000000, 22000000]}/>
                            <Tooltip />
                            <Legend />
                            {valorNominal ? (
                                <Line type="monotone" dataKey="pibNominal" stroke="#8884d8" activeDot={{ r: 8 }} name="PIB Nominal ($MXN)" />
                            ):(
                                <Line type="monotone" dataKey="pib" stroke="#8884d8" activeDot={{ r: 8 }} name="PIB ($MXN)" />
                            )}
                            <ReferenceLine x={year} stroke="red"/>
                        </LineChart>
                    </ResponsiveContainer>
            </div>
        </TabPanel>
      </SwipeableViews>
      
    </div> 

    <div className={classes.container}>
        <div className={classes.subsection}>
            <Typography className={classes.h3} variant='h3'>CALCULO DE PIB {valorNominal ? 'NOMINAL':null} EN {year} </Typography>
            <Typography className={classes.h3} variant='h3'>{
                prediccion.find(l=>l.anio==year)[valorNominal?'pibNominal':'pib'].toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})
            }</Typography>
        </div>
        <fieldset className={classes.fieldset} style={{flex: 3}}>
            <Slider 
                defaultValue={year} step={1} min={2010} max={2025}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="on"
                onChange={(e, v)=>{ setYear(v) }}
            ></Slider>
        </fieldset>
        <fieldset className={classes.fieldset}>
            <Typography gutterBottom>Valor nominal</Typography>            
            <Switch color="primary" value={valorNominal} onChange={(e)=>{ setValorNominal(e.target.checked) }}></Switch>
        </fieldset>
    </div> 
    <div className={classes.container}>
        <div className={classes.subsection}>
            <Typography className={classes.h3} variant='h3'>ESCENARIO BASE {!withEFN ? 'SIN' : 'CON'} ESTÍMULO FISCAL</Typography>
            <Typography className={classes.h3} variant='h3'>{(( !withEFN ? (
                anioSiguiente.tc_dabase
            ):(
                anioSiguiente.pib / CalculatorData.pib -1
            ))*100).toPrecision(4)}%</Typography>
        </div>
        <fieldset className={classes.fieldset}>
            <Typography gutterBottom>Estimación de crecimiento de PIB</Typography>
            <Slider 
                defaultValue={tc_pib} step={1} min={-12} max={-3}
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
                defaultValue={tc_g} step={0.1} min={-1} max={4}
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
        <div className={classes.container}>
            <div className={classes.subsection}>
                <Typography className={classes.h3} variant='h3'>Descripción</Typography>
            </div>
            <fieldset className={classes.fieldset} style={{flex: 3}}>
                <div>
                    <p>
                        Las medidas de distanciamiento social y restricciones a la movilidad impuestas para controlar la pandemia del Covid19, han tenido un impacto profundo sobre la economía a nivel global. En México, los especialistas esperan que la pandemia detone una de las recesiones económicas más profundas desde la Gran de Depresión de 1929. Asimismo, la crisis ha tenido efectos macroeconómicos que han afectado de manera asimétrica a los países emergentes. Entre estos efectos se puede contar la depreciación del tipo de cambio, la caída en el precio de las materias primas incluido el petróleo y el incremento en el riesgo soberano, lo cual ha presionado al alza las tasas de interés a largo plazo. 
                    </p>
                    <p>
                        Para 2020, el entorno macroeconómico presionará de manera importante a las finanzas públicas en México incrementando los requerimientos financieros del sector público. Asimismo, la sola depreciación del tipo de cambio incrementaría el nivel de endeudamiento aun sin aplicar ningún estímulo económico. La aplicación de un estímulo económico podría mitigar los peores efectos de la recesión con un impacto en el déficit y en la deuda mínimo, ya que el PIB se incrementaría casi en la misma proporción que el estímulo debido el efecto multiplicador del gasto. En este sentido, a pesar del incremento en los niveles de endeudamiento, un estimulo correctamente focalizado podría sentar las bases para una recuperación en 2021
                    </p>
                    <p>
                    En este tablero se presenta una Calculadora Económica que permite, a partir de las expectativas de los especialistas encuestados por el Banco de México y con base en las medidas fiscales sugeridas por el Centro de Estudios Espinoza Yglesias (CEEY), calcular el impacto que podría tener la aplicación de un conjunto de medidas de estímulo económico sobre el crecimiento del PIB y la trayectoria de sostenibilidad de la deuda pública. 
                    </p>
                </div>
            </fieldset>
        </div> 


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
    fontSize: '1.5em',
    flexWrap: 'wrap'
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
