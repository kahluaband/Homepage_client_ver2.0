import { Input } from '@/components/ui/Input';
import TwoOptionBox from '@/components/ui/twoOptionbox';
import React, { useEffect, useState } from 'react';

interface ApplicantInfoProps {
    onInfoChange: (info: { name: string, birthday: string, phone_num: string, department: string, residence: string, gender: string}) => void;
    PersonalInfo: {
        name: string;
        birthday: string;
        phone_num: string;
        department: string;
        residence: string;
        gender: string;
    };
}

const ApplicantInfo: React.FC<ApplicantInfoProps> = ({ onInfoChange, PersonalInfo }) => {
    const { name, birthday, phone_num, department, residence, gender } = PersonalInfo;

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...PersonalInfo, name: event.target.value });
    };

    const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...PersonalInfo, birthday: event.target.value });
    };

    const handlePhoneNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...PersonalInfo, phone_num: event.target.value });
    };

    const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...PersonalInfo, department: event.target.value });
    };

    const handleResidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...PersonalInfo, residence: event.target.value });
    };

    const handleGenderChange = (selectedGender: string) => {
        onInfoChange({ ...PersonalInfo, gender: selectedGender });
    }

    useEffect(() => {
        console.log("현재 성별 : " + gender)
    }, [gender])

    return (
        <div className="flex flex-col py-10 px-4 pad:px-12">
            <div className='flex flex-row items-end'>
                <p className='text-gray-90 text-[20px] font-light'>지원자 인적사항</p>
                <p className='text-gray-40 text-[16px] font-extralight ml-[12px]'>신입생 확인을 위해 정확한 정보를 입력해주세요.</p>
            </div>
            <div className="flex flex-col">
                <p className="mt-6 text-[16px] font-normal leading-6">이름</p>
                <Input className="mt-2" type="text" value={name} onChange={handleNameChange} placeholder="예) 홍길동" />
                <p className="mt-6 text-[16px] font-normal leading-6">생년월일</p>
                <Input className="mt-2" type="text" value={birthday} onChange={handleBirthdayChange} placeholder="8자리로 입력해주세요" />
                <p className="mt-6 text-[16px] font-normal leading-6">전화번호</p>
                <Input className="mt-2" type="text" value={phone_num} onChange={handlePhoneNumChange} placeholder="전화번호 -없이 입력" />
                <p className="mt-6 text-[16px] font-normal leading-6">성별</p>
                <TwoOptionBox option1='남성' option2='여성' seletion={handleGenderChange} className='mt-2'/>
                <p className="mt-6 text-[16px] font-normal leading-6">학과</p>
                <Input className="mt-2" type="text" value={department} onChange={handleDepartmentChange} placeholder="예) 컴퓨터공학과" />
                <p className="mt-6 text-[16px] font-normal leading-6">거주지</p>
                <Input className="mt-2 w-full pad:w-[588px]" type="text" value={residence} onChange={handleResidenceChange} placeholder="기숙사의 경우 '예) 2기숙사/부산'으로 입력해주세요" />
            </div>
        </div>
    );
};

export default ApplicantInfo;
