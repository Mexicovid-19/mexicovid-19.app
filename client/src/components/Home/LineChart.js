import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import * as colors from '../../constants/colors';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveLine = ({ data  }) => {
    
    console.log(data);
    return(
        <ResponsiveLine
        colors={[colors.RED, colors.BLUE_LIGHT]}
        data={data}
        margin={{ top: 20, right: 10, bottom: 40, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'fechas',
            legendOffset: 36,
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
        
        lineWidth={2}
        pointSize={7}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.7}
        useMesh={true}
    />)
}

export default MyResponsiveLine;