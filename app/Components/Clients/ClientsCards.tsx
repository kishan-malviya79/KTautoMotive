import { ClientsCard, Sociallist } from '@/app/Constant/index'
import SocialLogo from '@/app/Constant/SocialLogo'
import SocialLogoLight from '@/app/Constant/SocialLogoLight'
import { loadBindings } from 'next/dist/build/swc'
import Image from 'next/image'
import React from 'react'

interface Ccard {
    src: string
    name: string
    title: string
}

function ClientsCards({ ...v }: Ccard) {
    return (
        <div className="flex justify-between ">
            <div className=" flex flex-col gap-2    " >

                <div className="  h-[517px] w-[362px] border-4 relative  " >
                    <Image
                        layout='fill'
                        src={v.src}
                        alt="img1"
                        
                    />
                </div>
                <div className="flex justify-around items-center bg-[grey] rounded-[12px] ">

                    <div className="flex flex-col  ">
                        <h1 className=" ml-4  text-white font-serif ">{v.name}</h1>
                        <h2 className=" ml-4   text-white font-serif ">{v.title}</h2>
                    </div>
                    <SocialLogoLight />

                </div>
            </div>
        </div>
    )
}

function Clients() {

    return (
        <div
            className="w-full sm:items-center  flex sm:h-screen justify-center sm:flex-row flex-col md:py-0 gap-x-24"
            style={{
                backgroundImage: `url(${`bg-charging.jpeg`})`, // Replace BgOverview with your actual variable name for the background image
                backgroundSize: 'cover', // Adjust as needed
                backgroundPosition: 'center', // Adjust as needed
            }}

        > {/* Adjust gap here */}
            {
                ClientsCard.map((v) => (
                    <ClientsCards
                        key={v.id}
                        {...v}
                    />
                ))
            }
        </div>
    );
}


export default Clients