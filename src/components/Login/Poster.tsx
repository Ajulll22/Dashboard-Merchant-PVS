import React from 'react'

const Poster = () => {
    return (
        <div className='border h-full border-blue-900 mx-5'>
            <div className='h-full border-blue-900 bg-white translate-x-5 translate-y-5'>
                <img src="/src/assets/login.png" className='w-full h-full' />
                <div className='translate-x-5 translate-y-5 bg-white absolute bottom-0 right-0 h-1/6 border w-1/2 border-blue-900'>
                </div>
            </div>
        </div>
    )
}

export default Poster