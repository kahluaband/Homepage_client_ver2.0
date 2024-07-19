'use client';
import MainContainer from '@/components/performance/MainContainer';
import { RecoilRoot } from 'recoil';

const page = () => {
  return (
    <RecoilRoot>
      <div className="font-pretendard w-full pt-[64px] flex flex-col items-center">
        <MainContainer />
      </div>
    </RecoilRoot>
  );
};

export default page;
