import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import Header from '../Header';
import Footer from '../Footer';
import SimulationUncertainty from './SimulationUncertainty';
import { Helmet } from 'react-helmet';

const Simulation = ({ classes }) => {

	const isMobile = window.innerWidth < 1000;
	document.title = "Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID";
	const title = `Análisis de simulación del covid-19 bajo incertidumbre`;
	return (
		<div>
			<Helmet>
			<title>Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID</title>
			<meta name="description" content="Simulaciones del COVID19 bajo incertidumbre" />
			<meta property="og:image" content="http://mexicovid19.app/img/mediashare/incertidumbre.PNG" />
			<meta name="keywords" content="simulacion incertidumbre, coronavirus mexico tec,casos coronavirus simulacion,coronavirus simulacion,cuanto tiempo falta coronavirus"/>
			
          	<meta property="og:title" content="Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID"/>
          	<meta property="og:description" content="Simulaciones del COVID19 bajo incertidumbre"/>

			</Helmet>
			<div className={classes.container}>
			<Header fixed={true}/>
					<div className={classes.regionsContainer}>
						<header className={classes.header}>
							<Typography className={classes.h1} variant={'h1'}> {title} </Typography>	
						</header>
						<main>
							<SimulationUncertainty/>
						</main>
						<p className={classes.textcontainer}>Los resultados presentados son parte de una investigación en curso. Las opiniones aquí reflejadas representan la opinión personal de los autores y no de la institución donde laboran.</p>
					</div>
			<Footer/>
			</div>
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
		header: {
			alignItems: 'flex-end'
		},
		h1: {
			fontSize: '24px'
		},
  	}
});

export default withStyles(styles)(Simulation);
