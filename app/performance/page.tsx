'use client';
import { useState } from 'react';
import YearSelector from '@/components/performance/YearSelector';
import { RecoilRoot } from 'recoil';
import { useRecoilValue } from 'recoil';
import { selectedYear } from '@/atoms';
import All from '@/components/performance/All';
import Image from 'next/image';

const page = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <RecoilRoot>
      <div className=" w-full pt-[64px] flex flex-col items-center mb-[72px] font-pretendard">
        <div className="w-[1200px] min-h-[320px] rounded-[24px] bg-gray-90 mt-[16px] mb-[32px] flex flex-col items-center">
          <span className="font-pretendard text-[64px] font-semibold leading-[83.2px] text-gray-0 mt-[64px]">
            PERFORMANCE
          </span>
          {/* 연도 선택 관련 요소 */}
          <YearSelector />
        </div>

        {/* 유튜브 재생목록 섹션 */}
        <All />
      </div>
    </RecoilRoot>
  );
};

export default page;
