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

                <div className="  flex flex-col gap-8 pt-20 ">
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between sm:gap-16 mx-2 sm:py-3  sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px] '
                            src="/tata-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif  text-black text-[20px] sm:text-4xl '>Tata</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/toyota-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Toyota</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between mx-2 sm:gap-16  sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/mahindra-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Mahindra</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between mx-2 sm:gap-16  sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/suzuki-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Suzuki</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between mx-2 sm:gap-16  sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/honda-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Honda</h1>
                        <div className=""></div>
                    </div>
                </div>
                <div className="  flex flex-col gap-8 pt-20 ">
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/volkswagen-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Volkswagen</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/hyundai-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Hyundai</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/jeep-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Jeep</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/force-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Force</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/nissan-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Nissan</h1>
                        <div className=""></div>
                    </div>
                </div>
                <div className="  flex flex-col gap-8 pt-20 ">
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/kia-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Kia</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/skoda-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Skoda</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/mg-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>MG</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/citroen-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Citroen</h1>
                        <div className=""></div>
                    </div>
                    <div className="flex items-center bg-[#f5b754] rounded-2xl justify-between  sm:gap-16 mx-2 sm:py-3 sm:px-5  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/renault-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[20px] sm:text-4xl text-black text-4xl '>Renault</h1>
                        <div className=""></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarLogos