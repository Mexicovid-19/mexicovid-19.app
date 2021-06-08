import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump'
const CurulesTimeChart = ({data}) => {
    return (
    <ResponsiveAreaBump
        data={data}
        margin={{ top: 80, right: 140, bottom: 80, left: 140 }}
        spacing={8}
        colors={{ scheme: 'category10' }}
        blendMode="normal"
        fillOpacity={0.75}
        activeFillOpacity={1}
        inactiveFillOpacity={0.35}
        defs={[
            {
                id: 'dotsPAN',
                type: 'patternDots',
                background: 'inherit',
                color: '#fff',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'dotsPRI',
                type: 'patternDots',
                background: 'inherit',
                color: '#d92017',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'dotsPRD',
                type: 'patternDots',
                background: 'inherit',
                color: '#000',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'dotsMORENA',
                type: 'patternDots',
                background: 'inherit',
                color: '#CB9149',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'linesMC',
                type: 'patternLines',
                background: 'inherit',
                color: '#fff',
                rotation: -45,
                lineWidth: 3,
                spacing: 10
            },
            {
                id: 'linesPT',
                type: 'patternLines',
                background: 'inherit',
                color: '#d92017',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'linesPANAL',
                type: 'patternLines',
                background: 'inherit',
                color: '#14b5b8',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'linesPES',
                type: 'patternLines',
                background: 'inherit',
                color: '#6e307e',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'PAN'
                },
                id: 'dotsPAN'
            },
            {
                match: {
                    id: 'PRI'
                },
                id: 'dotsPRI'
            },
            {
                match: {
                    id: 'PRD'
                },
                id: 'dotsPRD'
            },
            {
                match: {
                    id: 'Morena'
                },
                id: 'dotsMORENA'
            },
            {
                match: {
                    id: 'Movimiento Ciudadano'
                },
                id: 'linesMC'
            },
            {
                match: {
                    id: 'Partido del Trabajo'
                },
                id: 'linesPT'
            },
            {
                match: {
                    id: 'Partido Nueva Alianza'
                },
                id: 'linesPANAL'
            },
            {
                match: {
                    id: 'Partido Encuentro Social'
                },
                id: 'linesPES'
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
export default (CurulesTimeChart);