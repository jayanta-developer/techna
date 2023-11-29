// ChartComponent.js
import React from "react";
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
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// Function to generate random numbers within a range
const generateRandomData = (min, max, length) => {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: generateRandomData(-1000, 600, labels.length),
      borderColor: "rgba(174, 117, 243, 0.70)",
      backgroundColor: "rgba(174, 117, 243, 0.70)",
    },
    {
      label: "Dataset 2",
      data: generateRandomData(-1000, 600, labels.length),
      borderColor: "rgba(65, 248, 248, 0.70)",
      backgroundColor: "rgba(65, 248, 248, 0.70)",
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
