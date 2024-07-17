"use client"
import { useState} from "react";
import Link from "next/link";
import OptionBox from "@/components/ui/OptionBox";
import Ticket from "@/components/ui/Ticket";
const TicketOption = () => {
    const [option, setOption] = useState(true);
    const [active, setActive] = useState(true);

    const [freshman, setFreshman] = useState(false);
    const [general, setGeneral] = useState(true);

    const handleFreshmanClick = () => {
        setFreshman(true);
        setGeneral(false);
    };

    const handleGeneralClick = () => {
        setFreshman(false);
        setGeneral(true);
    };
    
    return (
        <div>
            <div className="w-[1200px] h-[331px] mx-auto rounded-xl flex flex-row mt-[40px]">
            <div className="w-[400px] flex flex-col">
                <div className="bg-gray-0 h-[51px] text-[18px] font-medium leading-[27px] text-gray-80 flex items-center">
                    <div className="flex w-[392px] justify-center">
                        <p className="h-[27px] w-[67px] text-center flex">날짜 선택</p>
                    </div>
                </div>
                <div className="h-[280px] flex flex-shrink-0 rounded-bl-xl border-r border-gray-15 bg-gray-5 justify-center">
                    <OptionBox option="2024년 3월 1일" />
                </div>
            </div>
            <div className="w-[400px] flex flex-col">
                <div className="bg-gray-0 h-[51px] text-[18px] font-medium leading-[27px] text-gray-80 flex items-center">
                    <div className="flex w-[392px] justify-center ">
                        <p className="h-[27px] w-[67px] text-center flex">시간 선택</p>
                    </div>
                </div>
                <div className="h-[280px] flex flex-shrink-0 rounded-bl-[12px] border-r border-gray-15 bg-gray-5 justify-center">
                    <OptionBox option="18시 00분"/>
                </div>
            </div>
            <div className="w-[400px] flex flex-col">
                <div className="bg-gray-0 h-[51px] text-[18px] font-medium leading-[27px] text-gray-80 flex items-center">
                    <div className="flex w-[392px] justify-center ">
                        <p className="h-[27px] w-[67px] text-center flex">좌석 선택</p>
                    </div>
                </div>
                <div className="h-[280px] flex flex-col flex-shrink-0 rounded-br-xl border-gray-15 bg-gray-5 items-center">
                    <Ticket className="focus:cursor-pointer" ticket="신입생 티켓" price="무료" state={!active ? "impossible" : freshman === true ? "selected" : "possible"} onClick={handleFreshmanClick}/>
                    <Ticket className="focus:cursor-pointer" ticket="일반 티켓" price="5,000원" state={!active ? "impossible" : general ? "selected" : "possible"} onClick={handleGeneralClick}/>
                </div>
            </div>
            </div>
            <Link href={freshman === true ? "ticket/freshman_ticket/" : "ticket/general_ticket/"}
            className={`mt-[24px] w-[280px] h-[60px] flex flex-shrink-0 text-center justify-center items-center ml-auto rounded-xl text-[18px] font-medium 
                ${active==true ?"text-gray-0 bg-primary-50" : "text-gray-40 bg-gray-10"
            }`}>예매하기</Link>
        </div>
);}

export default TicketOption;