import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import Button from '@material-ui/core/Button';
import { RegionContext } from '../../contexts/RegionContext';
import LaunchIcon from '@material-ui/icons/Launch';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import AccessAlarmRoundedIcon from '@material-ui/icons/AccessAlarmRounded';

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
				<div className={classes.sectioncontainer}>
					<AccessAlarmRoundedIcon classes={{root: classes.iconcontainer}}/>
					<div className={classes.agesectioncontainer}>
						<p className={classes.textcontainer}>Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel municipal, y permite tener un seguimiento mediante la evolución a lo largo del tiempo.</p>
						<div className={classes.buttonPlace}>
							<Button target= "_blank" href="/municipalitiesfollow"  className={classes.button} color="inherit">Gráfica<LaunchIcon className={classes.icon}/></Button>
						</div>
					</div>
				</div>
			</section>
            <section className={classes.section}>
                <Typography className={classes.h2} variant={'h2'}>Distribución geográfica de pacientes diagosticados con Covid-19</Typography>
				<div className={classes.sectioncontainer}>
					<MapRoundedIcon classes={{root: classes.iconcontainer}}/>
					<div className={classes.agesectioncontainer}>	
						<p className={classes.textcontainer}> La visualización presenta los rangos de edades en los que se ubican los casos confirmados acumulados de COVID-19 por estado y fecha. Con base en los Comunicados Técnicos diarios del Gobierno Federal, el objetivo de esta visualización es identificar la población que está siendo más susceptible al contagio por entidad federativa.</p>
						<div className={classes.buttonPlace}>
							<Button target= "_blank" href="/distributionestate"  className={classes.button} color="inherit">Gráfica<LaunchIcon className={classes.icon}/></Button>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

const styles = () => ({
	h2: {
		fontSize: '24px',
		marginBottom: '10px',
		marginTop: '10px',
		fontWeight: 'bold'
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

	iconcontainer: {
		height: '100% !important',
		width: '15% !important',
		color: colors.BLACK,
	},

	sectioncontainer:{
		display: 'flex',
		flexDirection: 'row',
	},

	agesectioncontainer: {
		width: '100%',
		display: 'inline-grid',
		flexDirection: 'column',
	},

	textcontainer:{
		textAlign:'justify',
	},

  	[`@media (max-width: ${1000}px)`]: {
		sectioncontainer:{
			display: 'flex',
			flexDirection: 'column',
			alignItems:'center',
		},
		
		iconcontainer: {
			height: '100% !important',
			width: '50% !important',
			color: colors.BLACK,
		},
	},
	 
});

export default withStyles(styles)(Municipalities);
