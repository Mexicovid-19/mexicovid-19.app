import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../Header';
import Footer from '../Footer';
import * as colors from '../../constants/colors';

const Methodology = ({ classes }) => {
  
  return (
    <div className={classes.container}>
      <Header fixed={true}/>
      <main className={classes.MethologyContainer}>
        <header className={classes.header}>
          <Typography className={classes.h1} variant={'h1'}>Metodología</Typography>	
        </header>
          <navbar className={classes.navbar}>
            <Button className={classes.label} href="#info">Fuente de Información</Button>	
            <Button className={classes.label} href="#data">Metodología de Visualización de Datos</Button>
            <Button className={classes.label} href="#politic">Política de Divulgación de Información</Button>
          </navbar>
        <section id="info" className={`${classes.row} ${classes.topSection}`}>
            <div className={classes.title}>Fuente de Información</div>
            <div className={classes.content}>
                El mapa coroplético de número de contagios, la gráfica de líneas de número de contagios en el tiempo y la tabla por estados proceden de los reportes diarios que realiza la Secretaría de Salud en la conferencia de prensa otorgada a las 7 pm. Los reportes diarios pueden ser descargados de la siguiente liga oficial mantenida por la autoridad federal: Coronavirus (Covid-19) Comunicado Técnico Diario . Los datos aportados por la Secretaria de Salud se reportan en un formato .pdf; uno para casos sospechosos y otro para confirmados. Los archivos reportan cada caso individual y el estado donde ocurrió. Nuestro equipo procesa en el software estadístico R la reconfiguración de estos archivos en una base estatal. La base mencionada se puede descargar de la liga ubicada en la parte superior de esta página.
                Los totales de casos positivos y sospechosos se calculan con base en los archivos .pdf que registran los archivos oficiales por caso y que se descargan de la liga mantenida por la autoridad federal. Las divergencias en las cifras de totales reportados por la autoridad federal en la conferencia de prensa diaria a las 7:00 PM y los totales registrados en la documentación diaria que da a conocer la Secretaría de Salud (utilizada en esta visualización), corresponden a variaciones de criterio en las fuentes fedeales y posiblemente a diferencias de horario en el corte para la elaboración de los reportes registrados por la Secretaria de Salud y aquéllos para la conferencia de prensa.
            </div>
        </section>
        <section id="data" className={classes.row}>
            <div className={classes.title}>Metodología de Visualización de Datos</div>
            <div className={classes.content}>
                Las visualizaciones de información cuantitativa son construidas en Javascript, HTML y CSS utilizando las librerías de Mapbox GL y D3. El método de partición del número de casos confirmados y sospechosos para la construcción de los mapas coropléticos es por cuantiles. Con este propósito, los datos de cada día por estado son ordenados de menor a mayor en un array y particionados en seis categorías. El suavizado de la curva de casos por fechas es a través del Centripetal Catmull-Rom spline
            </div>
        </section>
        <section id="politic" className={classes.row}>
            <div className={classes.title}>Política de Divulgación de Información</div>
            <div className={classes.content}>
                Esta página es elaborada y mantenida por un grupo de profesores y estudiantes del Tecnológico de Monterrey. Las inconsistencias y errores son competencia de los autores de esta página y no de la Institución. Asimismo, las posturasy y opiniones aquí vertidas representan la posición personal de los autores y no del Tecnológico de Monterrey.
            </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

const styles = () => ({
  
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },
  
  MethologyContainer: {
    width: '70%',
		margin: 'auto',
		padding: '25px',
    paddingTop: '128px',
    backgroundColor: colors.WHITE
  },

  h1: {
		fontSize: '36px'
	},

	header: {
		borderBottom: `1px solid ${colors.BLACK}`,
		display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
	},

  label:{
    flex: '1',
    textAlign: 'center',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    margin: '50px 0px',
    borderRadius: '5px',
    padding: '64px 20px',
    backgroundColor: colors.GRAY,
  },

  topSection: {
    margin: '0px'
  },

  title: {
    padding: '20px',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    padding: '20px',
    flex: '5',
    display: 'flex',
    textAlign: 'justify'
  },

  navbar: {
    margin: '20px 0px',
    display: 'flex',
    flexDirection: 'row',
  },

  [`@media (max-width: ${1000}px)`]: {
    header: {
      display: 'block',
      width: '80%',
      margin: 'auto'
    }
  }
});

export default withStyles(styles)(Methodology);
