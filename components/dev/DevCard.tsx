import Image from 'next/image';
import blurCard from '@/public/image/dev/blurCard.svg';
import blurCard2 from '@/public/image/dev/blurCard2.svg';

const DevCard = () => {
  return (
    <div className="relative w-[328px] h-[172px] pad:w-[384px] pad:h-[210px] dt:w-[384px] dt:h-[210px] mx-auto">
      <div className="absolute bg-gray-0 rounded-xl flex justify-center items-center pad:w-[92px] pad:h-[92px] w-[68px] h-[68px] mb-3 pad:mb-3"></div>
      <Image
        src={blurCard}
        alt="blurCard"
        layout="fill"
        objectFit="cover"
        className="pad:block ph:hidden"
      />
      <Image
        src={blurCard2}
        alt="blurCard2"
        layout="fill"
        objectFit="cover"
        className="pad:hidden ph:block"
      />
    </div>
  );
};

export default DevCard;
