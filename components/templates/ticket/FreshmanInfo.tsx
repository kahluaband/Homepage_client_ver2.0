import React, { useState } from 'react';
import { Input } from "@/components/ui/Input";

interface FreshmanInfoProps {
    onInfoChange: (info: { name: string, department: string, studentId: string, phone_num: string }) => void;
    userInfo: {
        name: string;
        department: string;
        studentId: string;
        phone_num: string;
    };
}

const FreshmanInfo: React.FC<FreshmanInfoProps> = ({ onInfoChange, userInfo }) => {
    const { name, department, studentId, phone_num } = userInfo;

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...userInfo, name: event.target.value });
    };

    const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...userInfo, department: event.target.value });
    };

    const handleStudentIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...userInfo, studentId: event.target.value });
    };

    const handlePhoneNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...userInfo, phone_num: event.target.value });
    };

    return (
        <div className="flex flex-col mt-10 mb-10 w-full px-4 pad:px-12">
            <div className="flex flex-col pad:flex-row h-[55px] pad:h-[30px]">
                <div className="font-semibold  text-lg pad:text-xl leading-[30px] text-gray-90">예매자 정보 입력</div>
                <div className="flex pad:ml-3 font-medium text-[16px] leading-6 text-gray-40 items-center">신입생 확인을 위해 정확한 정보를 입력해주세요.</div>
            </div>
            <div className="flex flex-col">
                <p className="mt-6 text-[16px] font-normal leading-6">이름</p>
                <Input className="mt-2" type="text" value={name} onChange={handleNameChange} placeholder="예) 홍길동" />
                <p className="mt-6 text-[16px] font-normal leading-6">학과</p>
                <Input className="mt-2" type="text" value={department} onChange={handleDepartmentChange} placeholder="예) 컴퓨터공학과" />
                <p className="mt-6 text-[16px] font-normal leading-6">학번</p>
                <Input className="mt-2" type="text" value={studentId} onChange={handleStudentIdChange} placeholder="예) C123456" />
                <p className="mt-6 text-[16px] font-normal leading-6">연락처</p>
                <Input className="mt-2" type="text" value={phone_num} onChange={handlePhoneNumChange} placeholder="전화번호 -없이 입력" />
            </div>
        </div>
    );
};

export default FreshmanInfo;
