import cart from './../../assets/Cart.png'
import notifications from './../../assets/notifications.png'
import user from './../../assets/user.png'
import Img from './../Img'
import SearchTab from './SearchTab'
import logo from './../../assets/logo.png'
import MobileMenu from './MobileMenu'

export default function MobileNavbar({ setNavbarToggled, NavbarToggled }) {
    return (
        <div className={'lg:hidden bg-blue-dark py-[11px] px-[40px] items-center max-w-desktop mx-auto'}>
            <div className='flex justify-between'>
                <Img src={logo} width={'48px'} height={'39px'} />
                <MobileMenu setNavbarToggled={setNavbarToggled} NavbarToggled={NavbarToggled} />
            </div>
            <div className={'text-center ' + (NavbarToggled ? 'block' : 'hidden')}>
                <div className='flex justify-evenly flex-col sm:flex-row my-[10px]'>
                    <h3 className='navbarLink'>Home</h3>
                    <h3 className='navbarLink'>My Work</h3>
                    <div className='flex justify-around w-full sm:w-1/3 mx-auto sm:mx-0'>
                        <Img src={cart} width={'34px'} height={'31px'} />
                        <Img src={notifications} width={'34px'} height={'31px'} />
                        <Img src={user} width={'34px'} height={'31px'} />
                    </div>
                </div>
            </div>
            <div className={(NavbarToggled ? 'block' : 'hidden')}>
                <SearchTab />
            </div>
        </div>
    )
}