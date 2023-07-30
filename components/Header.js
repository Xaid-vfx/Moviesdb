import React from 'react'
import title from '../assets/images/title.png'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='border border-gray-500 rounded-3xl mx-32'>
            <div className='py-3 px-10 flex justify-between items-center'>
                <Image src={title} alt='title' width={100} height={60} />
                <div className='flex w-1/3 justify-around'>
                    <div>products</div>
                    <div>dao</div>
                    <div>build</div>
                    <div>docs</div>
                </div>
                <a href='login'>
                    <button className='bg-[#64AE9D] text-black py-1 px-3 text-sm rounded-xl'>Launch App</button>
                </a>
            </div>
        </div>
    )
}
