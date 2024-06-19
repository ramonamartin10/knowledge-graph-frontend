import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import Formatter from "../service/formatter.service";
import "./Graph.component.css";

interface GraphProps {
  title: string;
  data: number[][];
  xAxisName: string;
  yAxisName: string;
  yAxisMin: number;
  yAxisMax: number;
}

const Graph = (props: GraphProps) => {
  const [xAxisData, setXAxisData] = useState<number[]>([]);
  const [seriesData, setSeriesData] = useState<number[]>([]);
  const formatter = new Formatter();

  useEffect(() => {
    const fetchData = async () => {
      const { xAxisData, seriesData } = await formatter.prepareDataForGraph(
        props.data,
      );
      setXAxisData(xAxisData);
      setSeriesData(seriesData);
      console.log(xAxisData);
      console.log(seriesData);
    };

    fetchData();
  }, []);

  const options = {
    xAxis: {
      axisLabel: {},
      name: props.xAxisName,
      data: xAxisData,
    },
    yAxis: {
      axisLine: {
        show: true,
        symbol: "none",
        lineStyle: {
          type: "solid",
        },
      },
      type: "value",
      name: props.yAxisName,
      axisLabel: {
        formatter: "{value}",
      },
      min: props.yAxisMin,
      max: props.yAxisMax,
    },
    series: [
      {
        data: seriesData,
        type: "line",
        name: "Value ",
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
  };

  return (
    <div className="echarts-graph">
      <h3 className="graph-title">{props.title}</h3>
      <ReactECharts className="graph" option={options} />
    </div>
  );
};

export default Graph;
