import { useState } from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalMaximum = () => {
    let max = 0;
    for (const dataPoint of props.dataPoints) {
      if (dataPoint.value > max) {
        max = dataPoint.value;
      }
    }
    return max;
  };
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar value={dataPoint.value} maxValue={totalMaximum()} label={dataPoint.label} key={index} />
      ))}
    </div>
  );
};

export default Chart;
