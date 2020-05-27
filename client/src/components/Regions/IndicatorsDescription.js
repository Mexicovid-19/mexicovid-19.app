import React from 'react';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        Width: "100%",
    },
    names:{
        fontWeight:"bold !important",
    }
});

function createData(name, description) {
    return { name, description };
}
const rows = [
    createData("Paro de actividad económica  y cierre de espacios públicos","Esta sección se presentan variables relacionadas con el decreto del cierre de unidades económicas y de espacios de esparcimiento y culto tales como: cancelación de obras de la construcción públicas y privadas, cierre de maquilas, comercio al por mayor como centros comerciales y tiendas departamentales, así como cierre del comercio minorista, cierre de bancos, de cafés, restaurantes e iglesias.Esta dimensión también comprende una variable sobre la existencia de un calendario para retomar labores en las maquilas en caso de haber suspendido labores."),
    createData("Cierre obligatorio de oficinas gubernamentales","Esta sección se presentan variables relacionadas con el decreto del cierre de oficinas gubernamentales estatales y municipales"),
    createData("Acciones de la sociedad para evitar la propagación de la pandemia","Este apartado engloba variables relacionadas con iniciativas por parte de la sociedad, que sin decreto oficial se emprendieron para evitar la propagación de la pandemia, tales como: cierres de maquila e industrias de la transformación, de sucursales bancarias, de obras de construcción; bloqueos de acceso a automóviles de fuera e instalación de retenes para vigilar la entrada y salida de las comunidades; así como realización de sanitización en mercados y / o centrales de abasto"),
    createData("Violencia interpersonal y sanciones a agresiones e incumplimiento de confinamiento","En esta sección se presentan variables relacionadas con presencia de agresiones hacia personas diagnosticadas con COVID - 19, personal de seguridad en hospitales y violencia familiar.Asi como variables relacionados con multas por incumplir el confinamiento en hogares y agreder al personal de salud."),
    createData("Violencia en espacios públicos y acciones de gobierno para cuidar el orden","En esta sección se presentan acciones de las autoridades de seguridad pública para cuidar el orden público, tales como patrullajes para evitar concentraciones en espacios públicos como playas, parques y plazas, operativos y patrullajes para alentar a las personas a regresar a sus casas y para evitar saqueos en tiendas y centros comerciales.Asi como variables que destacan la presencia de eventos de violencia social como hostilidad hacia personal de la salud y saqueos a comercios y centros comerciales."),
    createData("Declaratorias de crítica hacia políticas federales y actos de corrupción","En esta sección se representan variables relacionadas con el reporte de declaraciones públicas por algunos gobernadores criticando a las políticas federales respecto al número de pruebas de COVID19, asi como el equipamiento de hospitales; contiene informacion sobre la manifestación de desconfianza por parte de las autoridades estatales respecto a las cifras oficiales y  se considera si en la entidad se ha desarrollado una aplicación móvil para consultar el número de casos y si, además, da a conocer datos de contagios confirmados con pruebas de laboratorios privados."),
    createData("Herramientas estatales de transparencia y comunicación sobre la evolución de la pandemia","En este apartado se muestran variables que indican acciones de los gobiernos estatales para llevar su propio conteo de casos, por ejemplo: se reporta si el estado tiene línea telefónica para consulta de síntomas de la COVID19, si se dedica una conferencia de prensa diaria para actualizar cifras de confirmados, si el estado pública sus cifras de fuentes propias y, además, se considera la existencia de casos de corrupción respecto a compras de materiales vinculados a la pandemia."),
    createData("Saturación de hospitales, falta de personal médico y equipamiento","En esta sección se representan variables relacionadas con escases de recursos físicos y humanos para la atención de la covid - 19 tales como: falta de equipamiento especializado(respiradores y camas de cuidados intensivos), falta de material médico(batas y cubrebocas), saturación de hospitales a cargo de la entidad federativa y falta de personal médico como especialistas e intensivistas."),
    createData("Acciones de apoyo a población vulnerable o personal médico afectados por la pandemia","En esta sección se representan variables relacionadas con acciones de apoyo por universidades y asociaciones civiles para la donación de equipo médico; disponibilidad de servicio de resguardo y hospedaje al personal médico; apoyo del estado a los adultos mayores para hacer sus compras; así como la existencia de una línea telefónica de atención psicológica para manejar el estrés derivado de la COVID - 19."),
    createData("Estrategias del estado para la detección, gestión y prevención del coronavirus COVID - 19","En esta sección se representan variables relacionadas con las estrategias de detección como llamadas telefónicas a los hogares para identificar casos sospechos o aplicación de pruebas; acciones de gestión por ejemplo superficies  reconvertidas a hospitales(hoteles, estacionamientos y centros de convenciones), donaciones de plasma, iniciativas de colaboración entre hospitales públicos y privados y provisión de material de protección individual y equipamiento.También se incluye variables preventivas como el decreto de uso de cobrebocas de manera obligatoria y planes para regular la presencia de migrantes en albergues."),
    createData("Preparación de hospitales y provisión de recursos públicos y privados para hacer frente a la COVID - 19","En esta sección se representan variables relacionadas con iniciativas para hacer frente a la pandemia, tales como: donaciones de material hospitalario por parte de empresarios; selección de hospitales públicos para la atención de enfermos por COVID - 19, habilitación de hospitales para atender exclusivamente a estos enfermos y recursos provistos por el estado para la compra de maaterial y equipo médico."),
    createData("Apoyos de los gobiernos locales a las familias para aminorar las afectaciones económicas","En este apartado se incluyen variables relacionadas con el apoyo que han brindado los gobiernos municipales o estatates a la economía de las familias a través de la reducción de tárifas de luz, condonación de predial y servicio de agua potable; repartición de despensas por motivo de la COVID - 19 y apoyo directo a hogares donde hay personas que han perdido su empleo."),
    createData("Endeudamiento y apoyos económicos","En esta sección  se presentan variables respecto a las medidas económicas de endeudamiento que algunos gobiernos estatales han tenido que accionar para financiar el gasto durante la crisis derivada de la pandemia, a las familias, bindandoles apoyos para resarcir el desempleo y sugragar gastos funerarios; al sector salud, para la adquisición de equipo médico y a las empresas para impulsar planes de rescate o ayuda al comercio minorista y restaurantes."),
    createData("Conflictos presupuestales generados a partir de la pandemia","En esta sección se presentan variables respecto a conflictos presupuestales tales como el llamado de los empresarios a no pagar impuestos a la federación, llamado de los estados  para que  incrementen los recursos económicos  necesarios para continuar con la red de apoyo  como ayuda a hogares que no pueden pagar la renta o recursos de apoyo a pymes.")

];
const IndicatorsDescription = () => {
    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow className={classes.names}>
                            <StyledTableCell align="center" style={{ fontWeight: "bold" }}><strong>Titulo indicador</strong></StyledTableCell>
                            <StyledTableCell align="center" style={{ fontWeight: "bold" }}><strong>Descripción</strong></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" className={classes.names}>
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default IndicatorsDescription;