'use client';
import Image from 'next/image';
import logo_white from '@/public/image/KAHLUA.svg';
import DevCard from '@/components/dev/DevCard';
import { useEffect, useState } from 'react';

const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // redering과정에서 document를 사용할 수 없어서 발생하는 문제 해결
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setIsScrolled(true);
    });
  }, []);

  return (
    <div className="relative">
      {isScrolled && (
        <div className="flex w-full h-[64px] fixed z-10 blur-lg backdrop-blur-sm top-0" />
      )}
      <div className="flex top-0 justify-center h-[322px] pad:h-[753px] dt:h-[480px] w-full bg-performance bg-center text-gray-0">
        <div className="flex flex-col dt:mt-[184px] pad:mt-[152px] mt-[120px] items-center text-center w-full pad:w-[786px] dt:w-[1200px]">
          <div className="flex relative pad:w-[376px] pad:h-[64px] w-[235px] h-[40px]">
            <Image src={logo_white} layout="fill" alt="logo" />
          </div>
          <p className="dt:text-[32px] font-semibold text-gray-10 pad:text-[24px] text-[20px] leading-normal dt:mt-6 mt-8">
            DEVELOPERS
          </p>
        </div>
      </div>
      <div className="bg-gray-90 w-full h-screen"></div>
      <div className="flex flex-wrap justify-center absolute top-[319px] pad:top-[428px] dt:top-[400px] left-0 w-full h-full">
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
      </div>
    </div>
  );
};

export default page;
