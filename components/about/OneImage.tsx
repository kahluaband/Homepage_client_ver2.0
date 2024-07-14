import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface OneImageProps {
  imageSrc: StaticImageData;
  altText: string;
}

const OneImage: React.FC<OneImageProps> = ({ imageSrc, altText }) => {
  return (
    <div className="ml-6">
      <div className="relative rounded-3xl w-96 h-[470px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
export default OneImage;
