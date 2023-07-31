import React from 'react'
import './Skeleton.css'

export default function Card(props) {
    return (
        <div className='p-10'>
            <div className='skeleton rounded-3xl border w-[100%] h-[300px]  overflow-hidden flex items-center'>
                <img className='' src={''} />
            </div>
            <div className='p-3'>
                <div className='text-lg my-2'>
                    <div className='skeleton w-full h-6 rounded-xl'></div>
                </div>
                <div className='text-xs flex flex-col gap-2'>
                    <div className='skeleton w-full h-2 rounded-xl'></div>
                    <div className='skeleton w-full h-2 rounded-xl'></div>
                    <div className='skeleton w-full h-2 rounded-xl'></div>
                    <div className='skeleton w-1/2 h-2 rounded-xl'></div>
                </div>
            </div>
        </div>
    )
}
