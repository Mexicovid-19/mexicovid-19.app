import React from 'react'

import Header from '../Header'

import * as colors from '../../constants/colors';

import { makeStyles } from '@material-ui/core/styles';

import MediaCard from './CardTemplate';

function index() {
    return (
        <>
        <Header></Header>
        <MediaCard></MediaCard>
        </>
    )
}
const styles = () => ({
    /* Desktop */
    itemsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: 'auto',
    },
   
    outerChartContainer: {
      paddingTop: '30px',
      borderLeft:  '1px solid white',
      borderBottom:  '1px solid white',
      borderRight:  '1px solid white',
    },
    chartContainer: {
      height: '600px',
      minHeight: '600px',
      width: '50vw',
      flex: 1,
      margin: 'auto',
      padding: '50px',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.WHITE
    },
    subtitle2: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.WHITE
      },
    chartTitle:{
      fontSize: '20px',
      textAlign: 'center'
    },
    error: {
      color: colors.WHITE,
      textAlign: 'center',
      position: 'relative',
      top: '100px',
      fontSize: '30px'
  },
  
  
    /* Mobile */
    [`@media (max-width: ${1000}px)`]: {
      itemsContainer: {
          display: 'block',
          margin: 'auto',
      },
      map: {
          minHeight: '400px',
          height: '400px',
          width: '100vw',
      },
      outerChartContainer: {
          paddingTop: '30px',
          borderLeft:  '1px solid white',
          borderBottom:  '1px solid white',
          borderRight:  '1px solid white',
      },
      chartContainer: {
          height: '500px',
          width: '100vw',
          flex: 1,
          margin: 'auto',
          padding: '0px',
          paddingBottom: '100px'
      },
      subtitle: {
        fontSize: 20,
      },
    }
    
  });
export default index