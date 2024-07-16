"use client"
import * as React from 'react';
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const Freshman_tickets: React.FC = () => {

    const isComplete = true;
    
    return (
        <div className="flex flex-col relative top-16 items-center justify-start text-center mx-auto w-full pad:w-[786px] dt:w-[996px] h-auto mt-4 ">
            <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex flex-col mt-4 mx-aut">
                <p className="mt-10 text-gray-0 text-center text-2xl font-semibold leading-[48px]">지원서 작성</p>
                <p className="mt-4 text-gray-20 text-center text-lg  font-normal leading-[27px] hidden pad:block">안녕하세요! 홍익대학교 컴퓨터공학과 밴드학회 깔루아입니다.</p>
                <p className="text-gray-20 text-center text-lg  font-normal leading-[27px] max-pad:px-6">단순 인원 집계용으로 사용되는 가입 지원서이므로 부담 없이 작성해 주시면 됩니다.</p>
            </div>
            <div className="w-full h-auto rounded-b-xl border border-gray-15 flex flex-col items-center justify-center py-[176px] text-center">
                <CheckOutlinedIcon sx={{ color: '#fff', stroke: '#fff', strokeWidth: 1 }} className='w-10 h-10 bg-primary-50 rounded-full p-[10px]'/>
                <p className='text-gray-90 text-[24px] mt-4'>지원서가 정상적으로 제출되었습니다.</p>
                <p className='text-gray-40 text-[18px] mt-4'>상세 일정은 작성해 주신 연락처로 개별 공지드리겠습니다.<br/>홍익대학교 깔루아 밴드에 지원해주셔서 감사합니다!</p>
            </div>
            <Link href="/" className="flex justify-center items-center text-center h-[60px] w-[328px] pad:w-[384px] text-[18px] rounded-[12px] mt-[40px] mb-[288px] bg-gray-5 text-gray-60">메인으로 돌아가기</Link>
        </div>
    );
};

export default Freshman_tickets;