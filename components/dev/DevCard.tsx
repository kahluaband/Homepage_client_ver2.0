import { useState, useEffect } from 'react';
import Image from 'next/image';
import blurCard from '@/public/image/dev/blurCard.svg';
import blurCard2 from '@/public/image/dev/blurCard2.svg';

const DevCard: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 360);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-[328px] h-[172px] pad:w-[384px] pad:h-[210px] dt:w-[384px] dt:h-[210px] mx-auto">
      <Image
        src={isSmallScreen ? blurCard2 : blurCard}
        alt="blurCard"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default DevCard;
