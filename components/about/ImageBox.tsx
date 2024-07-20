'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Skeleton from './Skeleton';

interface ImageProps {
  imageSrc: StaticImageData;
  altText: string;
  width: string;
  height: string;
}

const ImageBox: React.FC<ImageProps> = ({
  imageSrc,
  altText,
  width,
  height,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative rounded-3xl ${width} ${height} overflow-hidden`}>
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
  );
};
export default ImageBox;
