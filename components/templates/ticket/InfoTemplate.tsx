'use client';
import React, { useState } from 'react';
import { Input } from "@/components/ui/InputBox";
import Image from 'next/image';
import { filterPhoneNumber, filterNameValue } from '@/components/util/utils';

interface InfoTemplateProps {
  role: string;
  handleBuyerChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNamesArrayChange?: (value: string) => void;
  handlePhoneChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhonesArrayChange?: (value: string) => void;
  setMember?: React.Dispatch<React.SetStateAction<number>>;
}

const InfoTemplate: React.FC<InfoTemplateProps> = ({
  role,
  handleBuyerChange,
  handleNamesArrayChange,
  handlePhoneChange,
  handlePhonesArrayChange,
  setMember
}) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = filterPhoneNumber(inputValue);
    setPhoneValue(formattedValue);
    const rawValue = inputValue.replace(/[^0-9]/g, '');
    role === "예매자" ? handlePhoneChange?.(event) : handlePhonesArrayChange?.(rawValue);
  };

  const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const filteredValue = filterNameValue(inputValue); // 필터링 함수에서 띄어쓰기 허용
    console.log('필터링된 값:', filteredValue);
    setNameValue(filteredValue);
    
    // 이벤트 객체가 아닌 필터링된 값을 전달
    if (role === "예매자") {
      handleBuyerChange?.(event); // 이벤트 객체 전달
    } else {
      handleNamesArrayChange?.(filteredValue); // 필터링된 이름 전달
    }
  };

  return (
    <div>
      <div className='w-[282px] flex flex-row justify-between'>
        <p className="mt-6 text-[16px] font-normal leading-6">{role}</p>
        {role !== "예매자" && (
          <div className="pad:hidden cursor-pointer mt-6" onClick={() => setMember?.(prevMember => prevMember - 1)}>
            <Image src="/image/ticket/subtract.svg" alt="minus" height={24} width={24} />
          </div>
        )}
      </div>
      <div className='flex flex-col pad:flex-row mt-2 gap-4 pad:gap-6'>
        <Input
          type="text"
          placeholder="이름"
          value={nameValue} 
          onChange={handleNameInputChange} 
        />
        <Input
          type="text"
          placeholder="전화번호 -없이 입력"
          value={phoneValue} 
          onChange={handlePhoneInputChange} 
        />
        {role !== "예매자" && (
          <div className="hidden pad:flex cursor-pointer w-12" onClick={() => setMember?.(prevMember => prevMember - 1)}>
            <Image src="/image/ticket/subtract.svg" alt="minus" height={24} width={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoTemplate;
