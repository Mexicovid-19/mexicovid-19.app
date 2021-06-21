// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/chord
import React from 'react'
import { ResponsiveChord } from '@nivo/chord'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,61,0,0,0,0,0,0],
    [7,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [23,0,0,5,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [17,0,1,41,0,4,0,0,0,0],
    [1,0,0,6,1,2,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [13,0,5,97,0,6,0,0,0,0]
]

const DiputadosCambiosChart = ({ matrix }) => (
    <ResponsiveChord
        matrix = {matrix}
        keys={[ "PAN_PRD_MC", "MORENA", "MC", "PT_MORENA_PES", "PAN", "PRI_PVEM_NA", "PAN_PRI_PRD", "PRI", "PVEM", "PVEM_PT_MORENA"]}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        arcOpacity={1}
        arcBorderWidth={1}
        arcBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        ribbonOpacity={0.5}
        ribbonBorderWidth={1}
        ribbonBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        enableLabel={true}
        label="id"
        labelOffset={12}
        labelRotation={-90}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
        colors = {['#0957a5', '#c1311a', '#f18132', '#c1311a', '#0957a5', '#4da864', '#ffcc00', '#4da864', '#b7ed6f', '#c1311a']}
        colorBy = "index"
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        // legends={[
        //     {
        //         anchor: 'bottom-left',
        //          direction: 'column',
        //          justify: false,
        //          translateX: -30,
        //          translateY: 56,
        //          itemsSpacing: 2,
        //          //itemWidth: 'data.width' || 60,
        //          itemWidth: 60,
        //          itemHeight: 18,
        //          itemTextColor: '#999',
        //          itemDirection: 'left-to-right',
        //          itemOpacity: 1,
        //          symbolSize: 18,
        //          symbolShape: 'circle',
        //          effects: [
        //              {
        //                  on: 'hover',
        //                  style: {
        //                      itemTextColor: '#000'
        //                  }
        //              }
        //          ]
        //      }
        // ]}
    />
)

export default function App() {
  return (
    <div style={{ width: '50vw', height: 600, margin: 'auto', minHeight: 500, flex: 1, paddingTop: 40}}>
      <DiputadosCambiosChart matrix={data} />
    </div>
  );
}