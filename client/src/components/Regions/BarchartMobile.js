import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';
import MyResponsiveLine from './LineChart';
import { IndicatorContext } from '../../contexts/IndicatorContext';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import Loader from '../Loaders/';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ResponsiveBar } from '@nivo/bar'
import Grid from '@material-ui/core/Grid';
import { RegionContext } from '../../contexts/RegionContext';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarchartMobile = ({ classes }) => {
    const { indicatorsData } = React.useContext(IndicatorContext);

    const [age, setAge, stateValue] = React.useState('');

    const {
        states,
    } = React.useContext(RegionContext);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={{ height: 1000, width: '100%' }}>
            <ResponsiveBar
                data={indicatorsData}
                layout="horizontal"
                keys={[
                    "Paro de actividad económica  y cierre de espacios públicos",
                    "Cierre obligatorio de oficinas gubernamentales",
                    "Acciones de la sociedad para evitar la propagación de la pandemia",
                    "Violencia interpersonal y sanciones a agresiones e incumplimiento de confinamiento",
                    "Violencia en espacios públicos y acciones de gobierno para cuidar el orden",
                    "Declaratorias de crítica hacia políticas federales y actos de corrupción",
                    "Herramientas estatales de transparencia y comunicación sobre la evolución de la pandemia",
                    "Saturación de hospitales, falta de personal médico y equipamiento",
                    "Acciones de apoyo a población vulnerable o personal médico afectados por la pandemia",
                    "Estrategias del estado para la detección, gestión y prevención del coronavirus COVID - 19",
                    "Preparación de hospitales y provisión de recursos públicos y privados para hacer frente a la COVID - 19",
                    "Apoyos de los gobiernos locales a las familias para aminorar las afectaciones económicas",
                    "Endeudamiento y apoyos económicos",
                    "Conflictos presupuestales generados a partir de la pandemia",

                ]}
                indexBy="estado"
                margin={{ top: 0, right: 0, bottom: 300, left: 60 }}
                padding={0.3}
                groupMode="stacked"
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Conjunto de indicadores',
                    legendPosition: 'middle',
                    legendOffset: 40,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Estados',
                    legendPosition: 'middle',
                    legendOffset: -50
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: false,
                        translateX: -60,
                        translateY: 380,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 10,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
}

export default BarchartMobile;