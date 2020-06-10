import React from 'react';
import { line, curveMonotoneX  } from "d3-shape";
import { ResponsiveLine } from '@nivo/line';
import * as colors from '../../constants/colors';
import { themeGray } from '../../constants/chartThemes';

const MyResponsiveBarmov = ({ data, isMobile=false, isConfirm=false, hideAxisValues=false  }) => {
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
            fill = 'white'
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

        let data = (series[1].data).push(series[0].data[series[0].data.length - 1])
        return (
            <path d={lineGenerator(series[1].data)} fill="none" stroke="white"  stroke-width="5"/>
        );
    };

    let axisBottom = null;
    let axisLeft = null;
    var Defaultmargin = { top: 80, right: 10, bottom: 15, left: 15 };
    var legendTy = 0;
    var legendTx = 0;
    var colorArray = [colors.RED,'#ffffff00'];
    var dataContent = data;
    var lineWidth=1
    var pointSize=2

    if( isConfirm ) {
        colorArray = [colors.BLUE_LIGHT,'#ffffff00'];
    } 
    
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
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        legend: 'CASOS',
        legendOffset: -45,
        legendPosition: 'middle'
    };
    Defaultmargin = { top: 80, right: 10, bottom: 15, left: 50 };
    legendTy = -20;
    legendTx = 20; 

    lineWidth=4
    pointSize=8

    return(
        <ResponsiveLine
            theme={themeGray}
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
            pointBorderWidth={0}
            pointBorderColor={{ from: 'serieColor', modifiers: [] }}
            pointLabel="y"
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={.6}
            useMesh={true}
            enableGridX={false}
            enableGridY={false}
            layers={['grid','markers', 'axes', 'areas', 'crosshair','lines', 'slices', 'mesh', 'legends', LineLayer]}
            legends={[
                {
                    colors: 'BLUE',
                    anchor: 'top',
                    fill: colors.BLACK,
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
                    itemTextColor: colors.BLACK,
                    
                }
            ]}
        />
    )
}

export default MyResponsiveBarmov;