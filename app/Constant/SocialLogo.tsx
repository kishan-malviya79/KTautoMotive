import React from 'react';
import { Sociallist } from './index';
import Image from 'next/image';

interface Slogo {
  id: number; // Assuming the id is of type number
  src: string;
  link: string; // Add a new property for the social media link
}

function Slogos({ id, src, link }: Slogo) {
  const handleClick = () => {
    window.open(link, '_blank'); // Open the social media link in a new tab
  };

  return (
    <div className="mx-1" onClick={handleClick}>
      <Image
        width={25}
        height={25}
        src={src}
        alt={`img${id}`} // Use id to generate a unique alt text
      />
    </div>
  );
}

function SocialLogo() {
  return (
    <div className="flex flex-row gap-3 justify-end" >
      {Sociallist.map((v) => (
        <Slogos
          key={v.id}
          id={v.id}
          src={v.src}
          link={v.link}
        />
      ))}
    </div>
  );
}

export default SocialLogo;
