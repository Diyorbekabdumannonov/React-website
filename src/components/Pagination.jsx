import React from 'react'
import { useState } from 'react'
import left from './../assets/left.png'
import right from './../assets/right.png'

export default function Pagination() {
    const [page, setPage] = useState(1)
    const nums = [
        { n: 1 },
        { n: 2 },
        { n: 3 },
        { n: 4 },
        { n: 5 },
        { n: 6 },
        { n: 7 },
    ]
    return (
        <div className='flex items-center font-normal text-[#464D61] mt-[60px] justify-between w-full sm:w-[332px] mx-auto px-4 sm:px-0'>
            <img src={left} alt="left" onClick={() => (setPage(page - 1))} className={'cursor-pointer mr-[40px]'}/>
            {nums.map(num => {
                return <p key={num.n} className={'cursor-pointer w-[28px] h-[28px] flex items-center justify-center  rounded-[8px] ' + (page === num.n ? 'bg-blue-medium text-white' : '')} onClick={() => setPage(num.n)}>{num.n}</p>
            })}
            <img src={right} alt="right" onClick={() => setPage(page + 1)} className={'cursor-pointer ml-[40px]'}/>
        </div>
    )
}
