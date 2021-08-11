// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React from 'react'
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const NationalGraph = ({data}) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        curve="monotoneX"
        theme={
        {
            "textColor": "rgba(255, 255, 255, .75)",

        }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legendOffset: 50,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        colors={{ datum: 'color' }}
        pointSize={10}
        pointColor={"#fff"}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        /* legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                itemTextColor: '#fff',
                translateX: 120,
                translateY: 0,
                itemWidth:100,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                translateX: 10,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                        }
                    }
                ],
            }
        ]} */
    />
)

export default NationalGraph;
