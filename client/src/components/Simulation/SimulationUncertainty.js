import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';

const SimulationUncertainty = ({ classes }) => {

	
	return (
		<React.Fragment>
			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Edmundo Molina, Fernando Gómez y Luis Serra</Typography>
				<p>Este modelo de difusión de COVID19 constituye una versión modificada del modelo SIR. Considera parámetros sobre la infectividad y mortalidad del COVID19, el impacto del distanciamiento social y, de manera muy importante, el rezago en la información entre el número real de infectados y el número de casos confirmados. En este ejercicio de modelación se integran además los datos de población ocupada total y producción bruta total de los censos económicos 2014 (último disponible con el nivel de desagregación requerido para el análisis), así como de la población estatal de la encuesta intercensal 2015 y el tamaño de empresas del Directorio Estadístico Nacional de Unidades Económicas (DENUE) de 2019. El modelo utilizado para el análisis todavía está en desarrollo y requiere refinamientos en relación a los efectos de externalidades geográficas, elasticidades de sustitución e impactos de la política de confinamiento.</p>
				<div className={classes.buttonPlace}>
					<Button  className={classes.button} color="inherit">Gráfica<LaunchIcon className={classes.icon}/></Button>
				</div>
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

	chart: {
		height: '600px',
		width: '100%',
	},

	button: {
		borderRadius: '0px',
		justifyContent: 'end'
	},

	buttonPlace: {
		color: 'black',
		minHeight: '40px',
		textAlign: 'right'
	},

	icon: {
		marginLeft: '5px'
	},

	selector: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	},

	chipContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: '5px',
		},
	},
		
	chartatyle: {
		paddingLeft: '50px',
		paddingRight: '60px',
		paddingBottom: '50px'
	},

  	[`@media (max-width: ${1000}px)`]: {
		
 	},
});

export default withStyles(styles)(SimulationUncertainty);