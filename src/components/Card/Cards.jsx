import React from 'react'
import Card from './Card'
import coin from './../../assets/coin.png'
import hardware from './../../assets/hardware.png'
import hardware2 from './../../assets/hardware2.png'
import calendar from './../../assets/calendar.png'
import file from './../../assets/file.png'
import green from './../../assets/green.png'
import orange from './../../assets/orange.png'
import red from './../../assets/red.png'
import ShortCard from './../Card/ShortCard'

export default function Cards({ showCard }) {
    const database = [
        {
            img: coin,
            prImg: green,
            certificated: 1,
            title: 'Google Wikimedia Foundation',
            database: 'Database',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '50%'
        },
        {
            img: hardware,
            prImg: red,
            certificated: 1,
            title: 'Title',
            database: 'Dataset',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '60%'
        },
        {
            img: hardware2,
            prImg: orange,
            certificated: 3,
            title: 'Title',
            database: 'Schema',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '75%'
        },
        {
            img: hardware,
            prImg: red,
            certificated: 1,
            title: 'Title',
            database: 'Dataset',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '60%'
        },
        {
            img: calendar,
            prImg: orange,
            certificated: 3,
            title: 'Title',
            database: 'Column',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '75%'
        },
        {
            img: file,
            prImg: green,
            certificated: 1,
            title: 'Title',
            database: 'File',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '80%'
        },
        {
            img: calendar,
            prImg: orange,
            certificated: 3,
            title: 'Title',
            database: 'Table',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '50%'
        },
        {
            img: file,
            prImg: green,
            certificated: 1,
            title: 'Title',
            database: 'Field',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '50%'
        },
        {
            img: calendar,
            prImg: orange,
            certificated: 3,
            title: 'Title',
            database: 'Database',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '50%'
        },
        {
            img: hardware2,
            prImg: red,
            certificated: 1,
            title: 'Title',
            database: 'Database',
            text: 'By May 2016, knowledge boxes were appearing for "roughly one-third" of the 100 billion monthly searches the company processed. Dario Taraborelli, head of research at the Wikimedia Foundation',
            quality: '50%'
        },
    ]
    return (
        <div className='grid gap-[32px] grid-cols-1 max-w-tablet mx-auto xl:grid-cols-2 p-4 md:p-0 card'>
            {database.map((element, index) => {
                if (showCard) {
                   return <Card key={index} element={element} />
                }
                else {
                    return <ShortCard key={index} element={element}/>
                }
            })}
        </div>
    )
}
