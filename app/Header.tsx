import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-blue-500 font-semibold flex flex-row-reverse justify-between px-20 py-4'>
      <p className='font-semibold text-center'>This Header</p>
      <div className='flex justify-between w-1/12'>
        <Link href='/' className='bg-white text-blue-500 rounded'>
          Home
        </Link>
        <Link href='/todos' className='bg-white text-blue-500 rounded'>
          Todos For Future Project
        </Link>
      </div>
    </div>
  )
}
