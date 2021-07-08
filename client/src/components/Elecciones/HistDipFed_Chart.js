import React from "react";
import { ResponsiveStream } from "@nivo/stream";

const stepColors = ['#61109c', '#F0049A']

const data = [
    {
      "Hombres": 99.4,
      "Mujeres": 0.6
    },
    {
      "Hombres": 97.5,
      "Mujeres": 2.5
    },
    {
      "Hombres": 95.1,
      "Mujeres": 4.9
    },
    {
      "Hombres": 95.1,
      "Mujeres": 4.9
    },
    {
      "Hombres": 93.8,
      "Mujeres": 6.2
    },
    {
      "Hombres": 94.3,
      "Mujeres": 5.7
    },
    {
      "Hombres": 93.4,
      "Mujeres": 6.6
    },
    {
      "Hombres": 91.8,
      "Mujeres": 8.2
    },
    {
      "Hombres": 91.1,
      "Mujeres": 8.9
    },
    {
        "Hombres": 92.0,
        "Mujeres": 8.0
    },
    {
        "Hombres": 89.5,
        "Mujeres": 10.5
    },
    {
        "Hombres": 89.5,
        "Mujeres": 10.5
    },
    {
        "Hombres": 88.2,
        "Mujeres": 11.8
    },
    {
        "Hombres": 91.2,
        "Mujeres": 8.8
    },
    {
        "Hombres": 85.9,
        "Mujeres": 14.1
    },
    {
        "Hombres": 82.6,
        "Mujeres": 17.4
    },
    {
        "Hombres": 84.0,
        "Mujeres": 16
    },
    {
        "Hombres": 77.4,
        "Mujeres": 22.6
    },
    {
        "Hombres": 73.8,
        "Mujeres": 26.2
    },
    {
        "Hombres": 68.2,
        "Mujeres": 31.8
    },
    {
        "Hombres": 58.6,
        "Mujeres": 41.4
    },
    {
        "Hombres": 57.6,
        "Mujeres": 42.4
    },
    {
        "Hombres": 51.8,
        "Mujeres": 48.2
    },
    {
        "Hombres": 50.8,
        "Mujeres": 49.2
    }
  ];
  const tickValues = [
    "1952-1955",
    "1955-1958",
    "1958-1961",
    "1961-1964",
    "1964-1967",
    "1967-1970",
    "1970-1973",
    "1973-1976",
    "1976-1979",
    "1979-1982",
    "1982-1985",
    "1985-1988",
    "1988-1991",
    "1991-1994",
    "1994-1997",
    "1997-2000",
    "2000-2003",
    "2003-2006",
    "2006-2009",
    "2009-2012",
    "2012-2015",
    "2015-2018",
    "2018-2021",
    "2021-2024"
  ];

  /*const tickValues2 = [
    "0",
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100"
  ]; */
const MyResponsiveStream = ({ data }) => (
    <ResponsiveStream
        data={data}
        keys={[ 'Hombres', 'Mujeres']}
        margin={{ top: 100, right: 100, bottom: 100, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -60,
            legend: '',
           // legendOffset: 36,
            itemTextColor: '#FFFFFF',
            //tickValues: [1952, 1955, 1958, 1961, 1964, 1967, 1970, 1973]
            format: d => tickValues[d]
        }}
        axisLeft={{ 
            orient: 'left', 
            tickSize: 5, 
            tickPadding: 5, 
            tickRotation: 0, 
            legend: '', 
            legendOffset: -40,
            //minValue: 0,
            //maxValue: 100,
            //format: f => tickValues2[f],
            format: value =>
              `${Number(value).toLocaleString('ru-RU', {
                  minimumFractionDigits: 0,
              })} %`
        }}
        tooltipFormat={value =>
            `${Number(value).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
            })} %`
        }
        offsetType="none"
        colors = {stepColors}
        fillOpacity={0.85}
        borderColor='#FFFFFF'
        theme={{
            axis: {
                fontSize: "14px",
                tickColor: "#eee",
                ticks: {
                  line: {
                    stroke: "#555555"
                  },
                  text: {
                    fill:"white"
                  }
                },
                legend: {
                  text: {
                    fill: "white"
                  }
                }
              },
          }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#FFFFFF',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default function App() {
  return (
    <div style={{width: '100vw', height: 700, margin: 'auto', minHeight: 700, flex: 1, paddingTop: 10
    }}>
         
      <MyResponsiveStream data={data} />
    </div>
  );
}