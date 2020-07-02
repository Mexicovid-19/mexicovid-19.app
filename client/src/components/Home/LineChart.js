import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import * as colors from '../../constants/colors';
import { themeBlack } from '../../constants/chartThemes';

const MyResponsiveLine = ({ data, isSmall=true, isMobile=false, isConfirm=false, hideAxisValues=false  }) => {
    let axisBottom = null;
    let axisLeft = null;
    var Defaultmargin = { top: 10, right: 10, bottom: 15, left: 15 };
    var legendTy = 0;
    var legendTx = 0;
    var colorArray = [colors.RED,colors.BLUE_LIGHT];
    var dataContent = data;
    var lineWidth=1
    var pointSize=2

    if ( isMobile ) {
        axisLeft = {
            orient: 'left',
            tickSize: 5,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'CASOS',
            legendOffset: -45,
            legendPosition: 'middle'
        };

        Defaultmargin = { top: 10, right: 10, bottom: 15, left: 50 };
        
        if( data.length ) {
            dataContent = [data[isConfirm ? 1 : 0]];
        }

        if( isConfirm ) {
            colorArray = [colors.BLUE_LIGHT];
        } else {
            colorArray = [colors.RED];
        }
    }

    if( !isSmall ) {
        axisBottom = {
            format: '%b %d',
            tickValues: 'every 3 days',
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 0,
            tickRotation: -31,
            legendOffset: 55,
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
            top: 60, 
            right: 60, 
            bottom: 60, 
            left: 60 
        };
        legendTy = -20;
        legendTx = 20; 

        lineWidth=4
        pointSize=8
    }

    return(
        <ResponsiveLine
            theme={themeBlack}
            colors={colorArray}
            data={dataContent}
            margin={Defaultmargin}
            xScale={{
                type: 'time',
                format: '%Y/%m/%d',
                useUTC: false,
                precision: 'day',
            }}
            xFormat="time:%Y/%m/%d"
            yScale={{
                type: 'linear',
                stacked: false,
            }}
            axisBottom={axisBottom}
            curve={ 'monotoneX'}
            enableSlices={false}
            axisTop={null}
            axisRight={null}
            axisLeft={axisLeft}
            lineWidth={lineWidth}
            pointSize={pointSize}
            pointColor={{ from: 'color', modifiers: [] }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor', modifiers: [] }}
            pointLabel="y"
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={.6}
            useMesh={!isSmall}
            enableGridX={false}
            enableGridY={false}
            legends={[
                {
                    colors: 'BLUE',
                    anchor: 'top',
                    fill: colors.WHITE,
                    direction: 'row',
                    justify: false,
                    translateX: legendTx,
                    translateY: legendTy,
                    itemsSpacing: 5,
                    itemDirection: 'left-to-right',
                    itemWidth: 90,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 17,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    itemTextColor: colors.WHITE,
                    
                }
            ]}
        />
    )
}

export default MyResponsiveLine;