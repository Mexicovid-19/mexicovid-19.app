import React from 'react';
import cx from 'clsx';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import { CardMedia } from '@material-ui/core';
import estados from './estados/estados.json';

const family = 'Rubik';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'white',
    width: 150,
    height: 240,
    padding:0,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent:'center',
    marginBottom: 10,
    marginTop:10,
    marginRight: 10,
    marginLeft: 10,
    },
  img: {
    border: '1px solid black',
    position: 'absolute',
  },

}));

const useOfferInfoStyles = makeStyles(() => {
  return {
    title: {
      display:'flex',
      justifyContent:'center',
      flexWrap:'wrap',
      width: '100%', 
      background:  'linear-gradient(110deg, #006847 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(110deg, #ffffff 69%, #ce1126 69%)',
      color: '#C3841F',
      textAlign: 'center',
      fontFamily: family,
      fontSize: '1rem',
      fontWeight: 700,
      position: 'absolute',
    },
    subtitle: {
      color: '#48bbb5',
      fontFamily: family,
      fontSize: '0.875rem',
      fontWeight: 900,
    },
  };
});
const estadosMexicanos= estados


export const NewCard = React.memo(function NewCard({index}) {
  var number = index;
  const styles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
  if (0<=number && number<=32){
  const estado=estadosMexicanos[number];
  console.log(estado.id)
  const backgroundEstado=estado.imagen
  const nombreEstado=estado.estado
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
      </NoSsr>
      <Card className={cx(styles.card, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={backgroundEstado}
            border= 'white'
            />                   
         <Info useStyles={useOfferInfoStyles}>
            <InfoTitle>{nombreEstado}</InfoTitle>
          </Info>
      </Card>
    </>
  );}
  else{
    return(
      <>
      </>
    );
  }
});