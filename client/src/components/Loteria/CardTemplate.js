import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 15,
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    textAlign: 'center',
    height:300,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  media: {
    height: 200,
  },
});

export function Aguascalientes() {
  const classes = useStyles();

  return (
      <CardActionArea className={classes.root}>
        <CardMedia
          component="img"
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/9/93/Aguascalientes_con_vista_al_poniente.jpg"
          title="Contemplative Reptile"
        />
        <CardContent style={{background: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Aguascalientes_con_vista_al_poniente.jpg'}}>
          <Typography gutterBottom variant="h5" component="h2">
            Aguascalientes
          </Typography>
        </CardContent>
      </CardActionArea>
  );
}

export function BajaCalifornia() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/6/6a/Sun_Up_at_Gonsaga_Bay%2C_Baja_California%2C_Mexico_-_panoramio.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Baja California
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function BajaCaliforniaSur() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Postcard_From_Cabo_San_Lucas_%2856014870%29.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Baja California Sur
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Campeche() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/7/74/Atardecer_en_la_Torre_del_Fuerte_San_Jos%C3%A9_el_Alto.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Campeche
          </Typography>         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Coahuila() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/6/66/Vista_panoramica_centro_mva.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Coahuila
          </Typography>        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Colima() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/7/79/Kiosco_de_Colima_-_panoramio.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Colima
          </Typography>        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Chiapas() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/d/dd/DSC_7701_CHIFLON_MI_AMOR.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Chiapas
          </Typography>        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Chihuahua() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/6/6e/Wulfenite_mexique.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Chihuahua
          </Typography>        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function CDMX() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://realestatemarket.com.mx/images/2020/03-Marzo/2503/torizan_17_proyectos_inmobiliarios_en_Paseo_de_la_Reforma___.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ciudad de México
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Durango() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/b/b1/Coronavirus_SVG_Vector_Image.svg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Durango
          </Typography>        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
