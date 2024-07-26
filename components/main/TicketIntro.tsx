import Image from 'next/image';
import poster from '@/public/image/ticket/Poster.svg';
import { TicketInfo, TicketButton } from './TicketInfo';
import React from 'react';

interface props {
  className: string;
}

const TicketIntroPad: React.FC<props> = ({ className }) => {
  return (
    <div
      className={`flex flex-row w-full h-auto mt-[32px] gap-[32px] ${className}`}
    >
      <div className="flex shrink-0 relative rounded-[16px] w-[264px] h-[351px] pad:w-[246px] pad:h-[329px] dt:w-[282px] dt:h-[377px]">
        <Image src={poster} alt="poster" layout="fill" />
      </div>
      <div className="flex flex-col justify-end w-full h-auto gap-[32px]">
        <p className="pad:text-[24px] dt:text-[32px] font-semibold">
          깔루아 공연!
          <br />
          홈페이지에서 간편하게 예매하세요
        </p>
        <TicketInfo
          performanceName="2024년 3월 정기 공연"
          place="001 클럽"
          time={['2021', '03', '01', '18']}
          className=""
        />
      </div>
    </div>
  );
};

const TicketIntroPhone: React.FC<props> = ({ className }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div
        className={`flex justify-center relative w-full h-[532px] mt-[24px] ${className}`}
      >
        <div className="flex flex-col items-end w-full absolute top-[64px]">
          <div className="flex h-[100px] w-full bg-primary-50 rounded-t-[32px] rounded-bl-[32px] z-0" />
          <div className="flex h-[105px] w-[120px] bg-primary-50 z-0" />
          <div className="flex h-[262px] w-full bg-primary-50 rounded-b-[32px] rounded-tl-[32px] z-0">
            <TicketInfo
              performanceName="2024년 3월 정기 공연"
              place="001 클럽"
              time={['2021', '03', '01', '18']}
              className=""
            />
          </div>
        </div>

        <div className="flex shrink-0 absolute top-0 rounded-[16px] w-[264px] h-[351px]">
          <Image src={poster} alt="poster" layout="fill" />
        </div>
      </div>
      <TicketButton className="flex mt-[32px]" />
    </div>
  );
};

export { TicketIntroPad, TicketIntroPhone };
