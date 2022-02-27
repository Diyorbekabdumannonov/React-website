import React from 'react'
import union from './../../assets/Union.png'
import pin from './../../assets/pin.png'
import share from './../../assets/share.png'
import scan from './../../assets/scan.png'

export default function CardInfo() {
    return (
        <div className='flex item-center flex-row sm:flex-col justify-between w-full mt-[20px] sm:mt-0 sm:w-[79px] h-[100%] sm:ml-[28px]'>
            <img src={union} alt="union"  className='cursor-pointer'/>
            <img src={pin} alt="pin"  className='cursor-pointer'/>
            <img src={share} alt="share"  className='cursor-pointer'/>
            <img src={scan} alt="scan" className='cursor-pointer' />
        </div>
    )
}
