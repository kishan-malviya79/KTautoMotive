import React from 'react'
import { Sociallist } from './index'
import Image from 'next/image'


interface Slogo {
  src: string

}

function Slogos({ ...v }: Slogo) {
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
function SocialLogo() {
  return (
    <div className="flex flex-row gap-3 justify-end ">

      {
        Sociallist.map((v) => (
          <Slogos
            key={v.id}
            {...v}
          />
        ))
      }
    </div>

  )
}

export default SocialLogo