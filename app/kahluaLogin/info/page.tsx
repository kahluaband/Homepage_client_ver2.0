"use client";

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const generations: string[] = Array.from({ length: 23 }, (_, i) => `${23 - i}기`);

const sessions: string[] = ['보컬', '드럼', '기타', '베이스', '신디사이저'];

const Page = () => {
    const [name, setName] = useState<string>('');
    const [generation, setGeneration] = useState<string>('');
    const [session, setSession] = useState<string>('');
    const [isComplete, setIsComplete] = useState<boolean>(false);

    useEffect(() => {
        setIsComplete(name !== '' && generation !== '' && session !== '');
    }, [name, generation, session]);

    return (
        <div className="font-pretendard w-full h-full flex justify-center items-center mt-16 text-gray-0 text-center max-pad:-mb-40">
            <div className="w-full h-full justify-center items-center pad:w-[786px] dt:w-[876px] pad:h-[536px] flex flex-col pt-[32px] pad:pt-[58px] pb-[78px] px-[16px] pad:px-[64px] dt:px-[118px] gap-[48px] bg-gray-90 pad:rounded-[24px] mt-[16px] pad:mt-[32px]">
                <div className="flex flex-col gap-[16px] w-full justify-center items-center">
                    <div className="font-semibold text-[64px]">JOIN</div>
                    <div className="font-medium text-[16px] pad:text-[20px] text-gray-20">
                        깔루아 회원만 가입 신청 가능합니다.<br />
                        가입 신청 이후 관리자 인증을 거쳐 KAHLUA 전용 서비스를 이용하실 수 있습니다.
                    </div>
                </div>
                <div className="flex flex-col pad:flex-row gap-[20px] justify-center items-center">
                    <NameInput data={name} setData={setName} />
                    <GenerationInput data={generation} setData={setGeneration} />
                    <SessionInput data={session} setData={setSession} />
                </div>
                <button
                    className={`w-full pad:w-[384px] h-[60px] rounded-[12px] ${isComplete ? 'bg-primary-50 text-gray-0' : 'bg-gray-10 text-gray-40 cursor-not-allowed'}`}
                    disabled={!isComplete}
                >
                    KAHLUA 가입 신청하러 가기
                </button>
            </div>
        </div>
    );
};

interface InputProps {
    data: string;
    setData: React.Dispatch<React.SetStateAction<string>>;
}

const NameInput: React.FC<InputProps> = ({ data, setData }) => (
    <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[24px] rounded-[12px] bg-black">
        <p className="text-primary-50">이름</p>
        <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full bg-black border-none outline-none shadow-none appearance-none text-gray-0"
        />
    </div>
);

const GenerationInput: React.FC<InputProps> = ({ data, setData }) => (
    <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[24px] rounded-[12px] bg-black">
        <p className="text-primary-50">기수</p>
        <Select
            labelId="generation"
            value={data}
            onChange={(e: SelectChangeEvent) => setData(e.target.value)}
            sx={{
                border: 'none',
                padding: 0,
                margin: 0,
                '.MuiSelect-icon': { color: '#ffffff' },
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
                '&.Mui-focused': { outline: 'none', border: 'none' },
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: 152, width: 178, backgroundColor: '#000000', marginTop: 4, padding: 0, borderRadius: 12 } } }}
            className="w-full h-[48px] text-gray-0 text-start p-0"
        >
            {generations.map((gen) => (
                <MenuItem key={gen} value={gen} sx={{ height: 48 }} className="text-gray-0">
                    {gen}
                </MenuItem>
            ))}
        </Select>
    </div>
);

const SessionInput: React.FC<InputProps> = ({ data, setData }) => (
    <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[24px] rounded-[12px] bg-black">
        <p className="text-primary-50">세션</p>
        <Select
            labelId="session"
            value={data}
            onChange={(e: SelectChangeEvent) => setData(e.target.value)}
            sx={{
                border: 'none',
                '.MuiSelect-icon': { color: '#ffffff' },
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: 152, width: 178, backgroundColor: '#000000', marginTop: 4, padding: 0, borderRadius: 12 } } }}
            className="w-full h-[48px] text-gray-0"
        >
            {sessions.map((sess) => (
                <MenuItem key={sess} value={sess} sx={{ height: 48 }} className="text-gray-0">
                    {sess}
                </MenuItem>
            ))}
        </Select>
    </div>
)

export default Page;