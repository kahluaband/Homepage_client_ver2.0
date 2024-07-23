'use client';
import React, { useState, useEffect } from 'react';
import InfoTemplate from './InfoTemplate';
import Image from 'next/image';

interface GeneralInfoProps {
    member: number; 
    setMember: React.Dispatch<React.SetStateAction<number>>;
    onInfoComplete: (isComplete: boolean) => void; 
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ member, setMember, onInfoComplete }) => {
    const [buyer, setBuyer] = useState("");
    const [phone, setPhone] = useState("");
    const [namesArray, setNamesArray] = useState<string[]>([]);
    const [phonesArray, setPhonesArray] = useState<string[]>([]);
    const [companions, setCompanions] = useState<string[]>([]);

    const handleBuyerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuyer(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    
const handleNamesArrayChange = (index: number, value: string) => {
    const updatedNames = [...namesArray];
    updatedNames[index] = value;
    setNamesArray(updatedNames);
};

const handlePhonesArrayChange = (index: number, value: string) => {
    const phoneNumber = value.replace(/[^0-9]/g, ""); 
    const updatedPhones = [...phonesArray];
    updatedPhones[index] = phoneNumber;
    setPhonesArray(updatedPhones);
};

    const addCompanion = () => {
        setCompanions(prevCompanions => [
            ...prevCompanions,
            `동반인 ${companions.length + 1}`
        ]);
        setNamesArray(prevNamesArray => [...prevNamesArray, ""]);
        setPhonesArray(prevPhonesArray => [...prevPhonesArray, ""]);
    };

    useEffect(() => {
        if (member < companions.length + 1) {
            setCompanions(prevCompanions => prevCompanions.slice(0, member - 1));
            setNamesArray(prevNamesArray => prevNamesArray.slice(0, member - 1));
            setPhonesArray(prevPhonesArray => prevPhonesArray.slice(0, member - 1));
        } else if (member > companions.length + 1) {
            addCompanion();
        }

        const isFormComplete = buyer.trim() !== "" && phone.trim() !== "" &&
            companions.every(comp => comp.trim() !== "") &&
            namesArray.slice(0, companions.length).every(name => name.trim() !== "") &&
            phonesArray.slice(0, companions.length).every(phone => phone.trim() !== "");

        onInfoComplete(isFormComplete); 
        }, [member, buyer, phone, companions, namesArray, phonesArray, onInfoComplete])

    return (
        <div className="flex flex-col mt-10 mb-10 w-full">
            <div className="flex flex-col pad:flex-row h-[55px] pad:h-[30px]">
                <div className="font-semibold text-lg pad:text-xl leading-[30px] text-gray-90">예매자 정보 입력</div>
                <div className="flex pad:ml-3 font-medium text-[16px] leading-6 text-gray-40 items-center">본인확인을 위해 정확한 정보를 입력해주세요.</div>
            </div>
            <div className="flex flex-col">
                <InfoTemplate
                    key={0}
                    role={"예매자"}
                    handleBuyerChange={handleBuyerChange}
                    handlePhoneChange={handlePhoneChange}
                />
            </div>
            {companions.map((companion, index) => (
                <div key={index + 1} className="flex flex-row mt-2">
                    <InfoTemplate
                        key={index + 1}
                        role={companion}
                        handleNamesArrayChange={(value) => handleNamesArrayChange(index, value)}
                        handlePhonesArrayChange={(value) => handlePhonesArrayChange(index, value)}
                        setMember={setMember}
                    />
                </div>
            ))}
            {member < 5 && <button onClick={() => setMember(prevMember => prevMember + 1)} className='mt-6 flex items-center justify-center w-[282px] pad:w-[588px] h-[59px] bg-gray-5 rounded-xl text-gray-60 text-center font-normal leading-6 text-[18px]'>+ 동반인 추가...</button>}
        </div>
    );
};

export default GeneralInfo;
