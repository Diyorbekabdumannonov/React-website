import React from 'react'

export default function Categories() {
    const categories = [
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
        { text: 'publications' },
    ]

    return (
        <div className='flex'>
            {categories.map((element, index) => (
                <h3 key={index}>{element.text}</h3>
            ))}
        </div>
    )
}