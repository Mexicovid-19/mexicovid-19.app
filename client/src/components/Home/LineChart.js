import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import * as colors from '../../constants/colors';
import { themeBlack } from '../../constants/themeBlack';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveLine = ({ data, isSmall=true  }) => {
    let axisBottom = null;
    let axisLeft = null;
    var Defaultmargin = { top: 10, right: 10, bottom: 15, left: 15 };
    var legendTy = 0;
    if(!isSmall) {
        axisBottom = {
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 0,
            tickRotation: -90,
            legendOffset: 50,
            legendPosition: 'middle',
            legend: 'FECHA'
        };

        axisLeft = {
            orient: 'left',
            tickSize: 5,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'CASOS',
            legendOffset: -45,
            legendPosition: 'middle'
        };
        Defaultmargin = { 
            top: 30, 
            right: 30, 
            bottom: 60, 
            left: 60 
        };
        legendTy = -15;

    }

    return(
        <ResponsiveLine
        theme={themeBlack}
        colors={[colors.RED, colors.BLUE_LIGHT]}
        data={data}
        margin={Defaultmargin}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={axisBottom}
        axisLeft={axisLeft}
        lineWidth={2}
        pointSize={7}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.7}
        useMesh={!isSmall}
        enableGridX={false}
        enableGridY={false}
        legends={[
            {
                anchor: 'top',
                fill: '#ff0000',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: legendTy,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                itemWidth: 90,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                itemTextColor: '#fff',
                
            }
        ]}
    />)
}

export default MyResponsiveLine;