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

const family = 'Rubik';

const useStyles = makeStyles(() => ({
  card: {
    borderColor: 'white',
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
    marginBottom: 20,
    marginRight: 20,
    },
  img: {
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

export const  Aguascalientes = React.memo(function Aguascalientes() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/9/93/Aguascalientes_con_vista_al_poniente.jpg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Aguascalientes </InfoTitle>
            </Info>
        </Card>
      </>
    );
  });

  export const  BajaCalifornia = React.memo(function BajaCalifornia() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/6/6a/Sun_Up_at_Gonsaga_Bay%2C_Baja_California%2C_Mexico_-_panoramio.jpg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Baja California </InfoTitle>
            </Info>
        </Card>
      </>
    );
  });

  export const  BajaCaliforniaSur = React.memo(function BajaCaliforniaSur() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Postcard_From_Cabo_San_Lucas_%2856014870%29.jpeg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Baja California Sur </InfoTitle>
            </Info>
        </Card>
      </>
    );
  });

  export const  Campeche = React.memo(function Campeche() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/7/74/Atardecer_en_la_Torre_del_Fuerte_San_Jos%C3%A9_el_Alto.jpg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Campeche </InfoTitle>
            </Info>
        </Card>
      </>
    );
  });

  export const  Coahuila = React.memo(function Coahuila() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/6/66/Vista_panoramica_centro_mva.jpg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Coahuila </InfoTitle>
            </Info>
        </Card>
      </>
    );
  });

  export const  Colima = React.memo(function Colima() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/7/79/Kiosco_de_Colima_-_panoramio.jpg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Colima </InfoTitle>
            </Info>
        </Card>
      </>
    );
  });  
  export const  Chiapas = React.memo(function Chiapas() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/d/dd/DSC_7701_CHIFLON_MI_AMOR.jpg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Chiapas </InfoTitle>
            </Info>
        </Card>
      </>
    );
  });  
  export const  Chihuahua = React.memo(function Chihuahua() {
    const styles = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
        </NoSsr>
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardMedia
              classes={mediaStyles}
              image={
                  'https://upload.wikimedia.org/wikipedia/commons/6/6e/Wulfenite_mexique.jpg'
              }/>                            
           <Info useStyles={useOfferInfoStyles}>
              <InfoTitle> Chihuahua </InfoTitle>
            </Info>
        </Card>
      </>
    );
  }); 

export const  CDMX = React.memo(function CDMX() {
  const styles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
      </NoSsr>
      <Card className={cx(styles.card, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={
                'https://realestatemarket.com.mx/images/2020/03-Marzo/2503/torizan_17_proyectos_inmobiliarios_en_Paseo_de_la_Reforma___.jpg'
            }/>                            
         <Info useStyles={useOfferInfoStyles}>
            <InfoTitle> Ciudad de México </InfoTitle>
          </Info>
      </Card>
    </>
  );
});