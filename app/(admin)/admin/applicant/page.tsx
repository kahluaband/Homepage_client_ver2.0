'use client';
import Image from 'next/image';
import React from 'react';
import applicant_image from '@/public/image/admin/image.svg';
import { useState } from 'react';

const page = () => {
  const sessionArr = ['ALL', '보컬', '기타', '드럼', '베이스', '신디'];
  const [session, setSession] = useState('ALL');

  return (
    <div className="font-pretendard w-full pt-[64px] flex flex-col items-center">
      <div className="w-full h-[259px] bg-gray-5 flex justify-between px-[360px]">
        <div className="flex flex-col mt-16">
          <span className="font-mustica text-[40px] text-gray-90 font-semibold leading-10 pb-[15px]">
            Applicant
          </span>
          <section className="flex gap-2 pb-10">
            <span className="font-pretendard text-2xl text-gray-90 font-semibold leading-9">
              24기 지원자 정보
            </span>
            {/* 데이터 연동 필요 */}
            <span className="font-pretendard text-2xl text-primary-50 font-semibold leading-9">
              00
            </span>
          </section>
          <section className="w-[504px] h-8 rounded-[32px] bg-gray-0">
            {sessionArr.map((sessionName) => (
              <div
                key={sessionName}
                onClick={() => {
                  setSession(sessionName);
                }}
                className={`${session === sessionName ? 'bg-primary-50' : 'bg-gray-0'} " w-[84px] inline-flex px-[12px] py-[4px] justify-center items-center gap-[10px] rounded-[32px] cursor-pointer "`}
              >
                <span
                  key={sessionName}
                  className={`${session === sessionName ? 'text-gray-0' : 'text-gray-50'} " text-center font-pretendard text-[16px] font-medium leading-6 "`}
                >
                  {sessionName}
                </span>
              </div>
            ))}
          </section>
        </div>
        <Image src={applicant_image} alt="image" width={377} height={244} />
      </div>
    </div>
  );
};

export default page;
