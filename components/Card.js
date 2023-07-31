import Image from 'next/image'
import React from 'react'

export default function Card(props) {
  return (
    <div className='p-10 hover:scale-105 transition-all'>
      <div className='rounded-lg w-[100%] h-[300px]  overflow-hidden flex items-center'>
        <Image 
        loading='lazy'
         src={'https://image.tmdb.org/t/p/original' + props.image} 
         alt='mountain' 
         height={200} 
         width={300}/>
      </div>
      <div className='p-3'>
        <div className='flex justify-between gap-2'>
        <div className='text-base my-2'>{props.name}</div>
        <div className='text-base my-2 text-[#64AE9D]'>{props.vote}</div>
        </div>
        <div className='text-xs text-slate-300'>{props.desc.length > 150 ? props.desc.substring(0, 100) + '...' : props.desc}</div>
      </div>
    </div>
  )
}
