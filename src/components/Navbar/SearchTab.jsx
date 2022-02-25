import { useState } from "react"
import searchIcon from './../../assets/search-icon.png'
import Select from './Select'


export default function SearchTab({ setNavbarToggled, NavbarToggled }) {
    const [searchValue, setSearchValue] = useState('')
    function onSubmit(e) {
        e.preventDefault()
        setSearchValue(e.target.input.value)
    }
    return (
        <form className={'lg:w-[600px] xl:w-[887px] w-full bg-gray-light rounded-[10px] flex'} onSubmit={onSubmit}>
            <Select />
            <input type="text" name='input' placeholder='Search something...' className='bg-transparent outline-none w-full p-[14px] text-[14px] font-normal text-blue-medium' />
            <button className='bg-yellow-medium p-[15px] rounded-r-[10px]'>
                <img src={searchIcon} alt="searchIcon" />
            </button>
        </form>
    )
}