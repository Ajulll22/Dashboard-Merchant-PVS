import React from 'react'
import { SummaryType } from '../../pages/Home'

const Summary = (props:SummaryType) => {
    return (
        <div className=' bg-white rounded-xl w-full shadow-md' >
            <div className='flex rounded-xl p-4'>
                <div className={`-translate-y-8  shadow-md ${props.class} rounded-xl mr-4 text-white p-4 my-auto`}>
                    {props.icon}
                </div>
                <div className=' w-full text-end'>
                    <h3 className='font-medium opacity-80 text-sm' >{props.title}</h3>
                    <h2 className='font-bold text-2xl' >{props.count}</h2>
                </div>
            </div>
            <hr />
            <div className='p-4' >
                <h1><span className='font-bold text-green-500'>{props.percentage}</span> <span className='font-semibold opacity-80'>{props.compare}</span></h1>
            </div>
        </div>
    )
}

export default Summary