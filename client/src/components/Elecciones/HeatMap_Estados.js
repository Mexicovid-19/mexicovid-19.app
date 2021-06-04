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
            'JHH',
            'VXP'
        ]}
        indexBy="admin_name"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        minValue={1}
        forceSquare={true}
        sizeVariation={0.5}
        axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: 'Partido', legendPosition: 'middle',legendOffset: -50 }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Estado',
            legendPosition: 'middle',
            legendOffset: -150
        }}
        colors="blues"
        cellShape="circle"
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', '0' ] ] }}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', '10' ] ] }}
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
        cellHoverOthersOpacity={0.25}
    />
        )
}
export default (HeatMap_Estados);
