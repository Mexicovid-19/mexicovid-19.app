import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import tableau from 'tableau-react';
import { Helmet } from 'react-helmet';

const ReaperturaEco = ({ classes }) => {
    const vizContainer = React.useRef(null);
    React.useEffect(() => {
        const vizUrl = "https://public.tableau.com/views/Tablerodereactivacineconmica_15898256803320/Semforodereactivacinsectorial?:increment_view_count=no&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link";
        let viz = new window.tableau.Viz(vizContainer, vizUrl);
    })
    document.title = "Reactivación económica | MexiCOVID";
    return (
        <div>
            <Helmet>
                <title>Reactivación económica | MexiCOVID</title>
                <meta name="description" content="Reactivación económica en méxico" />
                <meta name="keywords" content="reapertura economica, economia covid, mexico economia, covid peso, economia peso" />
                <meta property="og:title" content="Reapertura económica | MexiCOVID" />

            </Helmet>
            <div ref={vizContainer} className={classes.container}></div>
        </div>
    );
}

const styles = () => ({
    section: {
        margin: '20px 0px',
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: colors.GRAY,
        height: '800px'
    },

    container: {
        width: '100%',
        backgroundColor: colors.GRAY,
    },

    graphicContainer: {
        marginTop: '50px'
    },

    header: {
        borderBottom: `1px solid ${colors.BLACK}`,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },

    h1: {
        fontSize: '36px'
    },

    textclass: {
        marginTop: '0px',
        marginBottom: '0px'
    },

});

export default withStyles(styles)(ReaperturaEco);

