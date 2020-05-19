import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';
import MyResponsiveLine from './LineChart';
import { RegionContext } from '../../contexts/RegionContext';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import Loader from '../Loaders/';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box'; 
import PropTypes from 'prop-types';
import Heatmap from './Heatmap';


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
		deleteAll
	} = React.useContext(RegionContext);
	
	  
	const isMobile = window.innerWidth < 1000;

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<section className = {classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Indicadores por Estado</Typography>
				<p className={classes.textcontainer1}>Lorem ipsum dolor sit amet consectetur adipiscing elit sapien fusce aliquet himenaeos, magna natoque torquent non vestibulum fermentum risus donec ad.</p>
				<AppBar position="static">
					<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
						<Tab label="Uno" {...a11yProps(0)} />
						<Tab label="Dos" {...a11yProps(1)} />
					</Tabs>
				</AppBar>
					<TabPanel value={value} index={0}>
						<Heatmap></Heatmap>
					</TabPanel>
					<TabPanel value={value} index={1}>
						Aqui va barchar
					</TabPanel>
			</section>

			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Número de Confirmados Positivos por Estado y por 100,000 Habitantes</Typography>
				<p className={classes.textcontainer1}><u>Instrucciones</u>: Se seleccionan automáticamente los cinco estados con las tasas de confirmados-positivos más altas a nivel nacional. Tú puedes interactuar con el tablero, seleccionando y deseleccionando las comparaciones entre estados que quieras realizar.</p>
				{selectedStates.length == 0 ?
					<Loader/>	
					:
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
								{selectedStates.length > 0 &&
									selectedStates.map((state, index) => {
										return(
											<Chip
												size="small"
												label={state.title}
												onDelete={(e) => {handleDelete(state.id)}}
												style={{ backgroundColor: state.id === "NACIONAL" ? colors.WHITE : state.color }}
											/>
										)
									})
								}
							</div>
						</div>
						<div className={classes.chart}>
							{statesToChart && <MyResponsiveLine data={statesToChart} isSmall={isMobile} className={{root: classes.chartatyle}}/>}
						</div>
					</div>
				}
			</section>
			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Disponibilidad de camas para hospitalización y en unidades de cuidado intensivo (UCI)</Typography>
				<div className={classes.sectioncontainer}>
					<LocalHospitalRoundedIcon classes={{root: classes.iconcontainer}} fontSize="large"/>
					<div>
						<p className={classes.textcontainer}> Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel estatal que han requerido hospitalización, así como los casos graves que se encuentran en cuidado intensivo. Su objetivo es identificar las entidades federativas en las cuales, dada la evolución de los casos, será necesario destinar mayores recursos e infraestructura para lograr atender la demanda de atención médica. Para identificar el número y tipo de casos se utiliza la información más desagregada que el Gobierno Federal empezó a publicar a partir del 13 de abril. Respecto al número de camas a nivel estatal se utiliza la información de la Secretaría de Salud de 2018.</p>
						<div className={classes.buttonPlace}>
							<Button target= "_blank" href="/availablebeds"  className={classes.button} color="inherit">Gráfica<LaunchIcon className={classes.icon}/></Button>
						</div>
					</div>
				</div>
			</section>
			<section className={classes.section}>
				<Typography className={classes.h2} variant={'h2'}>Casos confirmados acumulados de COVID-19 por rango de edad</Typography>
				<div className={classes.sectioncontainer}>
					<SupervisedUserCircleRoundedIcon classes={{root: classes.iconcontainer}}/>
					<div className={classes.agesectioncontainer}>
						<p className={classes.textcontainer}>Mediante esta visualización se da seguimiento a la evolución del número de casos de COVID19 a nivel Estatatal.</p>
						<div className={classes.buttonPlace}>
							<Button target= "_blank" href="/confirmage"  className={classes.button} color="inherit">Gráfica<LaunchIcon className={classes.icon}/></Button>
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
		height: '500px',
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
		margin: '25px 0px'
	},
	selectorContainer: {
		display: 'flex'
	},
	graphContainer: {
		backgroundColor: colors.WHITE,
    	padding: '20px'
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
		chart: {
			height: '300px'
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
	},
	
});

export default withStyles(styles)(States);