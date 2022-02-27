import React from 'react'

export default function Chart({ element }) {
    return (
        <>
            <svg className='mt-[16px]' width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.4104 11C4.60686 6.33923 10.5335 3 17.5 3C24.4665 3 30.3931 6.33923 32.5895 11" stroke="#123B64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.4104 11C4.60686 6.33923 10.5335 3 17.5 3C20.4143 3 23.1466 3.58437 25.5 4.6054" stroke="#FE413B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className='font-bold text-[12px] text-blue-medium -mt-[15px] ml-[5px]'>{element.quality}</p>
            <div className='flex items-center mt-[14px]'>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 9L1.5 5L5.5 1" stroke="#FE413B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='font-bold text-[12px] text-blue-medium ml-[5px]'>{element.quality}</p>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 9L5.5 5L1.5 1" stroke="#FE413B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </>
    )
}
