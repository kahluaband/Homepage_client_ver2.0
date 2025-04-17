'use client';

import Header from '@/components/admin/Header';
import MemberStatusIcon from '@/components/admin/member/MemberStatusIcon';
import WaitingIcon from '@/public/image/admin/WaitingIcon.svg';
import CompletedIcon from '@/public/image/admin/CompletedIcon.svg';
import SearchBar from '@/components/admin/member/SearchBar';
import MemberTable from '@/components/admin/MemberTable';

const MemberPage = () => {
  const waiting_count = 5; // 예시
  const completed_count = 12; // 예시

  return (
    <div className="w-full h-auto min-h-[calc(100vh-390px)] flex flex-col mt-16 text-black font-pretendard items-center">
      <Header subtitle="깔루아 멤버 정보 관리" />
      <div className="flex flex-col min-[1500px]:w-[1200px] min-[864px]:w-[777px] max-pad:w-[328px] mt-[134px]">
        <div className="flex gap-[75px]">
          <MemberStatusIcon
            icon={WaitingIcon}
            alt="승인 대기"
            label="승인 대기"
            count={waiting_count}
          />
          <MemberStatusIcon
            icon={CompletedIcon}
            alt="승인 완료"
            label="승인 완료"
            count={completed_count}
          />
        </div>
        <div className="flex self-end">
          <SearchBar />
        </div>
        <div className="w-full mt-5">
          <MemberTable />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
