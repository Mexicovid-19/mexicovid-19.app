import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';
import { MapContext } from '../../contexts/MapContext';
import Typography from '@material-ui/core/Typography';

const MunicipalityData = ( props ) => {
    const { classes, state, mun} = props;
    console.log(mun)
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <Typography className={classes.state} align={'center'}>
                    {state.nombre} /
                </Typography>
                <Typography className={classes.population} align={'center'} variant={'span'}>
                    200,000 habitantes
                </Typography>
            </div>
            {/* chart*/}
            <div className={classes.pruebasIndice}>
                <div className={classes.box}>
                    <Typography align={'center'} variant={'span'}>
                        10,500 
                    </Typography>
                    <Typography className={classes.boxText} align={'center'} variant={'span'}>
                        Pruebas
                    </Typography>
                </div>
                {/*<div className={classes.box}>
                    <Typography align={'center'} variant={'span'}>
                        ALTA
                    </Typography>
                    <Typography className={classes.boxText} align={'center'} variant={'span'}>
                        Indice de 
                        <br/>
                        Vulnerabilidad
                    </Typography>
                </div>*/}
            </div>
        </div>
    )
}

const styles = () => ({
    container: {
        margin: '8px',
        color: colors.WHITE
    },
    title: {
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'baseline',
    },
    state: {
        fontSize: '24px',
    },
    box: {
        textAlign: 'center',
        border: `5px solid ${colors.RED_LIGHTER}`,
        backgroundColor: colors.RED_LIGHT,
        borderRadius: '10px',
        borderStyle: 'solid',
        fontWeight: 'bold',
        width: 'fit-content',
        fontSize: '18px',
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        color: colors.BLACK
    },
    boxText: {
        fontSize: '12px'
    },
    pruebasIndice: {
        display: 'flex',
        flexDirection: 'row'
    }
});
   
export default withStyles(styles)(MunicipalityData);