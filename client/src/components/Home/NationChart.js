import React from 'react';
import { line, curveMonotoneX  } from "d3-shape";
import { ResponsiveLine } from '@nivo/line';
import * as colors from '../../constants/colors';
import { themeBlack } from '../../constants/chartThemes';

const MyResponsiveBar = ({ data, isSmall=true, isMobile=false, isConfirm=false, hideAxisValues=false  }) => {
    if(data.length > 0) {
        if (!isConfirm)
            data = data[0]
        else
            data = data[1]
    }   
    
    const CustomSymbolShape = ({
        x, y, size, fill, borderWidth, borderColor
    }) => {
        
        if ( '#ffffff00' == fill) {
            fill = '#ffffff'
        }
        return(
            <rect
                x={x}
                y={y}
                transform={`rotate(0 ${size/2} ${size/2})`}
                fill={fill}
                strokeWidth={borderWidth}
                stroke={borderColor}
                width={size}
                height={size}
                style={{ pointerEvents: 'none' }}
            />
        )
    }


    const LineLayer = (props) => {
        let {series, xScale, yScale} = props;

        const lineGenerator = line()
            .x(d => xScale(d.data.x))
            .y(d => yScale(d.data.y))
            .curve(curveMonotoneX)

        if(series.length == 0) {
            return null
        }

        
        return (
            <path d={lineGenerator(series[1].data)} fill="none" stroke="white"  stroke-width="5"/>
        );
    };

    let axisBottom = null;
    let axisLeft = null;
    var Defaultmargin = { top: 10, right: 10, bottom: 15, left: 15 };
    var legendTy = 0;
    var legendTx = 0;
    var colorArray = [colors.RED,'#ffffff00'];
    var dataContent = data;
    var lineWidth=1
    var pointSize=2

    if( isConfirm ) {
        colorArray = [colors.BLUE_LIGHT,'#ffffff00'];
    } 
    
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
            curve={ 'step'}
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
            layers={['grid','markers', 'axes', 'areas', 'crosshair','lines', 'slices', 'mesh', 'legends', LineLayer]}
            legends={[
                {
                    colors: 'BLUE',
                    anchor: 'top',
                    fill: colors.WHITE,
                    direction: 'column',
                    justify: false,
                    translateX: legendTx,
                    translateY: legendTy,
                    itemsSpacing: 5,
                    itemDirection: 'left-to-right',
                    itemWidth: 90,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 17,
                    symbolShape: CustomSymbolShape,
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    itemTextColor: colors.WHITE,
                    
                }
            ]}
        />
    )
}

export default MyResponsiveBar;