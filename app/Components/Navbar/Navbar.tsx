import { Sociallist, Sociallistwhite } from '@/app/Constant'
import SocialLogo from '@/app/Constant/SocialLogo'
import SocialLogoLight from '@/app/Constant/SocialLogoLight'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className=' absolute inset-x-0 top-10 flex justify-between items-center h-16 px-4 sm:px-20   '>
      <div className=' w-16 sm:w-60'>
        <Image
          className='rounded-[50%] '
          src="/K&T.jpeg"
          alt="Logo"
          width={100}
          height={10}
        />
      </div>
      <SocialLogoLight />
      {/* <div className='flex gap-6'> 
            <Link href='#'>Air</Link>
            <Link href='#'>Gravity</Link>
            <Link href='#'>Experience</Link>
            <Link href='#'>Contact</Link>
        </div> */}
    </nav>
  )
}


export default Navbar