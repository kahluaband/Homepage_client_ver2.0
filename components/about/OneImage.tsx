'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Skeleton from './Skeleton';

interface OneImageProps {
  imageSrc: StaticImageData;
  altText: string;
}

const OneImage: React.FC<OneImageProps> = ({ imageSrc, altText }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="ml-6">
      <div className="relative rounded-3xl w-96 h-[470px] overflow-hidden">
        {loading && <Skeleton />}
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="384px"
          priority
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
export default OneImage;
