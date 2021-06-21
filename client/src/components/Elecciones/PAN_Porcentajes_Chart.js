import React from "react";
import { ResponsiveFunnel } from "@nivo/funnel";

//const stepColors = ['#0957a5', '#639EF8', '#7CAEF4', '#AFCAF0']
const stepColors = ['#AFCAF0', '#7CAEF4', '#639EF8', '#0957a5']

const data = [
  {
    id: "Gob",
    value: 18.33,
    label: "Gubernatura",
  },
  {
    id: "Ayun",
    value: 23.98,
    label: "Ayuntamiento",
  },
  {
    id: "DL",
    value: 28.98,
    label: "Diputados Locales",
  },
  {
    id: "DF",
    value: 29.97,
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
    <div style={{ width: 250, height: 300, margin: 'auto'}}>
      <MyResponsiveFunnel data={data} />
    </div>
  );
}