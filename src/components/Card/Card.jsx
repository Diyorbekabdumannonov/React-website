import React from 'react'
import CardInfo from './CardInfo'
import PrimarySection from './PrimarySection'
import CardSidebar from './CardSidebar'

export default function Card({ element }) {
    return (
        <div className='bg-white flex items-center flex-col sm:flex-row cursor-pointer rounded-[16px] p-[20px] hover:bg-[#DEE6EB]' style={{
            boxShadow: '0px 2px 20px rgba(23, 87, 123, 0.2)'
        }}>
            <CardSidebar element={element}/>
            <PrimarySection element={element} />
            <CardInfo />
        </div >
    )
}
