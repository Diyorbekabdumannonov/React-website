import React from 'react'
import Btn from './Btn'
import filter from './../../assets/filter.png'
import saved from './../../assets/saved.png'
import Checkbox from './Checkbox'
import image from './../../assets/image.png'
import tile from './../../assets/tile.png'
import imageWhite from './../../assets/image-white.png'
import tileBlue from './../../assets/tile-blue.png'
import { useState } from 'react'

export default function Filter({ showCard, setShowCard }) {
  return (
    <div className='max-w-desktop mx-auto'>
      <div className='bg-gray-medium py-[10px] px-[16px] rounded-[10px] flex flex-col mx-4 xl:flex-row 2xl:items-center justify-between items-start'>
        <div className='mx-auto xl:mx-0'>
          <div className='flex justify-center xl:inline-block'>
            <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-[#DFE6EB] rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
              Open filters
            </div>
            <div data-tooltip-target="tooltip-default" className='inline-block'>
              <Btn src={filter} rounded={"full"} bgColor={'blue-medium'} margin={'10px'} />
            </div>
            <div id="tooltip-default2" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-[#DFE6EB] rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
            My saved filters
            </div>
            <div data-tooltip-target="tooltip-default2" className='inline-block'>
              <Btn src={saved} rounded={"full"} bgColor={'white'} margin={'10px'} />
            </div>
          </div>
          <Checkbox option={'Exact expression (Phrase)'} />
          <Checkbox option={'All words (AND)'} />
          <Checkbox option={'At least one word (OR)'} />
        </div>
        <div className='flex flex-wrap justify-center items-center mx-auto xl:mx-0'>
          <h3 className='font-normal text-[14px] text-blue-medium mr-[8px]'>Sort by</h3>
          <select className='py-[6px] px-[13px] rounded-[8px] outline-none mr-[16px]'>
            <option value="Relevance">Relevance</option>
          </select>
          <div className='flex items-center'>
            <Btn src={showCard ? imageWhite : image} bgColor={showCard ? 'blue-medium' : 'white'} rounded={'left'} state={true} setState={setShowCard} />
            <Btn src={showCard ? tileBlue : tile} bgColor={showCard ? 'white' : 'blue-medium'} rounded={'right'} state={false} setState={setShowCard} />
          </div>
        </div>
      </div>
      <div className='flex items-center my-[28px] mx-4 md:mx-0'>
        <h3 className='mr-[6px] text-[16px] text-blue-medium font-bold'>1 548 </h3>
        <p className='mr-[6px] text-[14px] text-blue-medium font-normal'>results was found </p>
        <p className='text-[14px] text-[#808C9A] font-normal'>0.10 sec </p>
      </div>
    </div>
  )
}
