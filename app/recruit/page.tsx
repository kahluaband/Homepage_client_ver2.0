'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import logo_white from "@/public/image/KAHLUA.svg"
import vocal from "@/public/image/recruit/vocal.svg"
import guitar from "@/public/image/recruit/vocal.svg"
import drum from "@/public/image/recruit/vocal.svg"
import bass from "@/public/image/recruit/vocal.svg"
import syn from "@/public/image/recruit/vocal.svg"

import FAQ from "./FAQ";
import RequirementCard from "@/components/recruit/RequirementCard";
import SessionCard from "@/components/recruit/SessionCard";


const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // redering과정에서 document를 사용할 수 없어서 발생하는 문제 해결
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      setIsScrolled(true);
    });
  },[])
  
  return (
    <div>
      {isScrolled && <div className="flex w-full h-[64px] fixed z-10 blur-lg backdrop-blur-sm top-0"/>}
      <div className="flex top-0 items-center justify-center h-screen bg-performance text-gray-0">
        <div className="flex flex-col items-center justify-center text-center max-pad:px-[16px] pad:w-[786px] dt:w-[1200px]">
          <div className="flex relative h-[40px] w-[234px] pad:h-[64px] pad:w-[376px] dt:h-[88px] dt:w-[516px]">
            <Image src={logo_white} layout="fill" alt="logo"/>
          </div>
          <p className="text-[20px] pad:text-[24px] font-light dt:text-[32px] mt-8">23rd MEMBER RECRUITMENT</p>
          <p className="text-[16px] pad:text-[20px] dt:text-[24px] font-thin mt-[4px]">2023.03.01 FRI ~ 2023.03.07 SAT</p>
          <Link href="/recruit/notice" key="apply" className="flex justify-center items-center text-center w-[384px] h-[75px] rounded-[16px] bg-gray-90/30 border border-gray-0 mt-[72px] text-[18px] font-semibold cursor-pointer">KAHLUA 23기 지원하기</Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-90 h-full">
        <div className="flex flex-col max-pad:px-[16px] pad:w-[786px] dt:w-[1200px]">
          <Requirement/>
          <RecruitingSession/>
          <Schedule/>
        </div>
      </div>
      <FAQ/>
    </div>
  );
};

const Requirement = () => {
  return (
    <div className="flex flex-col h-full text-gray-0 text-center">
      <div>
        <p className="text-gray-10 text-[24px] pad:text-[32px] font-light">지원자격</p>
        <p className="text-primary-40 text-[18px] font-light mt-1">REQUIREMENT</p>
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
        <p className="text-gray-10 text-[24px] pad:text-[32px] font-light">모집 세션</p>
        <p className="text-primary-40 text-[18px] font-light mt-1">RECRUITING SESSION</p>
      </div>
      <div className="inline-flex flex-wrap flex-row justify-center align-top mt-16 gap-[20px]">
        <SessionCard
          session="보컬"
          image={vocal}
        />
        <SessionCard
          session="기타"
          image={guitar}
        />
        <SessionCard
          session="드럼"
          image={drum}
        />
        <SessionCard
          session="베이스"
          image={bass}
        />
        <SessionCard
          session="신디사이저"
          image={syn}
        />
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="flex flex-col h-full text-gray-0 text-center mt-[240px] mb-[334px]">
      <div>
        <p className="text-gray-10 text-[32px] font-semibold">모집 일정</p>
        <p className="text-primary-40 text-[18px] mt-1">RECRUITMENT SCHEDULE</p>
      </div>
      <div className="inline-flex flex-wrap flex-row justify-center align-top mt-16 gap-6">
        <div className="flex flex-col bg-gray-80/50 w-[282px] h-[196px] p-[24px] rounded-[16px] justify-center items-start text-left">
          <p className="text-gray-0 text-[32px]">서류 지원</p>
          <p className="text-gray-0 text-[20px]">~ 03.08 FRI 23:59</p>
          <p className="text-gray-40 text-[18px] mt-4">보컬 영상 제출 마감<br/>03.10(일) 23:59</p>
        </div>
        <div className="flex flex-col bg-gray-80/50 w-[282px] h-[196px] p-[24px] rounded-[16px] justify-center items-start text-left">
          <p className="text-gray-0 text-[32px]">오디션</p>
          <p className="text-gray-0 text-[20px]">03.11 MON 16:00</p>
          <p className="text-gray-40 text-[18px] mt-4">오디션 뒷풀이<br/>당일 19:00</p>
        </div>
        <div className="flex flex-col bg-gray-80/50 w-[282px] h-[196px] p-[24px] rounded-[16px] justify-center items-start text-left">
          <p className="text-gray-0 text-[32px]">최종 합격 발표</p>
          <p className="text-gray-0 text-[20px]">03.15 FRI</p>
          <p className="text-gray-40 text-[18px] mt-4">합격자/불합격자<br/>전체 개별 연락</p>
        </div>
        <div className="flex flex-col bg-primary-50 w-[282px] h-[196px] p-[24px] rounded-[16px] justify-center items-start text-left">
          <p className="text-gray-0 text-[32px]">24기 활동</p>
          <p className="text-gray-0 text-[20px]">~2026.09</p>
          <p className="text-primary-10 text-[18px] mt-4">선발 직후부터<br/>2026년 9월 정기공연까지</p>
        </div>
      </div>
    </div>
  );
};

export default page;
