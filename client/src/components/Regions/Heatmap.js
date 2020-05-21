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

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { ResponsiveHeatMap } from '@nivo/heatmap'


const Heatmap = ({ classes }) => {
    const { indicatorsData } = React.useContext(IndicatorContext);
    console.log(indicatorsData)
    return (
        <div>
            <ResponsiveHeatMap
                data={'data'}
                keys={[
                    'n_f1_aislamiento',
                    'n_f2_aislamiento',
                    'n_f1b_aislamiento',
                    'n_f1_seguridad',
                    'n_f2_seguridad',
                    'n_f2_transparenciaNL911',
                    'n_f1_transparenciaNL911',
                    'n_f1_salud',
                    'n_f2_salud',
                    'n_f3_salud',
                    'n_f4_salud',
                    'n_f1_economia',
                    'n_f2_economia',
                    'n_f3_economia'
                ]}
                indexBy="indicadores"
                margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
                forceSquare={true}
                axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                cellOpacity={1}
                cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(0, 0, 0, 0.1)',
                        rotation: -45,
                        lineWidth: 4,
                        spacing: 7
                    }
                ]}
                fill={[{ id: 'lines' }]}
                animate={true}
                motionStiffness={80}
                motionDamping={9}
                hoverTarget="cell"
                cellHoverOthersOpacity={0.25}
            />
        </div>
    );
}

export default Heatmap;