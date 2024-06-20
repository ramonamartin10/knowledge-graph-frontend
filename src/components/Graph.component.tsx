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
        color: "#4B0082",
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderColor: "#ccc",
      borderWidth: 1,
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOffsetX: 2,
      shadowOffsetY: 4,
      textStyle: {
        color: "#333",
      },
      extraCssText: "border-radius: 4px; padding: 10px;",
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
