'use client';
import YearSelector from '@/components/performance/YearSelector';
import Playlists from '@/components/performance/Playlists';

const MainContainer = () => {
  return (
    <>
      <div className="w-[1200px] min-h-[320px] bg-gray-90 mt-[16px] mb-[32px] flex flex-col items-center">
        <span className="font-pretendard text-[64px] font-semibold leading-[83.2px] text-gray-0 mt-[64px]">
          PERFORMANCE
        </span>
        {/* 연도 선택 관련 요소 */}
        <YearSelector />
      </div>
      {/* 유튜브 재생목록 섹션 */}
      <Playlists />
    </>
  );
};

export default MainContainer;
