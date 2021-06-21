import React from "react";
import { ResponsiveFunnel } from "@nivo/funnel";

//const stepColors = ['#940022', '#98364C', '#9E5465', '#A06F7A']
const stepColors = ['#A06F7A', '#9E5465', '#98364C', '#940022']


const data = [
  {
    id: "Gob",
    value: 10.09,
    label: "Gubernatura",
  },
  {
    id: "Ayun",
    value: 10.58,
    label: "Ayuntamiento",
  },
  {
    id: "DL",
    value: 13.06,
    label: "Diputados Locales",
  },
  {
    id: "DF",
    value: 14.4,
    label: "Diputados Federales",
  }
];
const MyResponsiveFunnel = ({ data }) => (
  <ResponsiveFunnel
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    valueFormat={value =>
        `${Number(value).toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
        })} %`
    }
    //colors={{ scheme: "blues" }}
    colors = {stepColors}
    borderWidth={20}
    labelColor={{ from: "color", modifiers: [["darker", 20]] }}
    enableBeforeSeparators={false}
    enableAfterSeparators={false}
    beforeSeparatorLength={100}
    beforeSeparatorOffset={0}
    afterSeparatorLength={100}
    afterSeparatorOffset={0}
    currentPartSizeExtension={10}
    currentBorderWidth={40}
    motionConfig="wobbly"
  />
);
export default function App() {
  return (
    <div style={{ width: 230, height: 300, margin: 'auto'}}>
      <MyResponsiveFunnel data={data} />
    </div>
  );
}