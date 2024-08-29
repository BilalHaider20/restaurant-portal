import React from 'react'
import { Bar } from "react-chartjs-2";
const BarChartcomponent = ({data}) => {
  return (
    <div className="relative w-full h-[250px] sm:h-[400px]">
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                ticks: {
                  color: '#6B7280',
                },
              },
              y: {
                ticks: {
                  color: '#6B7280',
                },
              },
            },
          }}
        />
      </div>
  )
}

export default BarChartcomponent