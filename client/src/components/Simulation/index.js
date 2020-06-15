import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import Header from '../Header';
import Footer from '../Footer';
import SimulationUncertainty from './SimulationUncertainty';
import ReactivacionEco from './ReactivacionEco';
import { Helmet } from 'react-helmet';
import MasterDetailView from '../MasterDetailView';
const Simulation = ({ classes }) => {

	const isMobile = window.innerWidth < 1000;
	document.title = "Prospectiva | MexiCOVID";
	const title = `Análisis de simulación del covid-19 bajo incertidumbre`;

	const sections = [
		{
			title: 'Tablero para la Toma de Decisión sobre Reactivación Económica por Entidad Federativa',
			subtitle: '<b>Dr. Fernando Gómez Zaldívar</b>',
			description: 'Una reactivación económica estratégica requiere identificar las características económicas propias de cada región y sector económico. Este tablero presenta una serie de indicadores que permiten listar por orden de importancia 93 subsectores de acuerdo con: 1) importancia económica relativa; 2)nivel de riesgo epidemiológico por Covid19. El tomador o tomadora de decisión puede evaluar las disyuntivas entre economía y riesgo epidemiológico para los sectores y regiones. Esto abonará el diseño de políticas de reactivación industrial mejor articuladas que minimicen el impacto económico de la pandemia y reduzcan el nivel del rebrote de los contagios en el futuro.',
			caption: 'Fernando Gómez, doctor en políticas públicas por la Escuela de Gobierno y Transformación Pública del Tecnológico de Monterrey @fgmzz',
			render: ()=>(
				<iframe src="https://public.tableau.com/views/Tablerodereactivacineconmica_15898256803320/Semforodereactivacinsectorial?:increment_view_count=no&:embed=y&:origin=viz_share_link&:embed_code_version=3&:loadOrderID=0&:display_count=y" className={classes.graphContainer}></iframe>
			)
		},
		{
			title: 'Análisis de simulación del covid-19 bajo incertidumbre',
			subtitle: '<b>Edmundo Molina</b>',
			description: 'Este modelo de difusión de COVID19 constituye una versión modificada del modelo SIR. Considera parámetros sobre la infectividad y mortalidad del COVID19, el impacto del distanciamiento social y, de manera muy importante, el rezago en la información entre el número real de infectados y el número de casos confirmados.',
			caption: 'Fernando Gómez, doctor en políticas públicas por la Escuela de Gobierno y Transformación Pública del Tecnológico de Monterrey @fgmzz',
			render: ()=>(
				<iframe src="./uncertainty" className={classes.graphContainer}></iframe>
			)
		}
	]


	return (
		<div>
			<Helmet>
			<title>Prospectiva | MexiCOVID</title>
			<meta name="description" content="Prospectiva y modelos del COVID19" />
			<meta property="og:image" content="https://mexicovid19.app/img/mediashare/incertidumbre.PNG" />
			<meta name="keywords" content="simulacion incertidumbre, coronavirus mexico tec,casos coronavirus simulacion,coronavirus simulacion,cuanto tiempo falta coronavirus"/>
			
			<meta property="og:title" content="Prospectiva | MexiCOVID"/>
				<meta property="og:description" content="Prospectiva y modelos del COVID19"/>

			</Helmet>
			<div style={{display: 'flex', height: '100vh', flexDirection: 'column'}}>
				<Header fixed={false}/>
				<div className={classes.container}>
					<MasterDetailView 
						sections={sections}
					></MasterDetailView>
				</div>
			</div>
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

export default withStyles(styles)(Simulation);
