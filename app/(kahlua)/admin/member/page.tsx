'use client';
import { useState } from 'react';
import Header from '@/components/admin/Header';
import MemberStatusIcon from '@/components/admin/member/MemberStatusIcon';
import WaitingIcon from '@/public/image/admin/WaitingIcon.svg';
import WaitingMobileIcon from '@/public/image/admin/WaitingMobileIcon.svg';
import CompletedIcon from '@/public/image/admin/CompletedIcon.svg';
import CompletedMobileIcon from '@/public/image/admin/CompletedMobileIcon.svg';
import SearchBar from '@/components/admin/member/SearchBar';
import MemberTable from '@/components/admin/MemberTable';

const MemberPage = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const waiting_count = 5; // 예시
  const completed_count = 12; // 예시

  return (
    <div className="w-full h-auto min-h-[calc(100vh-390px)] flex flex-col mt-16 text-black font-pretendard items-center">
      <Header subtitle="깔루아 멤버 정보 관리" />
      <div className="w-full max-pad:px-4">
        <div className="flex flex-col h-auto min-[1500px]:w-[1200px] min-[834px]:w-[786px] max-pad:max-w-[500px] mt-[134px] max-dt:mt-[107px] max-pad:mt-6 mx-auto">
          <div className="flex max-pad:flex-col gap-[75px] max-pad:gap-[10px]">
            <MemberStatusIcon
              icon={WaitingIcon}
              mobileIcon={WaitingMobileIcon}
              alt="승인 대기"
              label="승인 대기"
              count={waiting_count}
            />
            <MemberStatusIcon
              icon={CompletedIcon}
              mobileIcon={CompletedMobileIcon}
              alt="승인 완료"
              label="승인 완료"
              count={completed_count}
            />
          </div>
          <div className="flex self-end max-dt:mt-10 max-pad:mt-6">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="w-full mt-5 max-dt:mt-[35px] max-pad:mt-4">
            <MemberTable isWaiting={isWaiting} searchQuery={searchQuery} />
          </div>
          <span
            onClick={() => setIsWaiting((prev) => !prev)}
            className="flex self-end mt-[10px] text-2xl max-dt:text-[20px] max-pad:text-sm font-semibold cursor-pointer"
          >
            {isWaiting ? '전체 보기' : '승인 대기만 보기'}
          </span>
          <button className="flex self-center mt-[100px] items-center justify-center w-[384px] max-pad:w-[310px] h-[60px] p-[10px] font-semibold text-[22px] text-gray-0 bg-primary-50 rounded-xl">
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
