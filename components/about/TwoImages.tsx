'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Skeleton from './Skeleton';

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
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  return (
    <div className="ml-6">
      <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
        {loading1 && <Skeleton />}
        <Image
          src={imageSrc1}
          alt={altText1}
          fill
          sizes="384px"
          priority
          onLoad={() => {
            setLoading1(false);
          }}
          style={{ display: loading1 ? 'none' : 'block', objectFit: 'cover' }}
        />
      </div>
      <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden">
        {loading2 && <Skeleton />}
        <Image
          src={imageSrc2}
          alt={altText2}
          fill
          sizes="384px"
          priority
          onLoad={() => setLoading2(false)}
          style={{ display: loading2 ? 'none' : 'block', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
export default TwoImages;
