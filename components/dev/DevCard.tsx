import Image from 'next/image';
import blurCard from '@/public/image/dev/blurCard.svg';

const DevCard = () => {
  return (
    <div className="relative w-[328px] h-[172px] pad:w-[384px] pad:h-[210px] dt:w-[384px] dt:h-[210px] mx-auto">
      <Image src={blurCard} alt="blurCard" />
    </div>
  );
};

export default DevCard;
