import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import Button from '@material-ui/core/Button';
import { RegionContext } from '../../contexts/RegionContext';
import LaunchIcon from '@material-ui/icons/Launch';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import MasterDetailView from "../MasterDetailView";

import {
	MapRoundedIcon,
	AccessAlarmRoundedIcon,
	ArrowBackIosOutlined,
	ArrowBack
} from '@material-ui/icons'

const top100Films = [
	{ title: 'Aguascalientes', id: 'AGS' }
  ];

const Municipalities = ({ classes }) => {
	const {dataChart} = React.useContext(RegionContext)
	let location = window.location.pathname;
	document.title = "Seguimiento por municipio | MexiCOVID";
	const [view, setView] = React.useState(0);
	const {isState, changeState} = React.useContext(RegionContext);
	const [sidebarVisible, setSidebarVisible] = React.useState(true);
	const isMobile = window.innerWidth < 1000;
	const title = `Seguimiento por ${isState ? 'Estado' : 'Municipio'}`;
	const subtitle = !isState ? 'Estado' : 'Municipio';
	const sections = [
		{
			title: 'Seguimiento al COVID-19 en Municipios',
			subtitle: 'Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel municipal, y permite tener un seguimiento mediante la evolución a lo largo del tiempo.',
			description: '', 
			render: ()=>(<iframe src="https://public.tableau.com/views/mexicovid19_municipal/Mapamunicipal?:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link" className={classes.graphContainer}></iframe>)
		},
		{
			title: 'Distribución geográfica de pacientes diagosticados con Covid-19',
			subtitle: 'La visualización presenta los rangos de edades en los que se ubican los casos confirmados acumulados de COVID-19 por estado y fecha. Con base en los Comunicados Técnicos diarios del Gobierno Federal, el objetivo de esta visualización es identificar la población que está siendo más susceptible al contagio por entidad federativa.',
			description: '',
			render: ()=>( <iframe src="./distributionestate" className={classes.graphContainer}></iframe> ) 
		}
	]

	return (
		<MasterDetailView
			sections={sections}
			sidebarHeader={
				<header id="header" className={classes.header}>
					<Typography className={classes.h1} variant={'h1'}> {title} </Typography>	
					<Button className={classes.label} onClick={changeState}> 
						{subtitle} <ArrowForwardIosRoundedIcon/>
					</Button>
				</header>
			}
		></MasterDetailView>
	);
}

const styles = () => ({
	container: {
		display: 'flex', width: '100%', background: 'blue', height: '100%', overflow: 'hidden'
	},
	sidebar: {
		padding: '16px',
		background: colors.WHITE,
		height: '100%',
		width: '500px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		overflow: 'auto',
		zIndex: 10,
		"& > *": {
			flexShrink: 0
		},
		flexShrink: 0,
		boxSizing: 'border-box'
	},
	sidebarHeader: {
		borderBottom: `1px solid ${colors.BLACK}`,
		display: 'flex',
    	alignItems: 'baseline',
		justifyContent: 'space-between',
		maxWidth: '900px',
		justifySelf: 'flex-start'
	},
	
	h1: {
		fontSize: '36px'
	},

	h2: {
		fontSize: '24px',
		marginBottom: '8px',
		marginTop: '8px',
		fontWeight: 'bold'
	},

	section: {
		margin: '20px 0px',
    	borderRadius: '5px',
    	padding: '20px',
		backgroundColor: colors.GRAY,
		display: 'flex', 
		flexDirection: 'column',
		borderStyle: 'solid', 
		borderWidth: 2,
		borderColor: 'transparent'
	},

	content: {
		flex: 1, 
		backgroundColor: 'white',
		padding: '16px',
		width: '100%',
		flex: 1,
		height: '100%',
		display: 'flex', 
		flexDirection: 'column',
		position: 'relative',
		overflow: 'auto'
	}, 

	graphContainer: {
		width: '100%',
		flex: 1,
	},

	backIcon: {
		height: '40px',
		width: '40px'
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

	

	chart: {
		height: '100%',
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

	selector: {
		display: 'flex',
		alignItems: 'normal',
		flexDirection: 'column'
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
		textAlign:'justify'
	},

	textcontainer1:{
		textAlign:'justify',
		margin: '4px 0px'
	},
	selectorContainer: {
		display: 'flex'
	},
	

	[`@media (max-width: ${1000}px)`]: {
		
		
		sidebar: {
			position: 'fixed',
			width: '100%',
			top: '64px',
			bottom: 0
		}, 
		
		
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
		
		selector:{
			flexDirection: 'column'
		},
		graphContainer: {
			padding: '5px'
		},
		selectorContainer: {
			flexDirection: 'column'
		},
		heat:{
			height: '300px'
		},
		tabsContainer:{
			backgroundColor:'white'
		}
	},
	
});

export default withStyles(styles)(Municipalities);
