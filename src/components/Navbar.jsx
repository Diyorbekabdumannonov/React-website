import React, { useState } from 'react'
import logo from './../assets/logo.png'
import searchIcon from './../assets/search-icon.png'
import cart from './../assets/Cart.png'
import notifications from './../assets/notifications.png'
import user from './../assets/user.png'
import menuIcon from './../assets/menu-icon.png'

export default function Navbar() {
    const [NavbarToggled, setNavbarToggled] = useState(false)
    return (
        <>
            <div className='hidden lg:flex justify-around bg-blue-dark py-[11px] px-[40px] items-center max-w-desktop mx-auto'>
                <div className='w-[48px] h-[40px] cursor-pointer'>
                    <img src={logo} alt="logo" />
                </div>
                <h3 className='navbarLink'>Home</h3>
                <h3 className='navbarLink'>My Work</h3>
                <form className='w-[887px] bg-gray-light rounded-[10px] hidden lg:flex' onSubmit={e => {
                    e.preventDefault()
                    const searchValue = e.target.input.value
                    e.target.input.value = ''
                    console.log(searchValue)
                }}>
                    <select className='m-[1px] cursor-pointer bg-gray-medium py-[11px] px-[13px] outline-none rounded-l-[10px] form-select font-normal text-[14px] text-gray-highter'>
                        <option value="Node type" >Node type</option>
                    </select>
                    <input type="text" name='input' placeholder='Search something...' className='bg-transparent outline-none w-full p-[14px] text-[14px] font-normal text-blue-medium' />
                    <button className='bg-yellow-medium p-[15px] rounded-r-[10px]'>
                        <img src={searchIcon} alt="searchIcon" />
                    </button>
                </form>
                <div className='wMedium'>
                    <img src={cart} alt="cart" />
                </div>
                <div className='wMedium'>
                    <img src={notifications} alt="notifications" />
                </div>
                <div className='wMedium'>
                    <img src={user} alt="user" />
                </div>
                <button className='w-[40px] h-[35px] cursor-pointer block lg:hidden' onClick={() => setNavbarToggled(!NavbarToggled)}>
                    <img src={menuIcon} alt="menuIcon" />
                </button>
            </div>
            <div className='block lg:hidden bg-blue-dark py-[11px] px-[40px] items-center max-w-desktop mx-auto'>
            <div className='flex justify-between'>
            <div className='w-[48px] h-[40px] cursor-pointer'>
                    <img src={logo} alt="logo" />
                </div>
                <button className='w-[40px] h-[35px] cursor-pointer'>
                    <img src={menuIcon} alt="menuIcon" />
                </button>
                </div>
                <h3 className='navbarLink'>Home</h3>
                <h3 className='navbarLink'>My Work</h3>
                <form className='w-[887px] bg-gray-light rounded-[10px] hidden lg:flex' onSubmit={e => {
                    e.preventDefault()
                    const searchValue = e.target.input.value
                    e.target.input.value = ''
                    console.log(searchValue)
                }}>
                    <select className='m-[1px] cursor-pointer bg-gray-medium py-[11px] px-[13px] outline-none rounded-l-[10px] form-select font-normal text-[14px] text-gray-highter'>
                        <option value="Node type" >Node type</option>
                    </select>
                    <input type="text" name='input' placeholder='Search something...' className='bg-transparent outline-none w-full p-[14px] text-[14px] font-normal text-blue-medium' />
                    <button className='bg-yellow-medium p-[15px] rounded-r-[10px]'>
                        <img src={searchIcon} alt="searchIcon" />
                    </button>
                </form>
                <div className='wMedium'>
                    <img src={cart} alt="cart" />
                </div>
                <div className='wMedium'>
                    <img src={notifications} alt="notifications" />
                </div>
                <div className='wMedium'>
                    <img src={user} alt="user" />
                </div>
            </div>
        </>
    )
}