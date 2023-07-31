import title from '../assets/images/title.png'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='border border-gray-500 rounded-3xl mx-32 header'>
            <div className='py-3 px-10 flex justify-between items-center'>
                <Image src={title} alt='title' width={100} height={60} />
                <div className='flex w-1/3 justify-around subheader'>
                    <div>products</div>
                    <div>dao</div>
                    <div>build</div>
                    <div>docs</div>
                </div>
                <a href='login'>
                    <button className='bg-[#64AE9D] button text-black py-2 px-5 text-sm rounded-xl'>launch app</button>
                </a>
            </div>
        </div>
    )
}
