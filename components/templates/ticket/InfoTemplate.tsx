'use client';
import React from 'react';
import { Input } from "@/components/ui/input";
import Image from 'next/image';

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
            onChange={role === "예매자" ? handleBuyerChange : (event) => handleNamesArrayChange?.(event.target.value as string)}
          />
          <Input
            type="text"
            placeholder="전화번호 -없이 입력"
            onChange={role === "예매자" ? handlePhoneChange :  (event) => handlePhonesArrayChange?.(event.target.value as string)}
          />
          {role !== "예매자" && ( <div className="hidden pad:flex cursor-pointer w-12" onClick={() => setMember?.(prevMember => prevMember - 1)}>
            <Image src="/image/ticket/subtract.svg" alt="minus" height={24} width={24} />
          </div>)}
        </div>
    </div>
  );
};

export default InfoTemplate;
