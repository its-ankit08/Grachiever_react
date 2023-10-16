import React from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";


function GraphChart(){
    const [state ,setState]=useState({
        options: {
        //   colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
          colors: ['#00c5ff', '#546E7A', '#E91E63'],
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [10, 10, 35, 70, 39, 40, 50, 71]
          }
        ]
      })

  return (
    <div className=''>
         {/* <div>
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
            />
        </div> */}
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="100%"
            />
        </div>
        
       {/* graph type
       1. scatter 
       2. bar 
       3. radar 
       4. histogram
       
       */}
    </div>
  )
}

export default GraphChart
