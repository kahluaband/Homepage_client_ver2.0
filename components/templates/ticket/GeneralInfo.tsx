'use client';
import React, { useState, useEffect } from 'react';
import InfoTemplate from './InfoTemplate';

interface GeneralInfoProps {
    member: number; 
    setMember: React.Dispatch<React.SetStateAction<number>>;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ member, setMember }) => {
    const [buyer, setBuyer] = useState("");
    const [phone, setPhone] = useState("");
    const [companions, setCompanions] = useState<string[]>([]);

    const handleBuyerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuyer(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const addCompanion = () => {
        setCompanions(prevCompanions => [
            ...prevCompanions,
            `동반인 ${companions.length + 1}`
        ]);
    };

    useEffect(() => {
        if (member < companions.length + 1) {
            setCompanions(prevCompanions => prevCompanions.slice(0, member - 1));
        } else if (member > companions.length + 1) {
            addCompanion();
        }
    }, [member]);

    return (
        <div className="flex flex-col mt-10 mb-10 w-full">
            <div className="flex flex-row h-[30px]">
                <div className="font-semibold text-xl leading-[30px] text-gray-90">예매자 정보 입력</div>
                <div className="flex ml-3 font-medium text-[16px] leading-6 text-gray-40 items-center">본인확인을 위해 정확한 정보를 입력해주세요.</div>
            </div>
            <div className="flex flex-col">
                <InfoTemplate
                    key={0}
                    role={"예매자"}
                    handleBuyerChange={handleBuyerChange}
                    handleNamesArrayChange={() => { }}
                    handlePhoneChange={handlePhoneChange}
                    handlePhonesArrayChange={() => { }}
                />
            </div>
            {companions.map((companion, index) => (
                <div key={index + 1} className="flex flex-col">
                    <InfoTemplate
                        key={index + 1}
                        role={companion}
                        handleBuyerChange={() => { }}
                        handleNamesArrayChange={() => { }}
                        handlePhoneChange={() => { }}
                        handlePhonesArrayChange={() => { }}
                    />
                </div>
            ))}
            {member < 5 && <button onClick={() => setMember(prevMember => prevMember + 1)} className='mt-6 flex items-center justify-center w-[588px] h-[59px] bg-gray-5 rounded-xl text-gray-60 text-center font-normal leading-6 text-[18px]'>+ 동반인 추가...</button>}
        </div>
    );
};

export default GeneralInfo;
