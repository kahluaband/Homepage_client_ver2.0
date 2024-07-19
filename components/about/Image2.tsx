'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Skeleton from './Skeleton';

interface Image2Props {
  imageSrc: StaticImageData;
  altText: string;
}

const Image2: React.FC<Image2Props> = ({
  imageSrc,
  altText,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    
      <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
        {loading && <Skeleton />}
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="384px"
          priority
          onLoad={() => {
            setLoading(false);
          }}
          style={{ display: loading ? 'none' : 'block', objectFit: 'cover' }}
        />
      </div>
  );
};
export default Image2;
