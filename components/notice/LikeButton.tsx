import React, { useState } from 'react';
import Image from 'next/image';
import FullHeart from '@/public/image/notice/FullHeart.svg';
import EmptyHeart from '@/public/image/notice/EmptyHeart.svg';

interface LikeButtonProps {
  initialCount?: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ initialCount = 0 }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [heartCount, setHeartCount] = useState(initialCount);

  const handleToggle = () => {
    setIsFilled((prev) => !prev);
    setHeartCount((prev) => (isFilled ? prev - 1 : prev + 1));
  };

  return (
    <button
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleToggle}
    >
      <Image
        src={isFilled ? FullHeart : EmptyHeart}
        alt="Heart Icon"
        width={24}
        height={24}
      />
      <span>{heartCount}</span>
    </button>
  );
};

export default LikeButton;
