import menuIcon from './../../assets/menu-icon.png'

export default function MobileMenu({ setNavbarToggled, NavbarToggled }) {
    return (
        <button className='w-[40px] h-[35px] cursor-pointer block lg:hidden' onClick={() => setNavbarToggled(!NavbarToggled)}>
            <img src={menuIcon} alt="menuIcon" />
        </button>
    )
}