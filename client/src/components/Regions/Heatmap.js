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
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'


const Heatmap = ({ classes }) => {
    const { indicatorsData } = React.useContext(IndicatorContext);
    console.log(indicatorsData)
    return (
        <div style={{ height: 600 ,width:'100%'}}>
            {indicatorsData.length == 0 ?
                <Loader />
                :
            <ResponsiveHeatMapCanvas
                data={indicatorsData}
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
                margin={{ top: 170, right:0, bottom: 0, left: 60 }}
                pixelRatio={1}
                minValue={0.00}
                maxValue={1.00}
                forceSquare={false}
                sizeVariation={0}
                padding={1}
                colors="nivo"
                axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
                axisRight={null}
                axisBottom={null}
                enableGridX={false}
                enableGridY={true}
                cellShape="rect"
                cellOpacity={1}
                cellBorderWidth={0}
                cellBorderColor={{ from: 'color', modifiers: [['darker', '0.6']] }}
                enableLabels={false}
                labelTextColor={{ from: 'color', modifiers: [['darker', '1.2']] }}
                animate={true}
                motionStiffness={120}
                motionDamping={9}
                isInteractive={true}
                hoverTarget="rowColumn"
                cellHoverOpacity={1}
                cellHoverOthersOpacity={0.5}
            />
            }</div>
    );
}

export default Heatmap;