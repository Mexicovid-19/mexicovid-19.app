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
    //console.log(indicatorsData)
    return (
        <div style={{ height: 600 ,width:'100%'}}>
            {indicatorsData.length == 0 ?
                <Loader />
                :
            <ResponsiveHeatMapCanvas
                data={indicatorsData}
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
                margin={{ top: 0, right:0, bottom: 0, left: 50 }}
                pixelRatio={1}
                minValue={0.00}
                maxValue={1.00}
                forceSquare={false}
                sizeVariation={0}
                padding={1}
                colors="nivo"
                axisTop={null}
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