import React from 'react'
import './Checkbox.css'

export default function Checkbox({option}) {
    return (
        <label className="container mx-[25px] flex my-[10px] 2xl:my-0 2xl:inline-block">
            <span>{option}</span>
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark"></span>
        </label>
    )
}
