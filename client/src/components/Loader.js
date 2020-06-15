import Loader from 'react-loader-spinner';
import React from 'react';
import * as colors from '../constants/colors';
 
const LoaderView = ({classes, color = colors.BLACK, height = 300, width = 300}) => {
  return(
		<Loader
			type="Puff"
			color={color}
			secondaryColor={color}
			height={height}
			width={width}
		/>
	);
}

export default LoaderView;