import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Project } from "./Project";

type Props = { projects: Project[] };

const ProjectsCharts = (props: Props) => {
  const colorData = props.projects
    .sort((a, b) => a.budget - b.budget)
    .map((project) => {
      let colorKey;
      if (project.budget < 10000) {
        colorKey = "#1e90ff";
      } else if (project.budget < 20000) {
        colorKey = "#1b82e6";
      } else if (project.budget < 30000) {
        colorKey = "#1873cc";
      } else if (project.budget < 40000) {
        colorKey = "#1565b3";
      } else if (project.budget < 50000) {
        colorKey = "#125699";
      } else if (project.budget < 60000) {
        colorKey = "#0f4880";
      } else if (project.budget < 70000) {
        colorKey = "#0c3a66";
      } else if (project.budget < 80000) {
        colorKey = "#092b4d";
      } else if (project.budget < 90000) {
        colorKey = "#061d33";
      } else if (project.budget < 100000) {
        colorKey = "#030e19";
      }

      return colorKey;
    });
  const data = props.projects
    .sort((a, b) => a.budget - b.budget)
    .map((project) => +project.budget);

  const labels = props.projects
    .sort((a, b) => a.budget - b.budget)
    .map((project) => project.name);

  const options = {
    chart: {
      type: "column",
    },
    colorAxis: [
      {
        min: 1,
        max: 10,
        minColor: "#000000",
        maxColor: "#FFFFFF",
      },
    ],
    title: {
      text: "Projects by Budget",
      style: {
        color: "#203966",
        fontFamily: "Jost, sans-serif",
      },
    },

    legend: {
      enabled: false,
    },
    plotOptions: {
      series: { colorByPoint: true, colors:colorData },
      column: {
        dataLabels: {
          enabled: true,
          format: "$ {y}",
          style: { fontFamily: "Jost, sans-serif" },
        },
      },
    },
    yAxis: {
      title: {
        text: "Budget",
      },
      labels: {
        style: { fontFamily: "Jost, sans-serif" },
      },
    },
    xAxis: {
      categories: labels,
      labels: {
        style: { fontFamily: "Jost, sans-serif" },
      },
      title: {
        text: null,
        style: {
          fontFamily: "Jost, sans-serif",
        },
      },
      accessibility: {
        description: "Projects",
      },
    },
    series: [
      {
        type: "column",
        data: data,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ProjectsCharts;
