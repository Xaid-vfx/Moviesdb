'use client';
import React, { useEffect } from 'react'

export default function LandingText() {
    useEffect(() => {
        setTimeout(() => {
            const data = document.getElementsByClassName('text1')[0]
            data.classList.toggle('show', true)
            const data2 = document.getElementsByClassName('text2')[0]
            data2.classList.toggle('show', true)
            setTimeout(() => {
                const data3 = ''
                document.getElementsByClassName('description')[0].classList.toggle('show', true)
            }, 1500);
        }, 1000);
    }, [])
    return (
        <div className='z-10'>
            <div className="text-[#64AE9D] text-sm text-center mt-40 title">JET PROTOCOL</div>
            <div className="text-5xl text-center ">
                <div className='my-2 text1'>the next generation of</div>
                <div className='text2'>defi governance</div>
            </div>
            <div className="text-center my-4 text-lg description">
                experience open source, transparent and efficient  <br />borrowing
                and lending on solana.
            
            <div className="flex gap-4 justify-center mt-5">
                <button className='bg-[#64AE9D] text-black py-2 px-5 text-sm rounded-xl button'>read docs</button>
                <button className='text-white border py-2 px-5 text-sm rounded-xl button2'>how it works</button>
            </div>
        </div>
        </div>
    )
}
