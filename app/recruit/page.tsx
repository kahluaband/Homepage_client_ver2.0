'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo_white from '@/public/image/KAHLUA.svg';
import vocal from '@/public/image/recruit/vocal.svg';
import guitar from '@/public/image/recruit/guitar.svg';
import drum from '@/public/image/recruit/drum.svg';
import bass from '@/public/image/recruit/bass.svg';
import syn from '@/public/image/recruit/syn.svg';

import FAQ from './FAQ';
import RequirementCard from '@/components/recruit/RequirementCard';
import SessionCard from '@/components/recruit/SessionCard';
import ScheduleCard from '@/components/recruit/ScheduleCard';
import {
  formatFullDate,
  formatMonth,
  formatMonthToDate,
  formatTime,
  formatYear,
  getOnlyNum,
  Recruiting23rd,
} from '@/components/data/RecruitingInfo';

const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // redering과정에서 document를 사용할 수 없어서 발생하는 문제 해결
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setIsScrolled(true);
    });
  }, []);

  return (
    <div>
      {isScrolled && (
        <div className="flex w-full h-[64px] fixed z-10 blur-lg backdrop-blur-sm top-0" />
      )}
      <div className="flex top-0 items-center justify-center h-auto pad:h-screen w-full bg-performance bg-center text-gray-0">
        <div className="flex flex-col items-center justify-center text-center max-pad:py-[120px] max-pad:px-[16px] w-full pad:w-[786px] dt:w-[1200px]">
          <div className="flex relative h-[40px] w-[234px] pad:h-[64px] pad:w-[376px] dt:h-[88px] dt:w-[516px]">
            <Image src={logo_white} fill alt="logo" />
          </div>
          <p className="text-[20px] pad:text-[24px] font-semibold dt:text-[32px] mt-8">
            {Recruiting23rd.num} MEMBER RECRUITMENT
          </p>
          <p className="text-[16px] pad:text-[20px] dt:text-[24px] font-normal mt-[4px]">
            {formatFullDate(Recruiting23rd.recruitingStartDate)} ~{' '}
            {formatFullDate(Recruiting23rd.recruitingFinishDate)}
          </p>
          <Link
            href="/recruit/notice"
            key="apply"
            className="flex justify-center items-center text-center w-full max-w-[384px] pad:w-[384px] h-[75px] rounded-[16px] bg-gray-90/30 border border-gray-0 mt-[72px] text-[18px] font-semibold cursor-pointer"
          >
            KAHLUA {getOnlyNum(Recruiting23rd.num)}기 지원하기
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-90 bg-notice h-auto">
        <div className="flex flex-col max-pad:px-[16px] w-full pad:w-[786px] dt:w-[1200px]">
          <Requirement />
          <RecruitingSession />
          <Schedule />
        </div>
      </div>
      <FAQ />
    </div>
  );
};

const Requirement = () => {
  return (
    <div className="flex flex-col h-full text-gray-0 text-center">
      <div>
        <p className="text-gray-10 text-[24px] pad:text-[32px] font-semibold">
          지원자격
        </p>
        <p className="text-primary-40 text-[18px] font-semibold mt-1">
          REQUIREMENT
        </p>
      </div>
      <div className="inline-flex flex-wrap flex-row justify-center align-top mt-16 gap-6">
        <RequirementCard
          title="💻 컴퓨터공학과 신입생"
          description="홍익대학교 컴퓨터공학과생 및<br/>컴퓨터공학과 진입 예정인 자율전공학부생"
        />
        <RequirementCard
          title="👊🏻 성실한 멤버"
          description="월요일 18시 홍익대학교 T동에서 진행되는<br/>오프라인 활동에 매주 참여할 수 있는 멤버"
        />
        <RequirementCard
          title="🔥 열정적인 밴드맨"
          description="밴드 음악에 관심이 많고<br/>열정적으로 활동할 수 있는 멤버"
        />
      </div>
    </div>
  );
};

const RecruitingSession = () => {
  return (
    <div className="flex flex-col h-full text-gray-0 text-center mt-[240px]">
      <div>
        <p className="text-gray-10 text-[24px] pad:text-[32px] font-semibold">
          모집 세션
        </p>
        <p className="text-primary-40 text-[18px] font-semibold mt-1">
          RECRUITING SESSION
        </p>
      </div>
      <div className="inline-flex flex-wrap flex-row justify-center align-top mt-16 gap-[16px] pad:gap-[20px]">
        <SessionCard session="보컬" image={vocal} />
        <SessionCard session="기타" image={guitar} />
        <SessionCard session="드럼" image={drum} />
        <SessionCard session="베이스" image={bass} />
        <SessionCard session="신디사이저" image={syn} />
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="flex flex-col h-full text-gray-0 text-center mt-[240px] mb-[334px]">
      <div>
        <p className="text-gray-10 text-[24px] pad:text-[32px] font-semibold">
          모집 일정
        </p>
        <p className="text-primary-40 text-[18px] font-semibold mt-1">
          RECRUITMENT SCHEDULE
        </p>
      </div>
      <div className="inline-flex flex-wrap flex-row justify-center align-top mt-16 gap-6">
        <ScheduleCard
          title="서류 지원"
          period={`~ ${formatMonthToDate(Recruiting23rd.recruitingFinishDate)} ${formatTime(Recruiting23rd.recruitingFinishDate)}`}
          description={`보컬 영상 제출 마감<br/>${formatMonthToDate(Recruiting23rd.vocalApplyingDue)} ${formatTime(Recruiting23rd.vocalApplyingDue)}`}
          titleClassName=""
          desClassName=""
        />
        <ScheduleCard
          title="오디션"
          period={`~ ${formatMonthToDate(Recruiting23rd.audition)} ${formatTime(Recruiting23rd.audition)}`}
          description={`오디션 뒷풀이<br/>당일 ${formatTime(Recruiting23rd.afterParty)}`}
          titleClassName=""
          desClassName=""
        />
        <ScheduleCard
          title="최종 합격 발표"
          period={`${formatMonthToDate(Recruiting23rd.announcementDate)}`}
          description="합격자/불합격자<br/>전체 개별 연락"
          titleClassName=""
          desClassName=""
        />
        <ScheduleCard
          title="24기 활동"
          period={`~ ${formatYear(Recruiting23rd.activityPeriod)}.${formatMonth(Recruiting23rd.activityPeriod)}`}
          description={`선발 직후부터<br/>${formatYear(Recruiting23rd.activityPeriod)}년 ${formatMonth(Recruiting23rd.activityPeriod)}월 정기공연까지`}
          titleClassName="bg-primary-50"
          desClassName="text-primary-10"
        />
      </div>
    </div>
  );
};

export default page;
