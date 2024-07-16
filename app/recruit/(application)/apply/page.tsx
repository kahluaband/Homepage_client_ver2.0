'use client'

import * as React from 'react';
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import ApplicantInfo from '@/components/templates/apply/ApplicantInfo';

const page = () => {

  const [PersonalInfo, setPersonalInfo] = useState({
    name: '',
    birthday: '',
    phone_num: '',
    department: '',
    residence: '',
    gender: '',
  });

  const handleInfoChange = (info: { name: string, birthday: string, phone_num: string, department: string, residence: string, gender: string }) => {
      setPersonalInfo(info);
  };

  const [isComplete, setIsComplete] = React.useState(false);

  useEffect(() => {
    console.log("현재 체크여부:" + isComplete);
  }, [isComplete])

  return (
    <div className="flex flex-col relative top-16 items-center justify-start text-center mx-auto w-full pad:w-[786px] dt:w-[996px] h-[1800px] mt-4 ">
        <div className="h-[200px] w-full pad:rounded-t-xl bg-gray-90 flex flex-col mx-auto">
          <p className="mt-10 text-gray-0 text-center text-2xl font-semibold leading-[48px]">지원 전 필독사항</p>
          <p className="mt-4 text-gray-20 text-center text-lg  font-normal leading-[27px] hidden pad:block">안녕하세요! 홍익대학교 컴퓨터공학과 밴드학회 깔루아입니다.</p>
          <p className="text-gray-20 text-center text-lg  font-normal leading-[27px] max-pad:px-6">단순 인원 집계용으로 사용되는 가입 지원서이므로 부담 없이 작성해 주시면 됩니다.</p>
        </div>
        <div className="w-full h-auto pad:rounded-b-xl pad:border border-gray-15 flex flex-col text-left">
          <ApplicantInfo PersonalInfo={PersonalInfo} onInfoChange={handleInfoChange}/>
        </div>
        <Link href="/recruit/complete" className={`flex justify-center items-center text-center h-[60px] w-[328px] pad:w-[384px] text-[18px] rounded-[12px] mt-[40px] mb-[288px] ${isComplete ? "bg-primary-50 text-gray-0" : "bg-gray-10 text-gray-40"}`}>다음</Link>
    </div>
  );
};
  
  export default page;
  