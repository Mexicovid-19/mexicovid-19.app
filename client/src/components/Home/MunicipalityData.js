import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';
import { MapContext } from '../../contexts/MapContext';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import Typography from '@material-ui/core/Typography';
import { numberWithCommas } from '../../Utils/numberWCommas';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const StateData = ( props ) => {
    const { classes, state, selectedLabel } = props;
    return (
        <React.Fragment>
        <div className={classes.casosContainer}>
            <div className={classes.casosTotales}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={selectedLabel == "confirmados" ? classes.dotConfirm : classes.dotDeads}/>
                    {numberWithCommas(state.totales) + " "}
                    - Totales
                </Typography>
            </div>
            <div className={classes.casosNuevos}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={selectedLabel == "confirmados" ? classes.dotConfirm : classes.dotDeads}/>
                    {numberWithCommas(state.nuevos) + " "}
                    - Nuevos
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    {numberWithCommas(state.pruebas)}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Pruebas
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    {numberWithCommas(state.poblacion)}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Habitantes
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    #{state.ranking}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Ranking
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={`${classes.numberBox} ${classes.iconBox}`} align={'center'}>
                    <TimelineOutlinedIcon className={classes.icons}/>
                </Typography>
                <Typography className={`${classes.boxText} ${classes.graph}`} align={'center'}>
                    Gráfica
                </Typography>
            </div>
        </div>
        </React.Fragment>
    )
}

const MunData = ( props ) => {
    const { classes, mun, selectedLabel } = props;
    
    return (
        <React.Fragment>
        <div className={classes.casosContainer}>
            <div className={classes.casosTotales}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={selectedLabel == "confirmados" ? classes.dotConfirm : classes.dotDeads}/>
                    {numberWithCommas(mun.totales) + " "}
                    - Totales
                </Typography>
            </div>
            <div className={classes.casosNuevos}>
                <Typography className={classes.casos} align={'center'}>
                    <FiberManualRecordTwoToneIcon className={selectedLabel == "confirmados" ? classes.dotConfirm : classes.dotDeads}/>
                    {numberWithCommas(mun.nuevos) + " "}
                    - Nuevos
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    {numberWithCommas(mun.pruebas)}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Pruebas
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    {mun.indice}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Vulnerabilidad
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                {numberWithCommas(mun.poblacion)}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Habitantes
                </Typography>
            </div>
        </div>
        <div className={classes.datos}>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    #{mun.rankingEstatal}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Estatal
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={classes.numberBox} align={'center'}>
                    #{mun.rankingNacional}
                </Typography>
                <Typography className={classes.boxText} align={'center'}>
                    Nacional
                </Typography>
            </div>
            <div className={classes.box}>
                <Typography className={`${classes.numberBox} ${classes.iconBox}`} align={'center'}>
                    <TimelineOutlinedIcon className={classes.icons}/>
                </Typography>
                <Typography className={`${classes.boxText} ${classes.graph}`} align={'center'}>
                    Gráfica
                </Typography>
            </div>
        </div>
        </React.Fragment>
    )
}

const MunicipalityData = ( props ) => {
    const { classes, state, mun, selectedLabel} = props;
    const {setIsMapMunicipio} = React.useContext(MapContext);

    const onClick = (event) => {
        setIsMapMunicipio(false);
    }

    
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <ArrowForwardIosRoundedIcon onClick={onClick}/>
                <Typography className={classes.state} align={'center'}>
                    {mun ? `${state.abrev} - ${mun.nombre}` : state.nombre}
                </Typography>
            </div>
            {mun ? 
                <MunData classes={classes} mun={mun} selectedLabel={selectedLabel}/>
                :
                <StateData classes={classes} state={state} selectedLabel={selectedLabel}/>
            }
        </div>
    )
}

const styles = () => ({
    numberBox: {
        fontWeight: 'bold'
    },
    container: {
        margin: '8px',
        color: colors.WHITE
    },
    title: {
        justifyContent: 'end',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    state: {
        fontSize: '24px',
        textTransform: 'capitalize'
    },
    casosContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '10px'
    }, 
    casos: {
        display: 'flex',
    },
    iconBox: {
        fontSize: '0px'
    },
    box: {
        textAlign: 'center',
        backgroundColor: colors.GRAY_BLUE,
        borderRadius: '4px',
        borderStyle: 'solid',
        fontWeight: 'bold',
        fontSize: '18px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        color: colors.BLACK,
        width: '30%',
        maxHeight: '50px'
    },
    boxText: {
        fontSize: '12px'
    },
    graph: {
        cursor: 'pointer'
    },
    datos: {
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '10px'
    },  
    dotConfirm: {
        color: colors.BLUE_LIGHT
    },

    dotDeads: {
        color: colors.RED
    }
});
   
export default withStyles(styles)(MunicipalityData);