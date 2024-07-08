import FreshmanInfo from "@/components/templates/ticket/FreshmanInfo";
import MemberSelection from "@/components/templates/ticket/MemberSelection";
import TicketSelection from "@/components/templates/ticket/TicketSelection";
import React from "react";
const Reserve= () => {
    return (
    <div className="h-[2000px] w-[996px] flex flex-col relative mx-auto top-20 mt-4 ">
        <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex flex-col mx-auto">
            <p className="mt-10 text-gray-0 text-center text-2xl font-semibold leading-[48px]">신입생 티켓 예매</p>
            <p className="mt-4 text-gray-20 text-center text-lg  font-normal leading-[27px]">2024년 3월 정기 공연</p>
            <p className="mt-1 text-gray-20 text-center text-lg  font-normal leading-[27px]">2024.03.01  SAT  18:00</p>
        </div>
        <div className="h-[1395px] w-full rounded-b-xl border border-gray-15 flex flex-col mx-auto">
            <div className="mx-12 flex flex-col">
                <MemberSelection description="신입생은 최대 1인 1매 구매 가능합니다." min={1} max={1} ticket={"freshman"}/>
                <div className="h-[1px] bg-gray-10 flex flex-shrink-0 relative"/>
                <FreshmanInfo/>
                <div className="h-[1px] bg-gray-10 flex flex-shrink-0 relative"/>
                <TicketSelection/>
                <div className="h-[1px] bg-gray-10 flex flex-shrink-0 relative"/>
            </div>
        </div>
    </div>
    );
};

export default Reserve;