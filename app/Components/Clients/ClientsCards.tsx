import { ClientsCard, Sociallist } from '@/app/Constant/index'
import SocialLogo from '@/app/Constant/SocialLogo'
import Image from 'next/image'
import React from 'react'

interface Ccard{
    src: string
    name: string
    title: string
  }

function ClientsCards({...v}: Ccard) {
    return (
            <div className="flex justify-between">
                <div className=" flex flex-col gap-5">

                    <div className="h-[517px] w-[384px] border-8 relative " >
                        <Image
                            layout='fill'
                            src={v.src}
                            alt="img1"
                        />
                    </div>
                    <div className="flex justify-between ">

                        <div className="flex flex-col gap-1">
                            <h1>{v.name}</h1>
                            <h2 className="text-[#686767]">{v.title}</h2>
                        </div>
                        <SocialLogo/>
                       
                </div>
            </div>
        </div>
    )
}

function Clients() {
    return (
         <div className="w-full flex justify-center sm:flex-row flex-col md:py-0 gap-6 "> {/* Adjust gap here */}
          {
          ClientsCard.map((v)=> (
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