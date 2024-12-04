import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Profits, and Expenses',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 10, // Adjust size scale as needed
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
