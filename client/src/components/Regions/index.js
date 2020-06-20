import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import * as colors from '../../constants/colors';
import Header from '../Header';
import Footer from '../Footer';
import States from './States';
import Municipalities from './Municipalities';
import { Helmet } from 'react-helmet';
import { RegionContext } from '../../contexts/RegionContext';

const Regions = ({ classes }) => {
	const { isState, changeState } = React.useContext(RegionContext);
	

	const isMobile = window.innerWidth < 1000;
	document.title = "Seguimiento por regiones | MexiCOVID";
	const title = `Seguimiento por ${isState ? 'Estado' : 'Municipio'}`;
	const subtitle = `${isMobile ? '' : 'Seguimiento por'} ${isState ? 'Municipio' : 'Estado'}`;
	return (
		<div style={{display: 'flex', height: '100vh', flexDirection: 'column'}}>
			<Helmet>
			<title>Seguimiento por regiones | MexiCOVID</title>
			<meta name="description" content="Seguimiento a la evoluación del Covid-19 en México por regiones" />
			<meta property="og:image" content="https://mexicovid19.app/img/mediashare/regiones.PNG" />
			<meta name="keywords" content="coronavirus,regiones coronavirus, coronavirus mexico,casos coronavirus,coronavirus estados,Mexicovid regiones"/>
			
			<meta property="og:title" content="Seguimiento a la evoluación del Covid-19 en México por regiones"/>
			<meta property="og:description" content="Seguimiento por regiones a la evoluación del Covid-19 en México @ITESM"/>

			</Helmet>
			<Header fixed={false}/>
			<div className={classes.container}>
					{isState ?<States/>: <Municipalities/>}
			</div>
			{/* <Footer/> */}
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
	
	h1: {
		fontSize: '36px'
	},

	header: {
		borderBottom: `1px solid ${colors.BLACK}`,
		display: 'flex',
    	alignItems: 'baseline',
		justifyContent: 'space-between',
		maxWidth: '900px',
	},

	label: {
		color: colors.GRAY_LIGHT
	},

	// [`@media (max-width: ${1000}px)`]: {
	// 	regionsContainer: {
	// 		width: '100%',
	// 		padding: 0
	// 	},
	// 	header: {
	// 		alignItems: 'flex-end'
	// 	},
	// 	h1: {
	// 		fontSize: '24px'
	// 	},
	//   }
	  
});

export default withStyles(styles)(Regions);
