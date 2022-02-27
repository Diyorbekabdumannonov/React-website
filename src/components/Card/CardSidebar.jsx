import React from 'react'
import reward from './../../assets/reward.png'
import Chart from './Chart'

export default function CardSidebar({ element }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-[110px] h-[110px] flex items-center justify-center flex-col rounded-[100px]' style={{ background: 'linear-gradient(155.29deg, #90D1CC 3.46%, #418E84 110.38%)' }}>
                <img className='mt-auto' src={element.img} alt={element.img} />
                <div className='mt-auto py-[2px] px-2 rounded-[4px] bg-[#DFE6EB] changeOnHover font-normal text-[12px] text-blue-medium'>
                    {element.database}
                </div>
            </div>
            {(element.certificated === 1) ? (
                <img src={reward} alt="reward" className='mt-[26px]' />
            ) : (
                <div className='flex mt-[26px]'>
                    <img src={reward} alt="reward" />
                    <img src={reward} alt="reward" />
                    <img src={reward} alt="reward" />
                </div>
            )}
            <h3 className='mt-[2px] text-[14px] font-normal text-[#808C9A]'>Certified</h3>
            <Chart element={element} />
        </div>
    )
}
