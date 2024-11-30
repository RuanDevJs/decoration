'use client'

import { Share, InstagramLogo, GithubLogo } from 'phosphor-react'
import React from 'react'

//className='px-32 py-8'

export default function Header() {
  return (
    <header className='lg:max-w-5xl 2xl:max-w-7xl m-auto py-4 h-[100px] flex flex-col justify-center'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='block py-2 px-2 font-fontWorkSans text-xl text-black font-normal tracking-[7px] cursor-pointer border border-transparent hover:border-black rounded transition ease-in-out duration-150'>INTERIOR</h1>
        </div>
        <nav>
          <ul className='flex items-center justify-center gap-3'>
            <li>
              <a href="#" className='block py-2 px-2 hover:text-red-500 border-2 border-transparent hover:border-red-500 rounded-full hover:bg-red-100 transition ease-in-out duration-150'>
                <InstagramLogo size={25} weight='regular' />
              </a>
            </li>
            <li>
              <a href="https://github.com/RuanDevJs" className='block py-2 px-2 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 rounded-full hover:bg-orange-100 transition ease-in-out duration-150'>
                <GithubLogo size={25} weight='regular' />
              </a>
            </li>
            <li>
              <a href="#" className='block py-1.5 px-1.5 hover:text-blue-500 border-2 border-transparent hover:border-blue-500 rounded-full hover:bg-blue-100 transition ease-in-out duration-150'>
                <Share size={25} weight='regular' />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
