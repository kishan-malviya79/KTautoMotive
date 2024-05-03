import Image from 'next/image'
import BgOverview from '@/public/bg-overview.jpeg'

import React from 'react'

function CarLogos() {
    return (
        <div>

            <div className="w-full   h-[100vh]  px-28  md:py-0 ">
                <div className="flex flex-row ">
                    <div className="flex items-center justify-between gap-20     ">

                        <Image
                            className='rounded-[50%]'
                            src="/K&T.jpeg"
                            alt="Logo"
                            width={100}
                            height={10}
                        />
                        <h1>Toyota</h1>
                        <div className=""></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarLogos