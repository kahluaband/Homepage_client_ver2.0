'use client';
import React from 'react';
import { Input } from "@/components/ui/Input";

interface InfoTemplateProps {
  role: string;
  handleBuyerChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNamesArrayChange?: (value: string) => void;
  handlePhoneChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhonesArrayChange?: (value: string) => void;
}

const InfoTemplate: React.FC<InfoTemplateProps> = ({
  role,
  handleBuyerChange,
  handleNamesArrayChange,
  handlePhoneChange,
  handlePhonesArrayChange
}) => {

  return (
    <div>
      <p className="mt-6 text-[16px] font-normal leading-6">{role}</p>
      <div className='flex flex-row mt-2 gap-6'>
        <Input
          type="text"
          placeholder="이름"
          onChange={role === "예매자" ? handleBuyerChange : (event) => handleNamesArrayChange?.(event.target.value as string)}
        />
        <Input
          type="text"
          placeholder="전화번호 -없이 입력"
          onChange={role === "예매자" ? handlePhoneChange :  (event) => handlePhonesArrayChange?.(event.target.value as string)}
        />
      </div>
    </div>
  );
};

export default InfoTemplate;
