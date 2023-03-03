import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Project } from "./Project";

type Props = { projects: Project[] };

const ProjectsCharts = (props: Props) => {
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
    title: {
      text: "Project Budgets",
    },

    legend: {
      enabled: false,
    },
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
                format: '$ {y}'
            }
        }
    },
    xAxis: {
        categories: labels,
        title: {
            text: null
        },
        accessibility: {
            description: 'Countries'
        }
    },
    series: [
      {
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
