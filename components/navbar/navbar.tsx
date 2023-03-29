import React from 'react'
import obj from './export'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='flex w-full h-[90px] items-center p-4'>
        <h1 className='text-black font-bold text-2xl'>Kdemy</h1>
        <div className='ml-5 border-l-2 border-opacity-20 border-solid  h-[50px]'></div>
        <div className='p-2 flex items-center h-full w-3/4'>
            <Image src={obj.search} alt='search'/>
            <input type='text' className='ml-2 h-full w-full outline-none' placeholder='Szybkie wyszukiwanie'/>
        </div>
        <div className='flex w-1/4'>
            <button className='bg-[#0EA5E9] text-white rounded-xl w-[179px] h-[49px]'>Dodaj materiał</button>
            <div className='ml-5 border-l-2 border-opacity-20 border-solid  h-[50px]'></div>
            <Image src={obj.bell} className=' ml-4 cursor-pointer object-scale-down' alt='bell'/>
           {/*Jak to wrzuce to mafidznie 3 powyzsze rzeczy znikaja <Image src={obj.user} alt='user'/>*/}
        </div>
    </nav>
  )
}
