import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  let valueArray = props.datapoint.map((datapoint) => datapoint.value);
  let totalMaxValue = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.datapoint.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalMaxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
