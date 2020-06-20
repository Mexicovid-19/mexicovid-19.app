import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Calculadora from '../Calculadora';

function valuetext(value) {
	return `${value}°C`;
}

const Calculator = ({ classes }) => {
    const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});
	
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
    return (
        <div>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Calculadora></Calculadora>
				</Grid>
				<Grid item xs={12} className={classes.container}>
				    <Grid container spacing={3}>
						<Grid item xs={3}>
							<div>
								<Typography id="discrete-slider" gutterBottom>
								    Variable 1
								</Typography>
								<Slider
								    defaultValue={30}
									getAriaValueText={valuetext}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={10}
									marks
									min={10}
									max={110}
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
						    <div>
							    <Typography id="discrete-slider" gutterBottom>
									Variable 2
								</Typography>
								<Slider
									defaultValue={30}
									getAriaValueText={valuetext}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={10}
									marks
									min={10}
									max={110}
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
							<div>
								<Typography id="discrete-slider" gutterBottom>
									Variable 3
								</Typography>
								<Slider
								    defaultValue={30}
									getAriaValueText={valuetext}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={10}
									marks
									min={10}
									max={110}
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
						    <div>
								<Typography id="discrete-slider" gutterBottom>
								    Variable 4
								</Typography>
								<Slider
									defaultValue={30}
									getAriaValueText={valuetext}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={10}
									marks
									min={10}
									max={110}
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
							<div>
								<Typography id="discrete-slider" gutterBottom>
									Variable 5
								</Typography>
								<Slider
									defaultValue={30}
									getAriaValueText={valuetext}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={10}
									marks
									min={10}
									max={110}
								/>
							</div>
						</Grid>
							<Grid item xs={3}>
							    <div>
								    <Typography id="discrete-slider" gutterBottom>
											Variable 6
								    </Typography>
									<Slider
										defaultValue={30}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={10}
										marks
										min={10}
										max={110}
									/>
								</div>
							</Grid>
							<Grid item xs={3}>
								<div>
									<Typography id="discrete-slider" gutterBottom>
										Variable 7
									</Typography>
									<Slider
										defaultValue={30}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={10}
										marks
										min={10}
										max={110}
									/>
								</div>
							</Grid>
							<Grid item xs={3}>
								<div>
									<Typography id="discrete-slider" gutterBottom>
										Variable 8
									</Typography>
									<Slider
										defaultValue={30}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={10}
										marks
										min={10}
										max={110}
									/>
								</div>
							</Grid>
							<Grid item xs={3}>
								<div>
									<Typography id="discrete-slider" gutterBottom>
									    Variable 9
									</Typography>
									<Slider
										defaultValue={30}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={10}
										marks
										min={10}
										max={110}
									/>
								</div>
							</Grid>
							<Grid item xs={3}>
								<div>
									<FormControlLabel
										control={
                                            <Switch
                                                hecked={state.checkedB}
                                                onChange={handleChange}
                                                name="checkedB"
                                                color="primary"
                                            />
										}
										label="Variable booleana 1"
									/>
								</div>
							</Grid>
							<Grid item xs={3}>
								<div>
									<FormControlLabel
										control={
                                            <Switch
                                                checked={state.checkedA}
                                                onChange={handleChange}
                                                name="checkedA"
                                                color="primary"
                                            />
										}
										label="Variable booleana 2"
									/>
								</div>
							</Grid>
							<Grid item xs={3}>
								<div>
									<Button variant="contained" color="primary" disableElevation>
										Calcular valores
									</Button>
								</div>
							</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
    );
}

const styles = () => ({
    container: {
      width: '100%',
          backgroundColor: colors.GRAY,
          flex: 1, 
          overflow: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
    },
    graphContainer: {
      width: '100%',
      flex: 1,
      display: 'flex', 
      flexDirection: 'column'
  },
    regionsContainer: {
      width: '70%',
      margin: 'auto',
      padding: '25px',
      paddingTop: '118px',
      backgroundColor: colors.WHITE
      },
      regionsContainer1: {
          width: '70%',
          margin: 'auto',
          padding: '25px',
          paddingTop: '30px',
          backgroundColor: colors.WHITE
      },
      
      h1: {
          fontSize: '36px'
      },
  
      header: {
          borderBottom: `1px solid ${colors.BLACK}`,
          display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      },
  
      label: {
          color: colors.GRAY_LIGHT
      },
      
      textcontainer:{
          textAlign:'justify',
          fontSize:'10px',
      },
  
      [`@media (max-width: ${1000}px)`]: {
          regionsContainer: {
              width: '100%',
              padding: '10px',
              paddingTop: '60px'
          },
          regionsContainer1: {
              width: '100%',
              padding: '10px',
              paddingTop: '20px'
          },
          header: {
              alignItems: 'flex-end'
          },
          h1: {
              fontSize: '24px'
          },
        },
  });

export default withStyles(styles)(Calculator);