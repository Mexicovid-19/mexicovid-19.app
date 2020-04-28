import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { RegionContext } from '../../contexts/RegionContext';

const top100Films = [
	{ title: 'Aguascalientes', id: 'AGS' }
  ];

const Municipalities = ({ classes }) => {
	const {dataChart} = React.useContext(RegionContext)
	let location = window.location.pathname;
	
	return (
		<React.Fragment>
            <section className={classes.section}>
                <Typography className={classes.h2} variant={'h2'}>Seguimiento al COVID-19 en Municipios</Typography>
                <p>Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel municipal, y permite tener un seguimiento mediante la evolución a lo largo del tiempo.</p>
                <Button target= "_blank" href="/municipalitiesfollow"  className={classes.button} color="inherit">Abrir grafica <ArrowForwardIcon/></Button>
            </section>
            <section className={classes.section}>
                <Typography className={classes.h2} variant={'h2'}>Distribución geográfica de pacientes diagosticados con Covid-19</Typography>
                <p> La visualización presenta los rangos de edades en los que se ubican los casos confirmados acumulados de COVID-19 por estado y fecha. Con base en los Comunicados Técnicos diarios del Gobierno Federal, el objetivo de esta visualización es identificar la población que está siendo más susceptible al contagio por entidad federativa.</p>
                <Button target= "_blank" href="/distributionestate"  className={classes.button} color="inherit">Abrir grafica <ArrowForwardIcon/></Button>
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
		height: '800px',
		width: '100%',
	},

	button: {
		'&:hover': {
		borderBottom: '1px solid',
		borderRadius: '0px',
		}
	},

  	[`@media (max-width: ${1000}px)`]: {
		
 	},
});

export default withStyles(styles)(Municipalities);
