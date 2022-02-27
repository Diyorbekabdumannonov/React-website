import React from 'react'

export default function Footer() {
  return (
    <div className='bg-blue-dark'>
      <div className='max-w-desktop mx-auto py-[30px] px-[40px] flex flex-col sm:flex-row justify-between mt-[100px] font-normal text-[14px] text-[#CCD1D7]'>
        <div></div>
        <p>Copyright © 2022 Inc. All rights reserved.</p>
        <div className='flex items-center'>
          <p className='mr-[24px] cursor-pointer'>Privacy Policy</p>
          <p className='cursor-pointer'>Terms of Service</p>
        </div>
      </div>
    </div>
  )
}
