import React, { useEffect, useState } from 'react';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Financial Data Dashboard</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;
