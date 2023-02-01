import React from 'react'

const Avatar = () => {
    return (
        <div className="p-2">
            <svg className='mx-auto mb-2' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="39.5" stroke="#7176B8" />
                <mask id="mask0_401_48" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="7" y="7" width="66" height="66">
                    <circle cx="40" cy="40.0002" r="32.7273" fill="#7176B8" />
                </mask>
                <g mask="url(#mask0_401_48)">
                    <circle cx="40" cy="40.0002" r="32.7273" fill="#7176B8" />
                    <circle cx="39.9998" cy="29.8187" r="13.8182" fill="#505593" />
                    <circle cx="39.6364" cy="67.273" r="25.0909" fill="#505593" />
                </g>
            </svg>

            <h3 className='text-center text-gray-300 font-bold text-lg' > Username </h3>

        </div>
    )
}

export default Avatar