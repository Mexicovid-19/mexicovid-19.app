import React from "react";
import { ResponsiveFunnel } from "@nivo/funnel";

//const stepColors = ['#4da864', '#60A371', '#7AA285', '#96A99B']
const stepColors = ['#6CAB7C', '#4da864', '#7AA285', '#96A99B']

const data = [
  {
    id: "Gob",
    value: 27.35,
    label: "Gubernatura",
  },
  {
    id: "Ayun",
    value: 28.04,
    label: "Ayuntamiento",
  },
  {
    id: "DL",
    value: 26.06,
    label: "Diputados Locales",
  },
  {
    id: "DF",
    value: 25.85,
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
    beforeSeparatorOffset={20}
    afterSeparatorLength={100}
    afterSeparatorOffset={20}
    currentPartSizeExtension={10}
    currentBorderWidth={40}
    motionConfig="wobbly"
  />
);
export default function App() {
  return (
    <div style={{ width: 250, height: 300, margin: 'auto' }}>
      <MyResponsiveFunnel data={data} />
    </div>
  );
}