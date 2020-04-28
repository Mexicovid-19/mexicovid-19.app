import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MapIcon from '@material-ui/icons/Map';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import * as colors from '../../constants/colors';
import { HomeContext } from '../../contexts/HomeContext';
import ButtonControl from './ButtonControl';
import Map from './Map';
import Header from '../Header';
import EnhacedTable from './Table';

const Home = ({ classes }) => {
  const { 
    onSelectLabel, 
    selectedLabel,
    isMap,
    onChangeTab,
    state } = React.useContext(HomeContext);
    
    const isMobile = window.innerWidth < 1000;
    
  return (
    <div className={classes.container}>
      <Header/>
      <div className={classes.buttonControl}>
        <ButtonControl onSelectLabel={onSelectLabel} selectedLabel={selectedLabel}/>
        <Typography className={classes.text}> {state.date} </Typography>
        <ExpandMoreIcon className={classes.expandIcon} />
      </div>
      <div className={classes.Mapcontainer}>
        <Map/>
        {(!isMobile || !isMap) && <EnhacedTable/>}
      </div>
      <div className={classes.bottomButtons}>
        <Button className={isMap ? classes.btn : classes.selected} color="inherit" onClick={() => onChangeTab(false)}><TimelineOutlinedIcon className={classes.icons}/>Gráfica</Button>	
        <Button className={isMap ? classes.selected : classes.btn} color="inherit" onClick={() => onChangeTab(true)}><MapIcon className={classes.icons}/>Mapa</Button>	
      </div>
    </div>
  );
}

const styles = () => ({
  container: {
    width: '100%'
  },

  Mapcontainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  bottomButtons: {
    display: 'none'
  },

  buttonControl: {
    display: 'none'
  },

  [`@media (max-width: ${1000}px)`]: {
    bottomButtons: {
      position: 'fixed',
      backgroundColor: colors.BLACK,
      display: 'flex',
      bottom: 0,
      width: '100%',
      justifyContent: 'space-around',
      padding: '5px 0px',
    },
    btn: {
      color: colors.WHITE,
      backgroundColor: colors.BLACK,
      width: '100%',
    },
    selected: {
      width: '100%',
      backgroundColor: colors.WHITE,
      color: colors.BLACK,
      '&:focus': {
        backgroundColor: colors.WHITE,
        color: colors.BLACK,
      }
    },
    buttonControl: {
      display: 'flex',
      color: colors.WHITE,
      background: colors.BLACK,
      padding: '5px',
      justifyContent: 'space-around'
    },
    expandIcon: {
      color: colors.WHITE
    }
  }
});

export default withStyles(styles)(Home);