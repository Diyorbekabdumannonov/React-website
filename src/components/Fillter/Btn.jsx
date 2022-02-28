import React from 'react'

export default function Btn({ bgColor, src, rounded, margin, setState, state }) {
    return (
        <button onClick={(e) => {
            if (setState) {
                setState(state)
            }
        }} className={'py-[8px] px-[20px] ' + (rounded === 'full' ? 'rounded-[8px] ' : ' ') + (rounded === 'left' ? 'rounded-l-[8px] ' : ' ') + (rounded === 'right' ? 'rounded-r-[8px] h-[35px] ' : ' ') + (margin ? ' mx-[10px] ' : '') + (bgColor == 'white' ? 'bg-white' : 'bg-blue-medium')}>
            <img src={src} alt={src} />
        </button>
    )
}
