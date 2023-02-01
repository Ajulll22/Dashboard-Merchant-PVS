import React from 'react'
import { BsFillCalculatorFill } from 'react-icons/bs'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { AiOutlineTransaction } from 'react-icons/ai'
import { TbCalculatorOff } from 'react-icons/tb'
import Summary from '../components/Home/Summary'

export type SummaryType = {
  title:string
  count:string
  class:string
  icon:JSX.Element
  percentage:string
  compare:string
}

const Home = () => {
  const SummaryList:SummaryType[] = [
    {
      title: "Terminal",
      count: "2,821",
      class: "bg-u0 shadow-blue-400",
      icon: <BsFillCalculatorFill size={25} />,
      percentage: "100%",
      compare: "From Total"
    }, {
      title: "Terminal",
      count: "2,821",
      class: "bg-u1 shadow-green-400",
      icon: <RiMoneyDollarCircleFill size={25} />,
      percentage: "100%",
      compare: "From Total"
    }, {
      title: "Terminal",
      count: "2,821",
      class: "bg-u2 shadow-orange-600",
      icon: <AiOutlineTransaction size={25} />,
      percentage: "100%",
      compare: "From Total"
    }, {
      title: "Terminal",
      count: "2,821",
      class: "bg-u3 shadow-pink-400",
      icon: <TbCalculatorOff size={25} />,
      percentage: "100%",
      compare: "From Total"
    }
  ]

  return (
    <div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-5' >

        {SummaryList.map((val, index) => (
          <div key={index} className='mx-5 mt-8'>
            <Summary {...val} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home