'use client';
import YearSelector from '@/components/performance/YearSelector';
import Playlists from '@/components/performance/Playlists';

const MainContainer = () => {
  return (
    <>
      <div className="pad:w-[786px] dt:w-[1200px] min-h-[320px] flex flex-col bg-gray-90 items-center ph:rounded-none w-full pad:rounded-3xl mt-[16px] mb-[32px]">
        <h1 className="font-mustica text-4xl pad:text-[64px] font-semibold leading-[83.2px] text-gray-0 mt-[64px]">
          PERFORMANCE
        </h1>
        {/* 연도 선택 관련 요소 */}
        <YearSelector />
      </div>
      {/* 유튜브 재생목록 섹션 */}
      <Playlists />
    </>
  );
};

export default MainContainer;
