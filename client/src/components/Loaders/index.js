import Loader from 'react-loader-spinner';
import React from 'react';
import * as colors from '../../constants/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	slider: {
	  textAlign: 'center'
	},  
  }));
  

const LoaderView = () => {
	const classes = useStyles();

  return(
	  <div className={classes.slider}>
		<Loader
			type="TailSpin"
			color={colors.BLACK}
			secondaryColor={colors.BLACK}
			height={100}
			width={100}
		/>
		</div>
	);
}

export default LoaderView;