'use client';
import { useState, useEffect } from 'react';
import { authInstance } from '@/api/auth/axios';
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

  const [members, setMembers] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [waitingCount, setWaitingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const fetchMembers = async () => {
    try {
      const response = await authInstance.get('/admin/users', {
        params: {
          approvalFilter: 'ALL',
          page: currentPage,
          size: 8,
        },
      });
      const { content, pageInfo, pendingCount, approvedCount } =
        response.data.result;
      setMembers(content);
      setTotalPages(pageInfo.totalPages);
      setWaitingCount(pendingCount);
      setCompletedCount(approvedCount);
    } catch (error) {
      console.error('멤버 데이터 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [currentPage, isWaiting]);

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
              count={waitingCount}
            />
            <MemberStatusIcon
              icon={CompletedIcon}
              mobileIcon={CompletedMobileIcon}
              alt="승인 완료"
              label="승인 완료"
              count={completedCount}
            />
          </div>
          <div className="flex self-end max-dt:mt-10 max-pad:mt-6">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="w-full mt-5 max-dt:mt-[35px] max-pad:mt-4">
            <MemberTable
              isWaiting={isWaiting}
              searchQuery={searchQuery}
              members={members}
              setMembers={setMembers}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
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
