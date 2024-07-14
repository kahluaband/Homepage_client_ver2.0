'use client';
import MainContainer from '@/components/performance/MainContainer';
import { RecoilRoot } from 'recoil';

const page = () => {
  return (
    <RecoilRoot>
      <div className="w-full h-fit pt-[64px] flex flex-col items-center font-pretendard">
        <MainContainer />
      </div>
    </RecoilRoot>
  );
};

export default page;
