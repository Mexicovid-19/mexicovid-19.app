import { ResponsiveCirclePacking } from '@nivo/circle-packing'
import React from "react";


const data = 
{
    "name": "Total participación de mujeres",
    "color": "#feebe2",
    "children": [
      {
        "name": "Colima",
        "color": "#fbb4b9",
        "children": [
          {
            "name": "Dip Loc",
            "color": "#f768a1",
            "value": 8,
          },
          {
              "name": "Dip Fed",
              "color": "#EE6EC5",
              "value": 1,
          },
          {
            "name": "Ayun",
            "color": "#F0049A",
            "value": 6,
          }
        ]
      },
      {
        "name": "Hidalgo",
        "color": "#fbb4b9",
        "children": [
          {
            "name": "Dip Loc",
            "color": "#f768a1",
            "value": 8,
          },
          {
              "name": "Dip Fed",
              "color": "#EE6EC5",
              "value": 5,
          },
          {
            "name": "Ayun",
            "color": "#F0049A",
            "value": 0,
          }
        ]
      },
      {
        "name": "Estado de México",
        "color": "#fbb4b9",
        "children": [
          {
            "name": "Dip Loc",
            "color": "#f768a1",
            "value": 17,
          },
          {
              "name": "Dip Fed",
              "color": "#EE6EC5",
              "value": 21,
          },
          {
            "name": "Ayun",
            "color": "#F0049A",
            "value": 47,
          }
        ]
      },
      {
        "name": "Michoacán",
        "color": "#fbb4b9",
        "children": [
          {
            "name": "Dip Loc",
            "color": "#f768a1",
            "value": 15,
          },
          {
              "name": "Dip Fed",
              "color": "#EE6EC5",
              "value": 4,
          },
          {
            "name": "Ayun",
            "color": "#F0049A",
            "value": 24,
          }
        ]
      }
///CIERRE/////
      ]
    }
  

    const MyResponsiveCirclePacking = ({ data /* see data tab */ }) => (
        <ResponsiveCirclePacking
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            id="name"
            //value="loc"
            valueFormat={value =>
              `${Number(value).toLocaleString('ru-RU',{
            })}`
          }
            colors = {{datum: 'data.color'}}
            childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
            padding={4}
            enableLabels={true}
            labelsFilter={function(e){return 2===e.node.depth}}
            labelsSkipRadius={15}
            labelTextColor="white"
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.5 ] ] }}
            defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'none',
                    color: 'inherit',
                    rotation: -45,
                    lineWidth: 5,
                    spacing: 8
                }
            ]}
            fill={[ { match: { depth: 1 }, id: 'lines' } ]}
        />
    )
    export default function App() {
        return (
          <div style={{ width: 400, height: 400, margin: 'auto' }}>
            <MyResponsiveCirclePacking data={data} />
          </div>
        );
      }