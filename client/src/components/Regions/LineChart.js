import { ResponsiveLine } from '@nivo/line'
import React from 'react';
import { themeBlack } from '../../constants/themeBlack';

const MyResponsiveLine = ({ data, isSmall=false }) => {
	let marginConstrains = { top: 50, right: 110, bottom: 165, left: 60 }
	let legendsConstrains = [{
		anchor: 'top-right',
		direction: 'column',
		justify: false,
		translateX: 88,
		translateY: 0,
		itemsSpacing: 0,
		itemDirection: 'left-to-right',
		itemWidth: 80,
		itemHeight: 20,
		itemOpacity: 0.75,
		symbolSize: 12,
		symbolShape: 'circle',
		symbolBorderColor: 'rgba(0, 0, 0, .5)'
	}]
	let tickRotation = -45;

	if( !isSmall ) {
		marginConstrains = { top: 50, right: 10, bottom: 165, left: 30 };
		legendsConstrains = [];
		tickRotation = -60;
		
	}

	return(
	<ResponsiveLine
		data={data}
		margin={marginConstrains}
		xScale={{ type: 'point' }}
		yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
		curve="natural" 
		axisTop={null}
		axisRight={null}
		axisBottom={{
				orient: 'bottom',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: tickRotation,
				legend: 'fechas',
				legendOffset: 55,
				legendPosition: 'middle'
		}}
		axisLeft={{
				orient: 'left',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'casos',
				legendOffset: -40,
				legendPosition: 'middle'
		}}
		enableGridX={false}
		enableGridY={false}
		enablePoints={false}
		pointSize={10}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabel="y"
		pointLabelYOffset={-12}
		enableSlices="x"
		useMesh={true}
		legends={legendsConstrains}
		motionStiffness={160}
		motionDamping={20}
	/>
	)
}

export default MyResponsiveLine;