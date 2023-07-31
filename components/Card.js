import React from 'react'

export default function Card(props) {
  return (
    <div className=''>
      <div className='rounded-lg w-[100%] h-[300px]  overflow-hidden flex items-center'>
        <img className='' src={'https://image.tmdb.org/t/p/original' + props.image} alt='title' />
      </div>
      <div className='p-3'>
        <div className='text-lg my-2'>{props.name}</div>
        <div className='text-xs'>{props.desc.length > 150 ? props.desc.substring(0, 100) + '...' : props.desc}</div>
      </div>
    </div>
  )
}
