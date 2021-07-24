import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom';
import * as colors from '../../constants/colors';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const LinkElement = (props) => {
  const {classes, element, url} = props;

  return (
    <NavLink to={process.env.PUBLIC_URL+url} className={classes}>
      {element}
    </NavLink>
  )
}

const Header = ({ classes, fixed=false}) => {
  classes = useStyles();
  let location = window.location.pathname;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
      
  return (
    //<AppBar position={`${fixed ? 'fixed' : 'static'}`} className={classes.bar}>
    <AppBar position={'static'} className={classes.bar}>
      <Toolbar>
        <Link to={process.env.PUBLIC_URL} className={classes.name}>
          {window.innerWidth > 1000 ? <img className={classes.img} title="logo tec" src={process.env.PUBLIC_URL + '/img/Logo1.png'}/>:null}
          <button variant="raised">
            <Typography variant="h6" className={classes.title}>
              COVID-19 en México
            </Typography>
          </button>
        </Link>
        <IconButton className={classes.menuIcon} aria-label="menu" onClick={handleClick}>
          <MenuRoundedIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '100%',
              backgroundColor: colors.BLACK,
              color: colors.WHITE,
              textTransform: 'uppercase',
              border: '2px solid white',
            },
          }}
        >
          <LinkElement url='/' element={
            <MenuItem><Typography variant="span" className={classes.title}>Inicio</Typography></MenuItem>
          }/>
          <LinkElement url='/covid-19' element={
            <MenuItem><Typography variant="span" className={classes.title}>Covid19</Typography></MenuItem>
          }/>
          <LinkElement url='/elecciones' element={
            <MenuItem><Typography variant="span" className={classes.title}>Elecciones 2021</Typography></MenuItem>
          }/>
          {/* <LinkElement url='/sentiment-analysis' element={
            <MenuItem><Typography variant="span" className={classes.title}>Análisis de sentimientos</Typography></MenuItem>
          }/> */}

          {/* <LinkElement url='/research' element={
            <MenuItem><Typography variant="span" className={classes.title}>Investigación</Typography></MenuItem>
          }/>
          <LinkElement url='/regions' element={
            <MenuItem><Typography variant="span" className={classes.title}>Seguimiento por Región</Typography></MenuItem>
          }/>
          <LinkElement url='/simulation' element={
            <MenuItem><Typography variant="span" className={classes.title}>Prospectiva</Typography></MenuItem>
          }/>
          <LinkElement url='/methodology' element={
            <MenuItem><Typography variant="span" className={classes.title}>Metodología</Typography></MenuItem>
          }/> */}
          <LinkElement url='/loteria' element={
            <MenuItem><Typography variant="span" className={classes.title}>Lotería Nacional</Typography></MenuItem>
          }/>
          <LinkElement url='/about-us' element={
            <MenuItem><Typography variant="span" className={classes.title}>Nosotros</Typography></MenuItem>
          }/>
        </Menu>
        <div className={classes.buttons}>
          <LinkElement url='/' element={
            <Button className={location === '/' ? classes.selectedBtn : classes.button} color="inherit">Inicio</Button>
          }/>
          <LinkElement url='/covid-19' element={
            <Button className={location === '/covid-19' ? classes.selectedBtn : classes.button} color="inherit">Covid19</Button>
          }/>
          <LinkElement url='/elecciones' element={
            <Button className={location === '/elecciones' ? classes.selectedBtn : classes.button} color="inherit">Elecciones 2021</Button>
          }/>
          {/* <LinkElement url='/sentiment-analysis' element={
            <Button className={location === '/sentiment-analysis' ? classes.selectedBtn : classes.button} color="inherit">Análisis de sentimientos</Button>
          }/> */}
          {/* <LinkElement url='/research' element={

            <Button className={location === '/research' ? classes.selectedBtn : classes.button} color="inherit">Investigación</Button>
          }/>
          <LinkElement url='/regions' element={
            <Button className={location === '/regions' ? classes.selectedBtn : classes.button} color="inherit">Seguimiento por Regiones</Button>
          }/>
          <LinkElement url='/simulation' element={
            <Button className={location === '/simulation' ? classes.selectedBtn : classes.button} color="inherit">Prospectiva</Button>
          }/>
          <LinkElement url='/methodology' element={
            <Button className={location === '/methodology' ? classes.selectedBtn : classes.button} color="inherit">Metodología</Button>
          }/> */}
          <LinkElement url='/loteria' element={
            <Button className={location === '/loteria' ? classes.selectedBtn : classes.button} color="inherit">Lotería Nacional</Button>
          }/>
          <LinkElement url='/about-us' element={
            <Button className={location === '/about-us' ? classes.selectedBtn : classes.button} color="inherit">Nosotros</Button>
          }/>          
        </div>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

  bar: {
    backgroundColor: 'rgb(34, 35, 35)' + ' !important'
  },

  name: {
    flex: '1'
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    //flex: '2'
  },

  button: {
    marginLeft: '10px',
    '&:hover': {
      borderBottom: '1px solid',
      borderRadius: '0px',
      
    }
  },

  selectedBtn: {
    borderBottom: '1px solid',
    borderRadius: '0px',
  },

  img: {
    maxWidth: '100px',
    verticalAlign: 'top',
    marginRight: '10px',
  },

  menuIcon: {
    display: 'none'
  },

  [`@media (max-width: ${999}px)`]: {
    buttons: {
      display: 'none'
    },

    menuIcon: {
      display: 'flex',
      color: colors.WHITE
    },

    img: {
      maxWidth: '0px',
    },
  },

  [`@media (max-width: ${600}px)`]: {
    
  }
}));

export default Header;