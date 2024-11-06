'use client';

import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoginModal from '@/components/kahluaLogin/loginModal';
import LoginSelectBox from '@/components/kahluaLogin/LoginSelectBox';
import NameInput from '@/components/kahluaLogin/nameInput';

// 기수 23 ~ 1기
const generations: string[] = Array.from(
  { length: 23 },
  (_, i) => `${23 - i}기`
);

// 세션
const sessions: string[] = ['보컬', '드럼', '기타', '베이스', '신디사이저'];

const Page = () => {
  const [name, setName] = useState<string>('');
  const [generation, setGeneration] = useState<string>('');
  const [session, setSession] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsComplete(name !== '' && generation !== '' && session !== '');
  }, [name, generation, session]);

  return (
    <div className="font-pretendard w-full h-full flex justify-center items-center mt-16 text-gray-0 text-center max-pad:-mb-40">
      <div className="w-full h-full justify-center items-center pad:w-[786px] dt:w-[876px] pad:h-[536px] flex flex-col pt-[32px] pad:pt-[58px] pb-[78px] px-[16px] pad:px-[64px] dt:px-[118px] gap-[48px] bg-gray-90 pad:rounded-[24px] mt-[16px] pad:mt-[32px]">
        <div className="flex flex-col gap-[16px] w-full justify-center items-center">
          <div className="font-semibold text-[64px]">JOIN</div>
          <div className="font-medium text-[16px] pad:text-[20px] text-gray-20">
            깔루아 회원만 가입 신청 가능합니다.
            <br />
            가입 신청 이후 관리자 인증을 거쳐 KAHLUA 전용 서비스를 이용하실 수
            있습니다.
          </div>
        </div>
        <div className="flex flex-col pad:flex-row gap-[20px] justify-center items-center">
          <NameInput data={name} setData={setName} />
          <LoginSelectBox
            data={generation}
            setData={setGeneration}
            id="generation"
            itemList={generations}
          >
            기수
          </LoginSelectBox>
          <LoginSelectBox
            data={session}
            setData={setSession}
            id="session"
            itemList={sessions}
          >
            세션
          </LoginSelectBox>
        </div>
        <button
          className={`w-full pad:w-[384px] h-[60px] flex items-center justify-center rounded-[12px] ${isComplete ? 'bg-primary-50 text-gray-0' : 'bg-gray-10 text-gray-40 cursor-not-allowed'}`}
          disabled={!isComplete}
          onClick={() => setIsModalOpen(true)}
        >
          KAHLUA 가입 신청하러 가기
        </button>
        <LoginModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default Page;
