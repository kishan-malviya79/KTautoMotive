import React from 'react';
import { Sociallist, Sociallistwhite } from './index';
import Image from 'next/image';

interface SlogoL {
  id: number; // Assuming the id is of type number
  src: string;
  link: string; // Add a new property for the social media link
}

function SlogoL({ id, src, link }: SlogoL) {
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

function SocialLogoLight() {
  return (
    <div className="flex flex-row gap-3 justify-end">
      {Sociallistwhite.map((v) => (
        <SlogoL
          key={v.id}
          id={v.id}
          src={v.src}
          link={v.link}
        />
      ))}
    </div>
  );
}

export default SocialLogoLight;
