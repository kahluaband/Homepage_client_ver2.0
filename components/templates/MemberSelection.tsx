"use client"
import { useState } from 'react';
import Image from 'next/image';

type MemberSelectionProps = {
description: string;
min: number;
max: number;
ticket: string;
};

const MemberSelection: React.FC<MemberSelectionProps> = ({
description,
min,
max,
ticket,
}) => {
const [member, setMember] = useState<number>(1);

const handleIncrement = () => {
    setMember(prevMember => (prevMember < max ? prevMember + 1 : prevMember));
};

const handleDecrement = () => {
    setMember(prevMember => (prevMember > min ? prevMember - 1 : prevMember));
};

return (
    <div className="flex flex-col mt-10 mb-10 h-[83px] w-full">
        <div className="flex flex-row h-[30px]">
            <div className="font-semibold text-xl leading-[30px] text-gray-90">예매 인원 선택</div>
            <div className="flex ml-3 font-medium text-[16px] leading-6 text-gray-40 items-center">{description}</div>
        </div>
        <div className="mt-7 flex flex-row h-[24px] items-center">
            <div className="cursor-pointer" onClick={handleDecrement}>
            <Image src="/image/subtract.svg" alt="minus" height={24} width={24} />
            </div>
            <p className="ml-4">{member}</p>
            <div className="cursor-pointer ml-4" onClick={handleIncrement}>
            <Image src="/image/addplus.svg" alt="plus" height={24} width={24} />
            </div>
            <p className="ml-16 text-primary-50 text-lg font-semibold">
            {ticket === 'freshman' ? '무료' : '5,000원'}
            </p>
        </div>
    </div>
);
};

export default MemberSelection;