import React from 'react'
import reward from './../../assets/reward.png'

export default function ShortCard({ element }) {
    return (
        <div className='bg-white flex items-center flex-col sm:flex-row cursor-pointer rounded-[16px] p-[20px] hover:bg-[#DEE6EB]' style={{
            boxShadow: '0px 2px 20px rgba(23, 87, 123, 0.2)'
        }}>
            <div className='rounded-[100px] w-[50px] h-[50px] flex items-center justify-center' style={{ background: 'linear-gradient(155.29deg, #90D1CC 3.46%, #418E84 110.38%)' }}>
                <img className='w-[25px]' src={element.img} alt={element.img} />
            </div>
            <div className='ml-[14px] md:w-[90%]'>
                <div className='flex items-center'>
                    <h3 className='text-[28px] font-bold text-blue-medium' >{element.title}</h3>
                    {(element.certificated === 1) ? (
                        <img src={reward} alt="reward" className='ml-[11px]' />
                    ) : (
                        <div className='flex ml-[11px]'>
                            <img src={reward} alt="reward" />
                            <img src={reward} alt="reward" />
                            <img src={reward} alt="reward" />
                        </div>
                    )}
                </div>
                <h4 className='mt-[14px] text-[14px] font-medium text-blue-medium'>{element.text}</h4>
            </div>
        </div>
    )
}
