import Image, { StaticImageData } from 'next/image'
import BgOverview from '@/public/bg-overview.jpeg'

import React, { useRef } from 'react'
import { title } from 'process'
import { useScroll, useTransform } from 'framer-motion'


function CarLogos() {
    return (
        
        <div className=" w- sm:w-full  bg-black  h-[100vh]  sm:px-28   md:py-0 "
            style={{
                backgroundImage: `url(${`bg-overview.jpeg`})`, // Replace BgOverview with your actual variable name for the background image
                backgroundSize: 'cover', // Adjust as needed
                backgroundPosition: 'center', // Adjust as needed
            }}
        >



            <div className="flex flex-row   justify-between w-full">

                <div className="  flex flex-col  gap-8 pt-20 ">
                    <div className="flex items-center bg-[#f5b754] rounded-2xl  sm:justify-start  justify-center sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px] '
                            src="/tata-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif  text-black text-[12px] sm:text-4xl '>Tata</h1>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start  justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/toyota-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>Toyota</h1>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/mahindra-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>Mahindra</h1>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/suzuki-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>Suzuki</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/honda-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black '>Honda</h1>
                       
                    </div>
                </div>
                <div className="  flex flex-col gap-8 pt-20 ">
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16  px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/volkswagen-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black '>Volkswagen</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16  px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] px-1= items-start sm:w[90] w-[45px]'
                            src="/hyundai-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black '>Hyundai</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16  px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/jeep-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>Jeep</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16  px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/force-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>Force</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16  px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/nissan-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black '>Nissan</h1>
                       
                    </div>
                </div>
                <div className="  flex flex-col gap-8 pt-20 ">
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6  px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/kia-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>Kia</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/skoda-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>Skoda</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/mg-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black  '>MG</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/citroen-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black '>Citroen</h1>
                       
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl sm:justify-start justify-center  sm:gap-16 mx-6 px-2 py-1 sm:py-45 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/renault-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[12px] sm:text-4xl text-black'>Renault</h1>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarLogos