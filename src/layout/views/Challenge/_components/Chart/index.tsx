import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: false,
    scales: {
      xAxes: [
        {
          categoryPercentage: 0.35,
          barPercentage: 0.7,
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Month',
          },
          gridLines: {
            color: '#1E9AE9',
            drawBorder: true,
            offsetGridLines: true,
            drawTicks: true,
            borderDash: [3, 4],
            zeroLineWidth: 1,
            zeroLineColor: '#1E9AE9',
            zeroLineBorderDash: [3, 4],
          },
          ticks: {
            display: true,
            beginAtZero: true,
            fontColor: '#1E9AE9',
            fontSize: 13,
            padding: 10,
          },
        },
      ],
      yAxes: [
        {
          categoryPercentage: 0.35,
          barPercentage: 0.7,
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Value',
          },
          gridLines: {
            color: '#1E9AE9',
            drawBorder: true,
            offsetGridLines: false,
            drawTicks: true,
            borderDash: [3, 4],
            zeroLineWidth: 1,
            zeroLineColor: '#1E9AE9',
            zeroLineBorderDash: [3, 4],
          },
          ticks: {
            max: 100,
            stepSize: 50,
            display: true,
            beginAtZero: true,
            fontColor: '#1E9AE9',
            fontSize: 13,
            padding: 10,
          },
        },
      ],
    },
    title: {
      display: false,
    },
    hover: {
      mode: 'ErrorsPage.js',
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      bodySpacing: 5,
      yPadding: 10,
      xPadding: 10,
      caretPadding: 0,
      displayColors: false,
      backgroundColor: '#007bff',
      titleFontColor: '#ffffff',
      cornerRadius: 4,
      footerSpacing: 0,
      titleSpacing: 0,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0,
      },
    },
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
    },
  ],
};

const ChartView = () => {
  return <Line id="chart-line" options={options} data={data} />;
};

export default ChartView;
