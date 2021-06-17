import { ResponsiveSunburst } from '@nivo/sunburst'
import React from "react";


//const stepColors = ['#0957a5', '#4da864', '#940022', '#d92017', '#9bc95e']
//const stepColors = ['#940022', '#4da864', '#0957a5', '#d92017', '#9bc95e']
//MORENA, PRI, PAN, PT, PVEM
const data = 
{
    "name": "nivo",
    //"color": "hsl(255, 70%, 50%)",
    "children": [
      {
        "name": "MORENA",
        "color": '#940022',
        "children": [
          {
            "name": "Reelectos",
            "color": '#9E5465',
            "value": 68
          },
          ///////////////
          {
            "name": "No reelectos",
            "color": '#9E5465',
            "value": 8
          }
        ]
      },
      ////////////////////////////////////////////
      {
        "name": "PRI",
        "color": '#4da864',
        "children": [
          {
            "name": "Reelectos",
            "color": '#7AA285',
            "value": 2
          },
          ///////////////
          {
            "name": "No reelectos",
            "color": '#7AA285',
            "value": 29
          }
        ]
      },
      ////////////////////////////////////////////
      {
        "name": "PAN",
        "color": '#0957a5',
        "children": [
          {
            "name": "Reelectos",
            "color": '#7CAEF4',
            "value": 16
          },
          ///////////////
          {
            "name": "No reelectos",
            "color": '#7CAEF4',
            "value": 55
          }
        ]
      },
      ////////////////////////////////////////////
      {
        "name": "PT",
        "color": '#d92017',
        "children": [
          {
            "name": "Reelectos",
            "color": '#DB5751',
            "value": 19
          },
          ///////////////
          {
            "name": "No reelectos",
            "color": '#DB5751',
            "value": 9
          }
        ]
      },
      ///////////////////////////////////////////
      {
        "name": "PVEM",
        "color": '#9bc95e',
        "children": [
          {
            "name": "Reelectos",
            "color": '#B0C692',
            "value": 1
          },
          ///////////////
          {
            "name": "No reelectos",
            "color": '#B0C692',
            "value": 31
          }
        ]
      }
    ]
  }
  

const MyResponsiveSunburst = ({ data /* see data tab */ }) => (
    <ResponsiveSunburst
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        //value="loc"
        valueFormat={value =>
            `${Number(value).toLocaleString('ru-RU')}`
        }
        cornerRadius={10}
        borderColor={{ theme: 'background' }}
        borderWidth={4}
        colors = {{datum: 'data.color'}}
        inheritColorFromParent={false}
        //childColor = {{datum: 'data.color'}}
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.159 ] ] }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        enableArcLinkLabels={true}
        //arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        arcLabelsTextColor="black"
    />
)
export default function App() {
    return (
      <div style={{ width: 500, height: 500 }}>
        <MyResponsiveSunburst data={data} />
      </div>
    );
  }