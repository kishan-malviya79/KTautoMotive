import React from 'react'
import { Sociallist, Sociallistwhite } from './index'
import Image from 'next/image'


interface SlogoL {
  src: string
  

}

function SlogoL({ ...v }: SlogoL) {
  return (

    <div className=" mx-1 ">

      <Image

        width={25}
        height={25}
        src={v.src}
        alt="img1"
      />
    </div>

  );
}
function SocialLogoLight() {
  return (
    <div className="flex flex-row gap-3 justify-end ">

      {
        Sociallistwhite.map((v) => (
          <SlogoL
            key={v.id}
            {...v}
          />
        ))
      }
    </div>

  )
}

export default SocialLogoLight