import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { map, maxBy, orderBy } from "lodash";

const data = [
  { sf: "Ags", Dip_Loc: 38.88, Ayun: 18.2 },
  { sf: "BCN", Dip_Loc: 52.94, Ayun: 60 },
  { sf: "BCS", Dip_Loc: 43.75, Ayun: 60 },
  { sf: "Camp", Dip_Loc: 66.67, Ayun: 46.2 },
  { sf: "Chis", Dip_Loc: 58.33, Ayun: 16.3 },
  { sf: "Chih", Dip_Loc: 45.45, Ayun: 17.9 },
  { sf: "*Coah", Dip_Loc: 0, Ayun: 31.6 },
  { sf: "Col", Dip_Loc: 50.00, Ayun: 60 },
  { sf: "CDMX", Dip_Loc: 60.61, Ayun: 50 },
  { sf: "*Dgo", Dip_Loc: 40.00, Ayun: 0 },
  { sf: "Gto", Dip_Loc: 45.45, Ayun: 30.4 },
  { sf: "Gro", Dip_Loc: 46.43, Ayun: 18.5 },
  { sf: "*Hgo", Dip_Loc: 44.44, Ayun: 0 },
  { sf: "Edo. Mex", Dip_Loc: 37.78, Ayun: 37.6 },
  { sf: "Jal", Dip_Loc: 65.00, Ayun: 19.2 },
  { sf: "Mich", Dip_Loc: 62.50, Ayun: 21.4 },
  { sf: "Mor", Dip_Loc: 50.00, Ayun: 21.2 },
  { sf: "Nay", Dip_Loc: 50.00, Ayun: 35 },
  { sf: "NL", Dip_Loc: 42.31, Ayun: 17.6},
  { sf: "Oax", Dip_Loc: 56.00, Ayun: 30.1 },
  { sf: "Pue", Dip_Loc: 57.69, Ayun: 19.4 },
  { sf: "Qro", Dip_Loc: 53.33, Ayun: 27.8 },
  { sf: "*Q.Roo", Dip_Loc: 0, Ayun: 63.6 },
  { sf: "SLP", Dip_Loc: 46.67, Ayun: 29.3 },
  { sf: "Sin", Dip_Loc: 54.17, Ayun: 38.9 },
  { sf: "Son", Dip_Loc: 52.38, Ayun: 25 },
  { sf: "Tab", Dip_Loc: 52.38, Ayun: 47.1 },
  { sf: "Tamps", Dip_Loc: 54.55, Ayun: 44.2 },
  { sf: "Tlx", Dip_Loc: 53.33, Ayun: 8.9 },
  { sf: "Ver", Dip_Loc: 40.00, Ayun: 22.6 },
  { sf: "Yuc", Dip_Loc: 60.00, Ayun: 30.2 },
  { sf: "Zac", Dip_Loc: 44.44, Ayun: 20.7 }

];

const orderedData = map(orderBy(data, ["Dip_Loc", "sf"], ["asc", "desc"]), d => ({
  ...d
  // f: -1 * d.f
}));

const axisWidth = 100;
const maxSfProject = maxBy(data, "Dip_Loc").Dip_Loc;
const maxSfFreelancer = maxBy(data, "Ayun").Ayun;
// const maxSfFreelancer = Math.max(maxSfProject, maxBy(data, "f").f);

const commonProps = {
  layout: "horizontal",
  indexBy: "sf",
  data: orderedData,
  //data: data,
  margin: { top: 0, bottom: 45, left: 0, right: 0 },
  //axisBottom: null,
  axisLeft: { tickSize: 5, tickPadding: 5,legendOffset: -45, legend: 'Estado', legendPosition: 'middle'},
  enableGridX: false,
  enableGridY: false,
  label: d =>
    `${Number(d.value).toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        })} %`,
  //label: d => Math.abs(d.value),
  theme:{
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
  },
  labelSkipWidth: 10,
  labelTextColor: "white",
  //tooltipFormat: value => Math.abs(value),
  markers: [
    {
      axis: "x",
      value: 0,
      lineStyle: { stroke: "white", strokeWidth: 4 }
    }
  ],
    tooltipFormat:value =>
    `${Number(value).toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        })} %`
    
  

  //CIERRE
};

const propsProject = {
  ...commonProps,
  reverse: true,
  keys: ["Dip_Loc"],
  margin: { ...commonProps.margin, left: axisWidth },
  //axisLeft: { tickSize: 0, tickPadding: 20, legend: 'Estado', legendPosition: 'middle'},
  axisBottom: { tickSize: 5, tickPadding: 5, legend: ' % de mujeres electas en diputaciones locales',legendPosition: 'middle',legendOffset: 35,
    format: value =>
        `${Number(value).toLocaleString('ru-RU')}%`,
    },
  labelTextColor: "white",
  // labelFormat: d => <tspan x={-15}>{d}</tspan>,
  /*colors: ({ data }) => {
    const cOffset = (maxSfProject / -data.Dip_Loc - 1) * 5;
    return `hsl(348, 65%, ${62 + cOffset}%)`;
  }*/
  colors: ({ data }) => {
    return '#F0049A';
  },
};

const propsFreelancer = {
  ...commonProps,
  keys: ["Ayun"],
  axisLeft: null,
  axisBottom: { tickSize: 5, tickPadding: 5, legend: '% de mujeres electas en presidencias municipales', legendPosition: 'middle',legendOffset: 35,
        format: value =>
        `${Number(value).toLocaleString('ru-RU')}%`
    },
  labelTextColor: "white",
  // labelFormat: d => <tspan x={-15}>{d}</tspan>,
  /*colors: ({ data }) => {
    // return "#99C6C5";
    const cOffset = (maxSfFreelancer / -data.Ayun - 1) * 5;
    return `hsl(179, 28%, ${69 + cOffset}%)`;
  },*/
  colors: ({ data }) => {
    return '#EE6EC5';
  },
  //maxValue: Math.max(maxSfProject * 8, maxSfFreelancer)
};

const height = 30 * data.length + commonProps.margin.bottom;

export default function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div
          //className="App"
          style={{//width: 800, height: 600, margin: 'auto'
            //width: `calc(50% + ${axisWidth / 2}px)`, height: `${height}px`,margin: 'auto', align: 'center'
            width: '50vw', height: 600, margin: 'auto', minHeight: 500, flex: 1, paddingTop: 40
          }}
        >
          <ResponsiveBar {...propsProject} />
        </div>
        <div
          //className="App"
          style={{//width: 600, height: 600, margin: 'auto'
          //width: `calc(50% - ${axisWidth/2}px)`, height: `${height}px`,margin: 'auto', align: 'center'
          width: '50vw', height: 600, margin: 'auto', minHeight: 500, flex: 1, paddingTop: 40
          }}
          
        >
          <ResponsiveBar {...propsFreelancer} />
        </div>
      </div>
    </div>
  );
}
