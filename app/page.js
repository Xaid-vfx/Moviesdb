import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <main className="bg-black text-white h-[100vh] p-5 mx-auto">
      <div className="flex flex-col">
        <Header />
        <div className="text-[#64AE9D] text-sm text-center mt-32">JET PROTOCOL</div>
        <div className="text-5xl text-center ">
          <div>the next generation of</div>
          <div>defi governanve</div>
        </div>
        <div className="text-center my-4 text-slate-400 text-base">
          experience open source, transparent and efficient borrowing
          <br /> and lending on solana.
        </div>
        <div className="flex gap-4 justify-center mt-5">
          <button className='bg-[#64AE9D] text-black py-1 px-3 text-sm rounded-xl'>read docs</button>
          <button className='text-white border py-1 px-3 text-sm rounded-xl'>how it works</button>
        </div>
      </div>
    </main>
  )
}
