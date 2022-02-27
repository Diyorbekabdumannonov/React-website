import React from 'react'
import Img from './Img'
import search from './../assets/search.png'

export default function Categories() {
    const categories = [
        { text: 'publications' },
        { text: 'publicated' },
        { text: 'publication online' },
        { text: 'publication app' },
        { text: 'publications types' },
        { text: 'digital publications' },
        { text: 'self publication' },
        { text: 'fresh publications' },
        { text: 'web publications' },
    ]

    return (
        <div className='flex justify-between items-center 2xl:justify-center px-4'>
            <div className='flex my-[40px] overflow-hidden items-center mr-4'>
                <div className='flex items-center cursor-pointer  min-w-[max-content]'>
                    <Img src={search} />
                    <h3 className='font-medium text-[14px] text-blue-light ml-[8px]'>Related searches</h3>
                </div>
                {categories.map((element, index) => (
                    <h3 className='font-normal min-w-[max-content] text-[14px] text-blue-medium mx-[16px] border-b-[1px] border-b-[#63ADA6]' key={index}>{element.text}</h3>
                ))}
            </div>
        <button className='bg-gray-medium py-[2px] px-[16px] rounded-[12px]'>...</button>
        </div>
    )
}