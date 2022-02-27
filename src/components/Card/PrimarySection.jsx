import React from 'react'
import starRating from './../../assets/Star Rating.png'

export default function PrimarySection({ element }) {
    return (
        <div className='flex flex-col ml-0 sm:ml-[40px]'>
            <h3 className='text-[28px] font-bold text-blue-medium' >{element.title}</h3>
            <div className='flex items-center mt-[10px] mb-[14px]'>
                <h3 className='text-[14px] text-[#808C9A] font-normal flex items-center'>
                    <img src={starRating} alt="starrating" className='mr-[6px]' />
                    (100)
                </h3>
                <h3 className='ml-[40px] text-[14px] font-normal text-blue-medium'>Status</h3>
                <img src={element.prImg} alt={element.prImg} className='ml-[40px]' />
            </div>
            <h4 className='mt-[14px] text-[14px] font-medium text-blue-medium'>{element.text}</h4>
            <div className='w-full flex mt-[17px] justify-between items-center flex-col sm:flex-row'>
                <button className='py-[5.5px] px-[20px] bg-[#DFE6EB] font-medium text-[14px] text-blue-medium changeOnHover '>Source system</button>
                <h3 className='text-[14px] font-normal text-blue-medium my-[10px] sm:my-0'>Curated</h3>
                <div className='flex'>
                    <p className='text-[#808C9A] text-[14px] font-normal'>By</p>
                    <h3 className='ml-[4px] text-blue-medium text-[14px] font-normal border-b border-b-gray-700'>John Smith</h3>
                </div>
            </div>
        </div>
    )
}
