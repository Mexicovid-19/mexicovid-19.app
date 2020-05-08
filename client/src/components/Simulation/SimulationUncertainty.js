import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';

const SimulationUncertainty = ({ classes }) => {
	document.title = "Simulaciones | MexiCOVID";
	
	return (
		<React.Fragment>
			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Edmundo Molina, Fernando Gómez y Luis Serra</Typography>
				<p className={classes.textcontainer}>Este modelo de difusión de COVID19 constituye una versión modificada del modelo SIR. Considera parámetros sobre la infectividad y mortalidad del COVID19, el impacto del distanciamiento social y, de manera muy importante, el rezago en la información entre el número real de infectados y el número de casos confirmados. En este ejercicio de modelación se integran además los datos de población ocupada total y producción bruta total de los censos económicos 2014 (último disponible con el nivel de desagregación requerido para el análisis), así como de la población estatal de la encuesta intercensal 2015 y el tamaño de empresas del Directorio Estadístico Nacional de Unidades Económicas (DENUE) de 2019. El modelo utilizado para el análisis todavía está en desarrollo y requiere refinamientos en relación a los efectos de externalidades geográficas, elasticidades de sustitución e impactos de la política de confinamiento.</p>
				<section className={classes.bottominfocontainer} >
					<div className={classes.writterscontainer}>
						<p className={classes.textcontainer}>Edmundo Molina, doctor en análisis de sistemas y política pública por la Pardee RAND Graduate School<a href="https://twitter.com/EdmundoMolinaMx" target="_blank" className={classes.twitterclass}> @EdmundoMolinaMx</a></p>
						<p className={classes.textcontainer}>Fernando Gómez, doctor en políticas públicas por la Escuela de Gobierno y Transformación Pública del Tecnológico de Monterrey <a href="https://twitter.com/fgmzz" target="_blank" className={classes.twitterclass}> @fgmzz</a></p>
						<p className={classes.textcontainer}>Luis Serra, doctor en economía por la Universidad de Warwick <a href="https://twitter.com" target="_blank" className={classes.twitterclass}> @luisserra23</a></p>
						<p className={classes.textcontainer}>Profesores-investigadores en la Escuela de Gobierno y Transformación Pública del Tecnológico de Monterrey.</p>
					</div>
					<div className={classes.buttonPlace}>
						<Button  target= "_blank" href="/uncertainty" className={classes.button} color="inherit">Gráfica<LaunchIcon className={classes.icon}/></Button>
					</div>
				</section>
			</section>
		</React.Fragment>
	);
}

const styles = () => ({
	h2: {
		fontSize: '24px',
		marginBottom: '10px',
		marginTop: '10px',
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
		textAlign: 'right',
		alignSelf: 'flex-end',
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

	textcontainer:{
		textAlign:'justify',
	},

	writterscontainer:{
		fontSize:'10px',
		width: '90%',
		alignSelf: 'flex-end',
		lineHeight: '16px !important',
	},


	bottominfocontainer:{
		display: 'flex',
		marginTop: '50px',
	},

	twitterclass:{
		fontWeight: '700',
		fontSize:'10px'
	},

  	[`@media (max-width: ${1000}px)`]: {
		
 	},
});

export default withStyles(styles)(SimulationUncertainty);