// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/heatmap
import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap'

const HeatMap_Estados = ({data}) => {
    return(
        <ResponsiveHeatMap
        data={data}
        keys={[
            'PAN',
            'PRI',
            'PRD',
            'PVEM',
            'PT',
            'MC',
            'MORENA',
            'PES',
            'FM',
            'RSP',
        ]}
        indexBy="admin_name"
        margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
        forceSquare={true}
        axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        colors= "blues"
        cellShape="circle"
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(0, 0, 0, 0.1)',
                rotation: -45,
                lineWidth: 4,
                spacing: 7
            }
        ]}
        fill={[ { id: 'lines' } ]}
        animate={true}
        motionConfig="wobbly"
        motionStiffness={80}
        motionDamping={9}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
    />
)   
}
export default (HeatMap_Estados);
