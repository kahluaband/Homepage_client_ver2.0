'use client';
import YearSelector from '@/components/performance/YearSelector';
import Playlists from '@/components/performance/Playlists';

const MainContainer = () => {
  return (
    <>
      <div className="w-full min-[834px]:w-[786px] min-[1920px]:w-[1200px] min-h-[320px] flex flex-col bg-gray-90 items-center min-[360px]:rounded-none min-[834px]:rounded-3xl mt-[16px] mb-[32px]">
        <span className="font-pretendard text-5xl min-[834px]:text-[64px] font-semibold leading-[83.2px] text-gray-0 mt-[64px]">
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
