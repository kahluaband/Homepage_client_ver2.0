'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import logo_white from '@/public/image/KAHLUA.svg';
import DevCard from '@/components/dev/DevCard';
import Footer from '@/components/Footer';

const Page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const bgGray90Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const adjustHeight = () => {
      if (bgGray90Ref.current) {
        const innerDiv = bgGray90Ref.current.querySelector('.inner-div');
        if (innerDiv) {
          const innerDivHeight = (
            innerDiv as HTMLElement
          ).getBoundingClientRect().height;
          if (window.innerWidth >= 1500) {
            bgGray90Ref.current.style.height = `${innerDivHeight - 80}px`;
          } else if (window.innerWidth >= 834) {
            bgGray90Ref.current.style.height = `${innerDivHeight - 325}px`;
          } else {
            bgGray90Ref.current.style.height = 'auto';
          }
        }
      }
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col mb-[-160px] dt:mb-[-194px]">
      {isScrolled && (
        <div className="flex w-full h-[64px] fixed z-10 blur-lg backdrop-blur-sm top-0" />
      )}
      <div className="flex-grow">
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
        <div ref={bgGray90Ref} className="relative w-full bg-gray-90">
          <div className="inner-div flex justify-center relative top-0 pad:top-[-325px] dt:top-[-80px] w-full">
            <div className="grid grid-cols-1 pad:grid-cols-2 dt:grid-cols-3 gap-x-[18px] gap-y-[40px] pad:gap-y-[32px] dt:gap-y-[48px] max-pad:px-[16px] w-full pad:w-[786px] dt:w-[1200px] mb-20 pad:mb-40 dt:mb-[240px]">
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
        </div>
      </div>
    </div>
  );
};

export default Page;
