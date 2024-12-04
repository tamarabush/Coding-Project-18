import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Expenses vs. Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
