import React from 'react'
import obj from './export'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='flex w-full h-[80px] items-center p-4 bg-white shadow-lg border-2'>
      <h1 className='text-black font-bold text-2xl'>Kdemy</h1>
      <div className='ml-5 border-l-2 border-opacity-20 border-solid  h-[50px]'></div>
      <div className='p-2 flex items-center h-full w-3/4'>
        <Image src={obj.search} alt='search'/>
        <input type='text' className='ml-2 h-full w-full outline-none' placeholder='Szybkie wyszukiwanie'/>
      </div>
      <div className='flex items-center justify-end w-1/4'>
        <button className='bg-[#0EA5E9] text-white rounded-xl px-4 h-[49px]'>Dodaj materiały</button>
        <div className='ml-5 border-l-2 border-opacity-20 border-solid  h-[50px]'></div>
        <Image src={obj.bell} className='ml-4 cursor-pointer object-contain' alt='bell'/>
        <Image src={obj.user} width={35} height={35} className='ml-4 cursor-pointer object-contain ' alt='user'/>
      </div>
    </nav>
  )
}
