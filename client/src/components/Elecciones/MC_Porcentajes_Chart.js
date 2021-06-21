import React from "react";
import { ResponsiveFunnel } from "@nivo/funnel";

const stepColors = ['#f18132', '#F0A067', '#F2B990', '#F5CDB0']

const data = [
  {
    id: "Gob",
    value: 36.72,
    label: "Gubernatura",
  },

  {
    id: "Ayun",
    value: 22.24,
    label: "Ayuntamiento",
  },
  {
    id: "DL",
    value: 19.6,
    label: "Diputados Locales",
  },
  {
    id: "DF",
    value: 19.33,
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
    beforeSeparatorLength={80}
    beforeSeparatorOffset={0}
    afterSeparatorLength={80}
    afterSeparatorOffset={0}
    currentPartSizeExtension={10}
    currentBorderWidth={40}
    motionConfig="wobbly"
  />
);
export default function App() {
  return (
    <div style={{ width: 300, height: 300, margin: 'auto' }}>
      <MyResponsiveFunnel data={data} />
    </div>
  );
}