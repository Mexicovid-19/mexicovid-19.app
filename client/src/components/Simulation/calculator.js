import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';

const CalculatorSimulation = ({ classes }) => {
    document.title = "Prospectiva | MexiCOVID";

    return (
        
    );
}

const styles = () => ({
    h2: {
        fontSize: '24px',
        marginBottom: '10px',
        marginTop: '10px',
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
        height: '600px',
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

    selector: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
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

    textcontainer: {
        textAlign: 'justify',
    },

    writterscontainer: {
        fontSize: '10px',
        width: '90%',
        alignSelf: 'flex-end',
        lineHeight: '16px !important',
    },


    bottominfocontainer: {
        display: 'flex',
        marginTop: '50px',
    },

    twitterclass: {
        fontWeight: '700',
        fontSize: '10px'
    },

    [`@media (max-width: ${1000}px)`]: {

    },
});

export default withStyles(styles)(SimulationUncertainty);