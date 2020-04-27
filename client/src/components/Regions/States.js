import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AvailableBeds from '../AvailableBeds';
import ConfirmAge from '../ConfirmAge';
import NewWindow from 'react-new-window';

const States = ({ classes }) => {

	let location = window.location.pathname;

	return (
		<React.Fragment>
			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Número de Confirmados Positivos por Estado y por 100,000 Habitantes</Typography>
				<p> <u>Instrucciones</u>: Se seleccionan automáticamente los cinco estados con las tasas de confirmados-positivos más altas a nivel nacional. Tú puedes interactuar con el tablero, seleccionando y deseleccionando las comparaciones entre estados que quieras realizar.</p>
			</section>
			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Disponibilidad de camas para hospitalización y en unidades de cuidado intensivo (UCI)</Typography>
				<p> Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel estatal que han requerido hospitalización, así como los casos graves que se encuentran en cuidado intensivo. Su objetivo es identificar las entidades federativas en las cuales, dada la evolución de los casos, será necesario destinar mayores recursos e infraestructura para lograr atender la demanda de atención médica. Para identificar el número y tipo de casos se utiliza la información más desagregada que el Gobierno Federal empezó a publicar a partir del 13 de abril. Respecto al número de camas a nivel estatal se utiliza la información de la Secretaría de Salud de 2018.</p>
				<Button target= "_blank" href="/availablebeds"  className={location === '/availablebeds' ? classes.selectedBtn : classes.button} color="inherit">Abrir grafica <ArrowForwardIcon/></Button>
			</section>
			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Casos confirmados acumulados de COVID-19 por rango de edad</Typography>
				<p> La visualización presenta los rangos de edades en los que se ubican los casos confirmados acumulados de COVID-19 por estado y fecha. Con base en los Comunicados Técnicos diarios del Gobierno Federal, el objetivo de esta visualización es identificar la población que está siendo más susceptible al contagio por entidad federativa.</p>
				<Button target= "_blank" href="/confirmage"  className={location === '/confirmage' ? classes.selectedBtn : classes.button} color="inherit">Abrir grafica <ArrowForwardIcon/></Button>
			</section>
		</React.Fragment>
	);
}

const styles = () => ({
	h2: {
		fontSize: '24px'
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

	section: {
		margin: '20px 0px',
    	borderRadius: '5px',
    	padding: '20px',
    	backgroundColor: colors.GRAY,
	},

  	[`@media (max-width: ${1000}px)`]: {
		
 	},

	buttons: {
		display: 'flexEnd',
		justifyContent: 'space-between',
		flex: '2'
	},
	button: {
		'&:hover': {
		borderBottom: '1px solid',
		borderRadius: '0px',
		}
	},
});

export default withStyles(styles)(States);
