// CandlestickChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CandlestickChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const ctx = chartContainer.current.getContext("2d");

    // Dummy candlestick data
    const candlestickData = [
      { t: 1, o: 150, h: 170, l: 140, c: 160 },
      { t: 2, o: 160, h: 180, l: 150, c: 170 },
      // Add more data as needed
    ];

    new Chart(ctx, {
      type: "candlestick",
      data: {
        datasets: [
          {
            label: "Candlestick Data",
            data: candlestickData,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          title: {
            display: true,
            text: "Candlestick Chart",
          },
        },
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            title: {
              display: true,
              text: "Price",
            },
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartContainer} width="400" height="200" />;
};

export default CandlestickChart;
