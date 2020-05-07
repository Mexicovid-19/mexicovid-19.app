import Loader from 'react-loader-spinner';
import React from 'react';
import * as colors from '../constants/colors';
 
const LoaderView = ({classes}) => {
  return(
		<Loader
			type="Puff"
			color={colors.BLACK}
			secondaryColor={colors.BLACK}
			height={300}
			width={300}
		/>
	);
}

export default LoaderView;