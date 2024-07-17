"use client"
import MustRead from "@/components/templates/ticket/MustRead";
import TicketStatus from "@/components/templates/ticket/TicketStatus";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Complete = () => {
    const params = useSearchParams();
    const reservationId = params.get("reservation_id");
    const [dynamicHeightClass, setDynamicHeightClass] = useState("");

    useEffect(() => {
    const updateHeightClass = () => {
        const screenHeight = window.screen.height;
        const adjustedHeight = screenHeight - 64; 

        setDynamicHeightClass(`h-[${adjustedHeight}px]`);
    };

    updateHeightClass();
    window.addEventListener("resize", updateHeightClass);
    return () => {
        window.removeEventListener("resize", updateHeightClass);
    };
    }, []); 

    return (
    <div className={`w-[996px] flex flex-col relative mx-auto top-20 ${dynamicHeightClass}`}>
        <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex mx-auto items-center justify-center">
            <p className="h-12 text-gray-0 text-center text-2xl font-semibold leading-[48px]">예매가 완료되었습니다.</p>
        </div>
        <div className="h-[517px] w-full rounded-b-xl border border-gray-15 flex flex-col mx-auto">
            <TicketStatus reservation_id={reservationId as string} />
            <MustRead/>
        </div>
        <Link href="/ticket/" className="mt-10 w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center mx-auto rounded-xl text-[18px] font-medium text-gray-60 bg-gray-5">예매 페이지로 돌아가기</Link>
    </div>
    );
};

export default Complete;