import Image from 'next/image';
import blurCard from '@/public/image/dev/blurCard.svg';
import blurCard2 from '@/public/image/dev/blurCard2.svg';
import school from '@/public/image/dev/school.svg';
import github from '@/public/image/dev/github.svg';
import GY from '@/public/image/dev/GY.avif';
import SY from '@/public/image/dev/SY.avif';
import SW from '@/public/image/dev/SW.avif';
import JE from '@/public/image/dev/JE.avif';
import JY from '@/public/image/dev/JY.avif';
import GH from '@/public/image/dev/GH.avif';
import GR from '@/public/image/dev/GR.avif';

const DevCard = () => {
  return (
    <div className="relative w-[328px] h-[172px] pad:w-[384px] pad:h-[210px] dt:w-[384px] dt:h-[210px] mx-auto">
      <div className="absolute bg-gray-0 rounded-xl flex justify-center items-center pad:w-[92px] pad:h-[92px] w-[68px] h-[68px] mb-3 pad:mb-3">
        <Image
          src={SY}
          alt="GaYoung"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="relative w-full h-full">
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
          className="ph:block pad:hidden"
        />
        <div className="absolute w-full h-full flex">
          <p className="absolute top-[19px] left-[104px] text-xl pad:top-[20px] pad:left-[128px] pad:text-2xl leading-normal text-gray-0 font-semibold">
            심수연
          </p>
          <p className="absolute top-[56px] left-[104px] text-base pad:top-[60px] pad:left-[128px] pad:text-lg leading-normal text-gray-40 font-medium">
            프론트엔드 · 백엔드
          </p>
          <div className="absolute top-[96px] left-[20px] pad:top-[126px] pad:left-[24px]">
            <Image src={school} alt="school" />
          </div>
          <p className="absolute top-[96px] left-[52px] text-base pad:top-[124px] pad:left-[56px] pad:text-lg leading-normal text-gray-40 font-medium">
            홍익대학교 컴퓨터공학과 20학번
          </p>
          <div className="absolute top-[132px] left-[20px] pad:top-[165px] pad:left-[24px]">
            <Image src={github} alt="github" />
          </div>
          <a
            href="https://github.com/letthem"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[132px] left-[52px] text-base pad:top-[163px] pad:left-[56px] pad:text-lg leading-normal text-gray-40 font-medium hover:text-gray-20"
          >
            @letthem
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
