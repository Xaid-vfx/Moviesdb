import React from 'react'
import Image from 'next/image'
import image1 from '../assets/images/image 16.png'
import image2 from '../assets/images/image 17.png'
import image3 from '../assets/images/image 18.png'
import image4 from '../assets/images/image 19.png'
import image5 from '../assets/images/image 20.png'
import image6 from '../assets/images/image 21.png'
import image7 from '../assets/images/image 22.png'
import image8 from '../assets/images/image 24.png'
import image9 from '../assets/images/image 25.png'
import image10 from '../assets/images/image 26.png'
import image11 from '../assets/images/image 27.png'
import image12 from '../assets/images/image 28.png'

function Slider() {
    return (
        <div className='flex items-center w-full gap-8 px-4 my-10 opacity-60'>
            <Image src={image1} alt='Paradigm' />
            <Image src={image2} alt='reciprocal' />
            <Image src={image3} alt='Sino capital' />
            <Image src={image4} alt='CMS Capital' />
            <Image src={image5} alt='Solana' />
            <Image src={image6} alt='Parafi' />
            <Image src={image7} alt='Kenetic' />
            <Image src={image9} alt='Stable Node' />
            <Image src={image10} alt='Stable Node' />
            <Image src={image11} alt='Stable Node' />
            <Image src={image12} alt='Stable Node' />
            <Image src={image7} alt='Kenetic' />
            <Image src={image5} alt='Solana' />
        </div>
    )
}

export default Slider