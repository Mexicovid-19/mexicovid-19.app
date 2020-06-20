import { ResponsiveLine } from '@nivo/line'
import React from 'react';
import { STATE_COLORS } from '../../constants/states';

const MyResponsiveLine = ({ data, isSmall=false, }) => {
	let marginConstrains = { top: 20, right: 70, bottom: 50, left: 50 };
	let legendsConstrains = [];
	let tickRotation = -90;
	let grid = false;
	let axisBottom = null

	if( !isSmall ) {
		marginConstrains = { top: 20, right: 70, bottom: 105, left: 50 };
		legendsConstrains = [];
		tickRotation = -60;
		grid = true;
		axisBottom = {
			orient: 'bottom',
			tickSize: 5,
			tickPadding: 5,
			tickRotation: tickRotation,
			legend: 'Fecha',
			legendOffset: 80,
			legendPosition: 'middle',
			tickValues: 4
		}
	}
	const styleById = {
		"NACIONAL": {
			strokeDasharray: '6, 6',
        	strokeWidth: 4,
		},
		default: {
			strokeWidth: 2,
		},
	}

	const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
		return series.map(({ id, data, color }) => (
			<path
				key={id}
				d={lineGenerator(
					data.map(d => ({
						x: xScale(d.data.x),
						y: yScale(d.data.y),
					}))
				)}
				fill="none"
				stroke={STATE_COLORS[id].color}
				style={styleById[id] || styleById.default}
			/>
		))
	}
	
	return(
		<div style={{ height: 600, width: '100%'}}>
	<ResponsiveLine
		data={data}
		lineWidth={2}
		margin={marginConstrains}
		yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
		curve="natural" 
		axisTop={null}
		axisRight={null}
		axisBottom={axisBottom}
		theme={{
			crosshair: {
				line: {
					strokeWidth: 2,
					stroke: "#000",
					strokeOpacity: 1,
				},
			},
		}}
		axisLeft={{
				orient: 'left',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Tasa de confirmados por 100 mil habitantes',
				legendOffset: -40,
				legendPosition: 'middle'
		}}
		enableGridX={grid}
		enableGridY={false}
		enablePoints={false}
		pointLabel="y"
		pointLabelYOffset={-12}
		enableSlices={false}
		useMesh={true}
		legends={legendsConstrains}
		motionStiffness={160}
		motionDamping={20}
		layers={['grid', 'markers', 'axes', 'areas', DashedLine, 'crosshair', 'points', 'slices', 'mesh', 'legends']}
		tooltip={({ point }) => {
            return (
                <div
                    style={{
                        background: 'white',
                        padding: '9px 12px',
						border: '1px solid #ccc',
						display: 'flex',
						alignItems: 'center',
					}}
                >
					<div
						style={{
							backgroundColor: STATE_COLORS[point.serieId].color,
							padding: '3px 0',
							width: '15px',
							height: '15px',
							marginRight: '8px',
							borderRadius: '15px'
						}}
						>
					</div>
					<div
						key={point.id}
						style={{
							color: 'black',
							padding: '3px 0',
						}}
						>
						<strong>{STATE_COLORS[point.serieId].title}</strong> {point.data.yFormatted}
					</div>
					
				</div>
            )
        }}
	/>
	</div>
	)
}

export default MyResponsiveLine;