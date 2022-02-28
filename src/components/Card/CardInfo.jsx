import React from 'react'
import union from './../../assets/Union.png'
import pin from './../../assets/pin.png'
import share from './../../assets/share.png'
import scan from './../../assets/scan.png'

export default function CardInfo() {
    return (
        <div className='flex item-center flex-row sm:flex-col justify-between w-full mt-[20px] sm:mt-0 sm:w-[79px] h-[100%] sm:ml-[28px]'>
            <div id="tooltip-default5" role="tooltip5" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-white rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip" style={{boxShadow: '0px 2px 8px rgba(12, 8, 21, 0.2)'}}>
            ➕  Add to card
            </div>
            <div data-tooltip-target="tooltip-default5" className='inline-block'>
                <img src={union} alt="union" className='cursor-pointer' />
            </div>
            <div id="tooltip-default6" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-white rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip" style={{boxShadow: '0px 2px 8px rgba(12, 8, 21, 0.2)'}}>
            ➕  Add to Saved
            </div>
            <div data-tooltip-target="tooltip-default6" className='inline-block'>
                <img src={pin} alt="union" className='cursor-pointer' />
            </div>
            <div id="tooltip-default3" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-white rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip" style={{boxShadow: '0px 2px 8px rgba(12, 8, 21, 0.2)'}}>
            Share
            </div>
            <div data-tooltip-target="tooltip-default3" className='inline-block'>
                <img src={share} alt="union" className='cursor-pointer' />
            </div>
            <div id="tooltip-default4" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-white rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip" style={{boxShadow: '0px 2px 8px rgba(12, 8, 21, 0.2)'}}>
            View Node
            </div>
            <div data-tooltip-target="tooltip-default4" className='inline-block'>
                <img src={scan} alt="union" className='cursor-pointer' />
            </div>
        </div>
    )
}
