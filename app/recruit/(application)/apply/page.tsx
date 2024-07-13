'use client'

import * as React from 'react';
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";

const page = () => {

  const [isComplete, setIsComplete] = React.useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsComplete(checked);
  };

  useEffect(() => {
    console.log("현재 체크여부:" + isComplete);
  }, [isComplete])

  return (
    //반응형에 따라 mx 수정 필요
    <div className="flex flex-col relative top-16 items-center justify-start text-center mx-[200px] h-[1800px] mt-4 ">
        <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex flex-col mt-4 mx-aut">
          <p className="mt-10 text-gray-0 text-center text-2xl font-semibold leading-[48px]">지원 전 필독사항</p>
          <p className="mt-4 text-gray-20 text-center text-lg  font-normal leading-[27px]">안녕하세요! 홍익대학교 컴퓨터공학과 밴드학회 깔루아입니다.<br/>단순 인원 집계용으로 사용되는 가입 지원서이므로 부담 없이 작성해 주시면 됩니다.</p>
        </div>
        <div className="w-full h-auto rounded-b-xl border border-gray-15 flex flex-col px-12 py-10 text-left">

        </div>
        <Link href="/recruit/complete" className={`flex justify-center items-center text-center h-[60px] w-[384px] text-[18px] rounded-[12px] mt-[40px] mb-[288px] ${isComplete ? "bg-primary-50 text-gray-0" : "bg-gray-10 text-gray-40"}`}>다음</Link>
    </div>
  );
};
  
  export default page;
  