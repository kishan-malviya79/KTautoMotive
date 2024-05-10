import Image from 'next/image'
import React from 'react'

function Clients() {
    return (
        <div className="w-full  md:w-[1440px] mx-auto px-28 md:py-0">
            <div className="flex justify-between gap-[4.5rem]  w-full ">
                <div className=" flex flex-col gap-4">

                    <h1 className='text-[48px] w-[13ch]  leading-[56px] font-extrabold opacity-80' >HEAR WHAT OUR CLIENTS HAVE<br /> TO SAY

                    </h1>
                    <p className='text-[16px] w-[40ch] '> Discover the Experiences and Feedback from Our Valued Clients</p>
                    <div>
                        <button className="bg-black hover:bg-white border border-black text-white hover:text-black font-bold py-2 px-4 rounded">
                            VIEW PRODUCTS
                        </button>
                    </div>
                </div>
                <div className="h-[495px] w-[385px]  relative " >
                    <Image
                        layout='fill'
                        src="https://assets-global.website-files.com/65f7ff46f33ea969ed86f3af/65fa62170412abc870c22045_Solution%20Image.webp"
                        alt="img1"
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                    <p className=' text -[16px] w-[27ch]'>Working with Artlytical Architecture was an absolute pleasure. From start to finish, the team was professional, knowledgeable, and always had our best interests in mind. The finished product exceeded our expectations and we couldn't be happier with the result. Thanks, Artlytical!"</p>
                    <h1 className=' text-[18px] leading-4 text-[#333333] '>JENNY WILSON</h1>
                    <h2 className=' text-[#686767]'>McDonald's</h2>
                </div>
            </div>  
        </div>
    )
}

export default Clients