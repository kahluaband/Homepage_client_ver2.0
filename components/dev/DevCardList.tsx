'use client';
import React, { useEffect, useRef } from 'react';
import DevCard from './DevCard';

const DevCardList = () => {
  const bgGray90Ref = useRef<HTMLDivElement>(null);
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
  );
};

export default DevCardList;
