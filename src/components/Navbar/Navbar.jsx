import React, { useState } from 'react'
import logo from './../../assets/logo.png'
import cart from './../../assets/Cart.png'
import notifications from './../../assets/notifications.png'
import user from './../../assets/user.png'
import Img from './../Img'
import SearchTab from './SearchTab'
import MobileMenu from './MobileMenu'
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
    const [NavbarToggled, setNavbarToggled] = useState(false)
    return (
        <>
            <div className='bg-blue-dark'>
                <div className='hidden lg:flex justify-around py-[11px] px-[40px] items-center max-w-desktop mx-auto'>
                    <Img src={logo} width={'48px'} height={'40px'} />
                    <h3 className='navbarLink hidden lg:block'>Home</h3>
                    <h3 className='navbarLink hidden lg:block'>My Work</h3>
                    <SearchTab />
                    <Img src={cart} width={'34px'} height={'31px'} />
                    <Img src={notifications} width={'34px'} height={'31px'} />
                    <Img src={user} width={'34px'} height={'31px'} />
                    <MobileMenu setNavbarToggled={setNavbarToggled} NavbarToggled={NavbarToggled} />
                </div>
            </div>
            <MobileNavbar NavbarToggled={NavbarToggled} setNavbarToggled={setNavbarToggled} />
        </>
    )
}