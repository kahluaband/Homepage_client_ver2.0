'use client';

import { useState, useEffect, useRef } from 'react';
import { Portal } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MemberTable = ({
  isWaiting,
  searchQuery,
}: {
  isWaiting: boolean;
  searchQuery: string;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [members, setMembers] = useState([
    {
      generation: '21기',
      name: '김동욱',
      session: 'GUITAR',
      login: 'GOOGLE',
      status: '완료',
      grade: 'ADMIN',
    },
    {
      generation: '21기',
      name: '오연서',
      session: 'BASS',
      login: 'KAKAO',
      status: '완료',
      grade: 'ADMIN',
    },
    {
      generation: '21기',
      name: '원채영',
      session: 'GUITAR',
      login: 'GOOGLE',
      status: '완료',
      grade: 'ADMIN',
    },
    {
      generation: '21기',
      name: '이연호',
      session: 'BASS',
      login: 'KAKAO',
      status: '완료',
      grade: 'ADMIN',
    },
    {
      generation: '21기',
      name: '박준서',
      session: 'GUITAR',
      login: 'GOOGLE',
      status: '대기',
      grade: 'KAHLUA',
    },
    {
      generation: '21기',
      name: '지민재',
      session: 'VOCAL',
      login: 'KAKAO',
      status: '완료',
      grade: 'KAHLUA',
    },
    {
      generation: '20기',
      name: '염지은',
      session: 'SYNTHESIZER',
      login: 'GOOGLE',
      status: '완료',
      grade: 'ADMIN',
    },
    {
      generation: '20기',
      name: '박서연',
      session: 'GUITAR',
      login: 'GOOGLE',
      status: '완료',
      grade: 'GENERAL',
    },
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const filteredMembers = members
    .filter((member) => (isWaiting ? member.status === '대기' : true))
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
    updatedMembers[index].grade = newGrade;
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
    <div className="w-full h-[595px]">
      <div className="w-full h-[74px] bg-primary-20 rounded-t-[20px] border-b-0 border-2 border-[#808080] border-font-pretendard flex items-center pl-10 pr-[52px] shrink-0 gap-20 justify-center">
        <div className="min-w-[100px] text-center text-2xl max-pad:text-sm font-semibold text-gray-0">
          기수
        </div>
        <div className="min-w-[100px] text-center text-2xl max-pad:text-sm font-semibold text-gray-0">
          이름
        </div>
        <div className="min-w-[160px] text-center text-2xl max-pad:text-sm font-semibold text-gray-0">
          세션
        </div>
        <div className="min-w-[140px] text-center text-2xl max-pad:text-sm font-semibold text-gray-0">
          로그인 정보
        </div>
        <div className="min-w-[100px] text-center text-2xl max-pad:text-sm font-semibold text-gray-0">
          승인 상태
        </div>
        <div className="min-w-[130px] pr-[6px] text-center text-2xl max-pad:text-sm font-semibold text-gray-0">
          멤버 등급
        </div>
      </div>
      <div className="rounded-b-[20px] border-t-0 border-2 border-[#808080] overflow-hidden relative h-[519px]">
        <div className="overflow-y-auto h-full w-full pr-2 table-scrollbar">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className={`w-full px-10 py-4 flex items-center relative gap-20 justify-center
      border-gray-10 border-solid
      ${index === members.length - 1 ? 'border-b-0' : 'border-b-[2px]'}
    `}
            >
              <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] text-center">
                {member.generation}
              </div>
              <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] text-center">
                {member.name}
              </div>
              <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[160px] text-center">
                {member.session}
              </div>
              <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[140px] text-center">
                {member.login}
              </div>
              <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] text-center">
                {member.status}
              </div>
              <div
                onClick={(e) => toggleDropdown(index, e)}
                className="cursor-pointer dropdown-trigger text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[130px] flex items-center justify-center gap-[7px] relative"
              >
                <span>{member.grade}</span>
                <ExpandMoreIcon
                  className={`cursor-pointer ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
                {openIndex === index && (
                  <Portal>
                    <div
                      ref={dropdownRef}
                      className="font-semibold text-2xl max-pad:text-sm flex flex-col items-center justify-around absolute top-full mt-2 -ml-4 w-[153px] h-[120px] max-pad:w-20 max-pad:h-[71px] bg-gray-0 border-[3px] rounded-[10px] z-50"
                      style={{
                        top: dropdownPosition.top,
                        left: dropdownPosition.left,
                      }}
                    >
                      {['GENERAL', 'KAHLUA', 'ADMIN'].map((grade, i, arr) => (
                        <div
                          key={grade}
                          className={`flex items-center justify-center w-full text-center cursor-pointer
      ${i === 0 ? 'hover:rounded-t-[10px]' : ''} 
      ${i === arr.length - 1 ? 'h-[36px] border-b-0 hover:rounded-b-[10px]' : 'h-[39px] border-b-[3px]'}
      hover:bg-primary-10`}
                          onClick={() => handleSelectGrade(index, grade)}
                        >
                          {grade}
                        </div>
                      ))}
                    </div>
                  </Portal>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberTable;
