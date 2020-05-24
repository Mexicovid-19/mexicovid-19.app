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
        <div style={{ height: 960, width: '100%' }}>
            <ResponsiveBar
                data={indicatorsData}
                layout="horizontal"
                keys={[
                    "N_F1_AISLAMIENTO",
                    "N_F2_AISLAMIENTO",
                    "N_F1B_AISLAMIENTO",
                    "N_F1_SEGURIDAD",
                    "N_F2_SEGURIDAD",
                    "N_F2_TRANSPARENCIANL911",
                    "N_F1_TRANSPARENCIANL911",
                    "N_F1_SALUD",
                    "N_F2_SALUD",
                    "N_F3_SALUD",
                    "N_F4_SALUD",
                    "N_F1_ECONOMIA",
                    "N_F2_ECONOMIA",
                    "N_F3_ECONOMIA",

                ]}
                indexBy="estado"
                margin={{ top: 300, right: 0, bottom: 100, left: 60 }}
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
                    tickRotation: -90,
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
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 90,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 15,
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
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'top-left',
                        direction: 'column',
                        justify: false,
                        translateX: -60,
                        translateY: -300,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemsSpacing: 0,
                        symbolSize: 14,
                        itemDirection: 'left-to-right'
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