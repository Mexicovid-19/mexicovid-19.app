import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import Header from '../Header';
import Footer from '../Footer';
import SimulationUncertainty from './SimulationUncertainty';

const Simulation = ({ classes }) => {

	const isMobile = window.innerWidth < 1000;
	const title = `ANÁLISIS DE SIMULACIÓN DEL COVID-19 BAJO INCERTIDUMBRE`;
	return (
		<div className={classes.container}>
		<Header fixed={true}/>
				<div className={classes.regionsContainer}>
					<header className={classes.header}>
						<Typography className={classes.h1} variant={'h1'}> {title} </Typography>	
					</header>
					<main>
						<SimulationUncertainty/>
					</main>
				</div>
		<Footer/>
		</div>
	);
}

const styles = () => ({
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },

  regionsContainer: {
    width: '70%',
		margin: 'auto',
		padding: '25px',
    paddingTop: '128px',
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

	[`@media (max-width: ${1000}px)`]: {
		regionsContainer: {
			width: '100%',
			padding: '10px',
			paddingTop: '60px'
		},
		header: {
			alignItems: 'flex-end'
		},
		h1: {
			fontSize: '24px'
		},
  }
});

export default withStyles(styles)(Simulation);
