import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: data.profits,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#444', // Darker grid lines
        },
      },
      x: {
        grid: {
          color: '#444', // Darker grid lines
        },
      },
    },
  };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
