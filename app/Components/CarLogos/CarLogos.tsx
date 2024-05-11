import Image, { StaticImageData } from 'next/image'
import BgOverview from '@/public/bg-overview.jpeg'

import React, { useRef } from 'react'
import { title } from 'process'
import { useScroll, useTransform } from 'framer-motion'
import { Meteors } from "../ui/meteors";

function CarLogos() {
    return (

        <div className=" relative content-center sm:w-full  bg-[black] h-[100vh]  sm:px-28   md:py-0 "
            // style={{
            //     backgroundImage: `url(${`bg-overview.jpeg`})`, // Replace BgOverview with your actual variable name for the background image
            //     backgroundSize: 'cover', // Adjust as needed
            //     backgroundPosition: 'center', // Adjust as needed
            // }}
        >
            <div className=" grid  sm:left-28 sm:relative grid-rows sm:grid-rows-0 grid-cols-2 sm:grid-cols-3  gap-4 sm:gap-8     ">

                <div className="  grid grid-rows-5 grid-flow-col gap-4 sm:gap-10  ">
                    <div className=" ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px] '
                            src="/tata-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif  text-white  text-[18px] sm:text-4xl '>Tata</h1>
                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/tota.jpeg"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white   '>Toyota</h1>
                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/mahindra2-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white   '>Mahindra</h1>
                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/suzuki-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white   '>Suzuki</h1>

                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/honda-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white  '>Honda</h1>

                    </div>
                </div>
                <div className="  grid grid-rows-5 grid-flow-col gap-4 sm:gap-10   ">
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]  '
                            src="/wol1.jpg"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white  '>Volkswagen</h1>

                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] px-1= items-start sm:w[90] w-[45px]'
                            src="/hyundai-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white  '>Hyundai</h1>

                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px] border-[white] border-[2px]'
                            src="/jeep1.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white   '>Jeep</h1>

                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/force-logo.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white   '>Force</h1>

                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/nissan11.jpg"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white  '>Nissan</h1>

                    </div>
                </div>
                <div className="  grid grid-rows-3 sm:grid-rows-5 grid-flow-col gap-4 sm:gap-10   ">

                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px] border-[white] border-[2px]'
                            src="/kia1.png"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white  '>Kia</h1>

                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/skoda-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl  text-white   '>Skoda</h1>

                    </div>
                    <div className="ml-2 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] py-2 rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/mg-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white   '>MG</h1>

                    </div>
                    <div className="ml-3 sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/citroen-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white  '>Citroen</h1>

                    </div>
                    <div className="ml-3    sm:ml-0 w-40 sm:w-80 flex items-center justify-around border-[white] border-[2px] bg-[black] rounded-2xl  ">

                        <Image
                            className='rounded-[50%] sm:w[90] w-[45px]'
                            src="/renault-logo.webp"
                            alt="Logo"
                            width={90}
                            height={10}
                        />
                        <h1 className='font-serif text-[18px] sm:text-4xl text-white '>Renault</h1>
                        <Meteors number={60} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarLogos