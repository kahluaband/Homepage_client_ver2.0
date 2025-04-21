'use client';

import { useState, useEffect, useRef } from 'react';
import { Portal } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MemberTable = ({
  isWaiting,
  searchQuery,
  members,
  setMembers,
  currentPage,
  totalPages,
  onPageChange,
}: {
  isWaiting: boolean;
  searchQuery: string;
  members: any[];
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  setMembers: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredMembers = members
    .filter((member) =>
      isWaiting ? member.approvalStatus === 'PENDING' : true
    )
    .filter((member) => member.name.includes(searchQuery));

  const toggleDropdown = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (openIndex === index) {
      setOpenIndex(null);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setOpenIndex(index);
  };

  const handleSelectGrade = (index: number, newGrade: string) => {
    const updatedMembers = [...members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      userType: newGrade,
    };
    setMembers(updatedMembers);
    setOpenIndex(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(target) &&
      !target.closest('.dropdown-trigger')
    ) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    if (openIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openIndex]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[595px] max-pad:h-[378px]">
        <div className="w-full h-[74px] max-pad:h-[42px] bg-primary-20 rounded-t-[20px] border-b-0 border-2 border-[#808080] border-font-pretendard flex items-center px-4 max-dt:px-2 max-pad:px-2 shrink-0  max-dt:gap-0 justify-around">
          <div className="min-w-[100px] max-pad:min-w-[40px] text-center text-2xl max-dt:text-[22px] max-pad:text-sm font-semibold text-gray-0">
            기수
          </div>
          <div className="min-w-[100px] max-pad:min-w-[60px] text-center text-2xl max-dt:text-[22px] max-pad:text-sm font-semibold text-gray-0">
            이름
          </div>
          <div className="min-w-[160px] max-pad:min-w-[100px] text-center text-2xl max-dt:text-[22px] max-pad:text-sm font-semibold text-gray-0">
            세션
          </div>
          <div className="min-w-[140px] max-dt:min-w-[120px] text-center text-2xl max-dt:text-[22px] max-pad:text-sm font-semibold text-gray-0 max-pad:hidden">
            로그인 정보
          </div>
          <div className="min-w-[100px] max-dt:min-w-[120px] max-pad:min-w-[60px] text-center text-2xl max-dt:text-[22px] max-pad:text-sm font-semibold text-gray-0 break-words leading-tight">
            승인 상태
          </div>
          <div className="min-w-[200px] max-dt:min-w-[160px] max-pad:min-w-[90px] text-center text-2xl  max-dt:text-[22px] max-pad:text-sm font-semibold text-gray-0 break-words leading-tight">
            멤버 등급
          </div>
        </div>
        <div className="rounded-b-[20px] border-t-0 border-2 border-[#808080] overflow-hidden relative h-[526px] max-pad:h-[336px]">
          <div className="overflow-hidden h-full w-full">
            {filteredMembers.map((member, index) => (
              <div
                key={index}
                className={`w-full px-4 max-dt:px-2 max-pad:px-2 py-4 max-pad:py-[10px] flex items-center relative max-dt:gap-0 justify-around
      border-gray-10 border-solid
      ${index === members.length - 1 ? 'border-b-0' : 'border-b-[2px]'}
    `}
              >
                <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] max-pad:min-w-[40px] text-center">
                  {member.term}기
                </div>
                <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] max-pad:min-w-[60px] text-center">
                  {member.name}
                </div>
                <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[160px] max-pad:min-w-[100px] text-center">
                  {member.session}
                </div>
                <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[140px] max-dt:min-w-[120px] max-pad:hidden text-center ">
                  {member.loginType}
                </div>
                <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] max-dt:min-w-[120px] max-pad:min-w-[60px] text-center">
                  {member.approvalStatus === 'APPROVED' ? '완료' : '대기'}
                </div>
                <div
                  onClick={(e) => {
                    if (window.innerWidth > 833) toggleDropdown(index, e);
                  }}
                  onDoubleClick={(e) => {
                    if (window.innerWidth <= 833) toggleDropdown(index, e);
                  }}
                  className="cursor-pointer dropdown-trigger text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[200px] max-dt:min-w-[160px] max-pad:min-w-[90px] flex items-center justify-center gap-[7px] relative"
                >
                  <span>{member.userType}</span>
                  <ExpandMoreIcon
                    className={`cursor-pointer ${
                      openIndex === index ? 'rotate-180' : ''
                    } max-pad:hidden`}
                  />
                  {openIndex === index && (
                    <Portal>
                      <div
                        ref={dropdownRef}
                        className="font-semibold text-2xl max-dt:text-[20px] max-pad:text-sm flex flex-col items-center justify-around absolute top-full mt-2 w-[164px] h-[120px] max-dt:w-[136px] max-pad:w-[100px] max-pad:h-[73px] bg-gray-0 border-[3px] rounded-[10px] z-50 ml-3 max-dt:ml-2 max-pad:-ml-1"
                        style={{
                          top: dropdownPosition.top,
                          left: dropdownPosition.left,
                        }}
                      >
                        {['KAHLUA', 'ADMIN', 'UNACCEPTED'].map(
                          (userType, i, arr) => (
                            <div
                              key={userType}
                              className={`flex items-center justify-center w-full text-center cursor-pointer
      ${i === 0 ? 'hover:rounded-t-[6px]' : ''} 
      ${i === arr.length - 1 ? 'h-[36px] border-b-0 hover:rounded-b-[6px] hover:border-b-0' : 'h-[39px] border-b-[3px]'}
      hover:bg-primary-10 hover:text-gray-0 hover:border-b-[3px] border-gray-90`}
                              onClick={() => handleSelectGrade(index, userType)}
                            >
                              {userType}
                            </div>
                          )
                        )}
                      </div>
                    </Portal>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-[150px] gap-4 mt-8 font-semibold text-2xl max-dt:text-[20px] max-pad:text-sm">
        {totalPages > 0 ? (
          <>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className={`cursor-pointer ${currentPage === 0 ? 'invisible' : ''}`}
            >
              {'<'}
            </button>

            <div className="flex items-center">
              {currentPage + 1} / {totalPages}
            </div>

            <button
              onClick={() => onPageChange(currentPage + 1)}
              className={`cursor-pointer ${currentPage + 1 >= totalPages ? 'invisible' : ''}`}
            >
              {'>'}
            </button>
          </>
        ) : (
          <div className="w-[150px] h-[32px]"></div>
        )}
      </div>
    </div>
  );
};

export default MemberTable;
