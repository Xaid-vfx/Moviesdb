import Image from 'next/image'
import Header from '../components/Header'
import Slider from '../components/lowerslider'
import LandingText from '../components/LandingText'
import gradient from '../assets/images/gradient.png'
import Marquee from 'react-fast-marquee'
import image from '../assets/images/image 16.png'

export default function Home() {

  return (
    <main className="bg-black text-white h-[100vh] p-5 mx-auto">
      <Header />
      <div className="flex flex-col items-center">
        <Image
          src={gradient}
          width={785}
          height={540}
          alt='gradient'
          className='gradient -z-10'
        />
        <LandingText />

      </div>
      <Marquee className='mt-20 absolute bottom-0'>
        <Slider />
      </Marquee>
    </main>
  )
}
