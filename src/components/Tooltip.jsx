import React from 'react'

export default function Tooltip({ bgColor, option }) {
    return (
        <div className={'py-[7px] px-[12px] text-blue-medium font-normal text-[12px] '+(bgColor=='gray'?'bg-[#DFE6EB]':'bg-white')}>
            {option}
        </div>
    )
}