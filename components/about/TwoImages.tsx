import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TwoImageProps {
  imageSrc1: StaticImageData;
  altText1: string;
  imageSrc2: StaticImageData;
  altText2: string;
}

const TwoImages: React.FC<TwoImageProps> = ({
  imageSrc1,
  altText1,
  imageSrc2,
  altText2,
}) => {
  return (
    <div className="ml-6">
      <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
        <Image
          src={imageSrc1}
          alt={altText1}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden">
        <Image
          src={imageSrc2}
          alt={altText2}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
export default TwoImages;
