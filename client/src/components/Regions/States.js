import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';
import MyResponsiveLine from './LineChart';
import { RegionContext } from '../../contexts/RegionContext';
import MasterDetailView from '../MasterDetailView';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import {ArrowBack} from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import Loader from '../Loaders/';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box'; 
import IframeResizer from 'iframe-resizer-react';
import PropTypes from 'prop-types';
import Heatmap from './Heatmap';
import Barchart from './Barchart';
import BarchartMobile from './BarchartMobile';
import SwipeableViews from 'react-swipeable-views';
import IndicatorsDescription from './IndicatorsDescription';


function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #000000"
	},
	indicator: {
		backgroundColor: "#000000"
	}
})(Tabs);

const AntTab = withStyles(theme => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightBold,
		marginRight: theme.spacing(4),
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		"&:hover": {
			color: "#3e3a3a",
			opacity: 1
		},
		"&$selected": {
			color: "#000000",
			fontWeight: theme.typography.fontWeightBold
		},
		"&:focus": {
			color: "#000000"
		}
	},
	selected: {}
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	padding: {
		padding: theme.spacing(3)
	},
	demo1: {
		backgroundColor: theme.palette.background.paper
	},
	demo2: {
		backgroundColor: "#2e1534"
	}
}));

function mobileDetect() {
	// some js way to detect if user is on a mobile device
	if (window.innerWidth < 1000){
		return true
	}
	else{
		return false;
	}
}



const States = ({ classes }) => {
	const {
		selectedStates, 
		statesToChart,
		states, 
		handleClick, 
		stateValue, 
		stateChange, 
		handleDelete,
		addAll,
		deleteAll,
		isState, 
		changeState
	} = React.useContext(RegionContext);
	
	const theme = useTheme();
	  
	const isMobile = window.innerWidth < 1000;

	const [value, setValue] = React.useState(0);

	const [view, setView] = React.useState(0)
	const [sidebarVisible, setSidebarVisible] = React.useState(true);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleChangeIndex = (index) => {
		setValue(index);
	};
	const title = `Seguimiento por ${isState ? 'Estado' : 'Municipio'}`;
	const subtitle = !isState ? 'Estado' : 'Municipio';


	const sections = [
		{
			title: 'Número de Confirmados Positivos por Estado y por 100,000 Habitantes',
			subtitle: '<u>Instrucciones</u>: Se seleccionan automáticamente los cinco estados con las tasas de confirmados-positivos más altas a nivel nacional. Tú puedes interactuar con el tablero, seleccionando y deseleccionando las comparaciones entre estados que quieras realizar.',
			render: ()=>(
				selectedStates.length == 0 ? <Loader/> :
					<div className={classes.graphContainer}>
						<div className={classes.selectorContainer}>
							<div className={classes.selector}>
								<Autocomplete
									id="estados-mexico-100k"
									options={states}
									getOptionLabel={(option) => option.title}
									style={{ width: isMobile ? '100%' : '200px' }}
									inputValue={stateValue}
									onInputChange={(event, newValue) => {stateChange( newValue);}}
									renderInput={(params) => <TextField {...params} label="Estados" />}
								/>
								<Button onClick={handleClick} startIcon={<AddRoundedIcon />}>Agregar</Button>
								<Button onClick={addAll} startIcon={<AddRoundedIcon />}> Todos</Button>
								<Button onClick={deleteAll} startIcon={<DeleteIcon />}>Eliminar</Button>
							</div>
							<div className={classes.chipContainer}>
								{selectedStates.length > 0 && selectedStates.map((state, index) => (
									<Chip
										size="small"
										label={state.title}
										onDelete={(e) => {handleDelete(state.id)}}
										style={{ backgroundColor: state.id === "NACIONAL" ? colors.WHITE : state.color }}
									/>
								))}
							</div>
					</div>
						<div className={classes.chart}>
								{statesToChart && <MyResponsiveLine data={statesToChart} isSmall={isMobile} className={{root: classes.chartatyle}}/>}
						</div>
					</div>
			)
		},
		{
			title: 'Indicadores por Estado', 
			subtitle: 'Entre el 25 de marzo y el 12 de mayo un grupo de 32 estudiantes realizaron el seguimiento de medios locales y boletines oficiales de cada entidad federativa con la finalidad de monitorear eventos relacionados con: 1) medidas de aislamiento, 2) sucesos de inseguridad, 3) transparencia y comunicación, 4) salud pública y 5) economía. A partir de este seguimiento, los estudiantes contestaron un instrumento que denominamos ¿Quién es quién en los estados? El cual contiene 115 preguntas en torno a los cinco temas antes enunciados. Empleando la técnica de análisis factorial pudimos sintetizar la información mediante la obtención de 14 indicadores que se muestran en esta sección.',
			description: '<b>Nota:</b> los indicadores representan los puntajes normalizados del análisis factorial; valores cercanos a cero indican ausencia o baja representación del indicador en el estado, mientras que puntajes cercanos a uno sugieren una alta representación.',
			render: ()=>(
				<div className={classes.graphContainer}>
					<div>
						<AntTabs value={value} onChange={handleChange} aria-label="ant example">
							<AntTab label="Mapa de color" {...a11yProps(1)} />
							<AntTab label="Totales" {...a11yProps(1)}/>
							<AntTab label="Definiciones" {...a11yProps(1)} />
						</AntTabs>
					</div>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}
					>
						<TabPanel value={value} index={0} style={{backgroundColor:'white'}}>
							<Heatmap></Heatmap>
						</TabPanel>
						<TabPanel value={value} index={1} style={{backgroundColor:'white'}}>
							{mobileDetect() ? (<BarchartMobile />) : (<Barchart />)}	
						</TabPanel>
						<TabPanel value={value} index={2} style={{backgroundColor:'white'}}>
							<IndicatorsDescription></IndicatorsDescription>
						</TabPanel>
					</SwipeableViews>
				</div>
			)
		},
		{
			title: 'Disponibilidad de camas para hospitalización y en unidades de cuidado intensivo (UCI)',
			subtitle: 'Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel estatal que han requerido hospitalización, así como los casos graves que se encuentran en cuidado intensivo. Su objetivo es identificar las entidades federativas en las cuales, dada la evolución de los casos, será necesario destinar mayores recursos e infraestructura para lograr atender la demanda de atención médica. Para identificar el número y tipo de casos se utiliza la información más desagregada que el Gobierno Federal empezó a publicar a partir del 13 de abril. Respecto al número de camas a nivel estatal se utiliza la información de la Secretaría de Salud de 2018.',
			render: ()=>(
				<iframe src="./availablebeds" className={classes.graphContainer}></iframe>
			)
		},
		{
			title: 'Casos confirmados acumulados de COVID-19 por rango de edad',
			subtitle: 'Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel Estatatal.',
			render: ()=>(
				<iframe src="https://public.tableau.com/views/mexicovid19_edades/Dashboard1?:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link" className={classes.graphContainer}></iframe>
			)
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
		boxSizing: 'border-box',
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
		display: 'flex', 
		flexDirection: 'column'
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

	chartline:{
		height: '100%',
		width: 'auto'
	},

	chart: {
		height: '5px!important',
		width: '100%',
		flex: 1
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
		content: {
			padding: 0,
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

export default withStyles(styles)(States);