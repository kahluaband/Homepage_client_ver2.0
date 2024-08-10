'use client';
import Loading from '@/components/loading';
import MainContainer from '@/components/performance/MainContainer';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RecoilRoot>
        <div className="font-pretendard w-full pt-[64px] flex flex-col items-center">
          <MainContainer />
        </div>
      </RecoilRoot>
    </Suspense>
  );
};

export default page;
