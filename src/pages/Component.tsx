import { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'
import React from 'react'

const Component = () => {

  const optionTreemap: ApexOptions = {
    chart: {
      height: 350,
      type: 'rangeArea',
      animations: {
        speed: 500
      },
      toolbar:{
        show: false
      }
    },
    colors: ['#775DD0'],
    legend: {
      show: false
    }
  }

  const optionPredict: ApexOptions = {
    chart: {
      height: 350,
      type: 'rangeArea',
      animations: {
        speed: 500
      },
      toolbar:{
        show: false
      }
    },
    colors: ['#775DD0', '#775DD0'],
    annotations: {
      xaxis: [{
        x: "Apr",
        strokeDashArray: 0,
        borderColor: '#775DD0',
        label: {
          borderColor: '#775DD0',
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Now',
        }
      }]
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: [1, 0.24]
    },
    forecastDataPoints: {
      count: 4
    },
    stroke: {
      curve: 'straight',
      width: [2, 0]
    },
    legend: {
      show: true,
      onItemClick: {toggleDataSeries:false}
    }
  }

  const seriesTreemap: ApexAxisChartSeries = [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]
    }
  ]

  const seriesPredict: ApexAxisChartSeries = [
    {
      type: 'line',
      name: 'Value',
      data: [
        {
          x: 'Jan',
          y: 1500
        },
        {
          x: 'Feb',
          y: 1700
        },
        {
          x: 'Mar',
          y: 1900
        },
        {
          x: 'Apr',
          y: 2200
        },
        {
          x: 'May',
          y: 3000
        },
        {
          x: 'Jun',
          y: 1000
        },
        {
          x: 'Jul',
          y: 2100
        },
        {
          x: 'Aug',
          y: 1200
        }
      ]
    },
    {
      type: 'rangeArea',
      name: 'Value Range',

      data: [
          {
            x: 'Jan',
            y: [1500, 1500]
          },
          {
            x: 'Feb',
            y: [1700, 1700]
          },
          {
            x: 'Mar',
            y: [1900, 1900]
          },
          {
            x: 'Apr',
            y: [2200, 2200]
          },
        {
          x: 'May',
          y: [2600, 3900]
        },
        {
          x: 'Jun',
          y: [500, 1700]
        },
        {
          x: 'Jul',
          y: [1900, 2300]
        },
        {
          x: 'Aug',
          y: [1000, 1500]
        }
      ]
    }
  ]

  return (
    <div className='p-5 grid gap-4 lg:grid-cols-2'>
      <div className='p-2 bg-white rounded-xl'>
        <Chart options={optionPredict} type='rangeArea' series={seriesPredict} width={'100%'} height={'300px'} />
      </div>
      <div className='p-2 bg-white rounded-xl'>
        <Chart options={optionTreemap} type='treemap' series={seriesTreemap} width={'100%'} height={'300px'} />
      </div>
    </div>
  )
}

export default Component