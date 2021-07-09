import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump'
const BumpChart = ({data}) => {
    return (
    <ResponsiveAreaBump
        data={data}
        margin={{ top: 80, right: 60, bottom: 80, left: 60 }}
        spacing={8}
        colors={{ scheme: 'category10' }}
        blendMode="normal"
        fillOpacity={0.75}
        activeFillOpacity={1}
        inactiveFillOpacity={0.35}
        defs={[
            {
                id: 'dotsSamuel',
                type: 'patternDots',
                background: 'hsl(25, 87%, 57%)',
                color: '#fff',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'dotsClara',
                type: 'patternDots',
                background: 'hsl(8, 76%, 43%)',
                color: '#CB9149',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'dotsAdrian',
                type: 'patternDots',
                background: 'hsl(135, 37%, 48%)',
                color: '#d92017',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'dotsFernando',
                type: 'patternDots',
                background: 'hsl(210, 90%, 34%)',
                color: '#fff',
                size: 4,
                padding: 1,
                stagger: true
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Samuel'
                },
                id: 'dotsSamuel'
            },
            {
                match: {
                    id: 'Clara Luz'
                },
                id: 'dotsClara'
            },
            {
                match: {
                    id: 'Fernando'
                },
                id: 'dotsFernando'
            },
            {
                match: {
                    id: 'Adrian'
                },
                id: 'dotsAdrian'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'brighter', '0.5' ] ] }}
        startLabelTextColor={{ from: 'color', modifiers: [ [ 'brighter', '1.5' ] ] }}
        endLabelTextColor={{ from: 'color', modifiers: [ [ 'brighter', '1.5' ] ] }}
        startLabel="Partido"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
    />
)
}
export default (BumpChart);