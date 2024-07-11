"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Search: React.FC = () => {
    const [reservationId, setReservationId] = useState("");
    const [dynamicHeightClass, setDynamicHeightClass] = useState("");

    const handleSearchReservation = () => {
        window.location.href = `/ticket/reservation?reservation_id=${reservationId}`;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReservationId(event.target.value);
    };

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
        <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex flex-col mx-auto items-center justify-center gap-4">
            <p className="h-12 text-gray-0 text-center text-2xl font-semibold leading-[48px]">예매 내역 조회</p>
            <p className="text-gray-20 text-center text-lg  font-normal leading-[27px]">티켓 예매 내역을 확인하고 취소할 수 있습니다.</p>
        </div>
        <div className="h-[238px] w-full rounded-b-xl border border-gray-15 flex flex-col mx-auto px-[102px]">
            <p className="mt-[72px] font-semibold leading-[30px] text-[20px]">예매 번호 입력 </p>
            <div className="flex flex-row gap-6 mt-4 items-center">
                <input placeholder="예매 번호를 입력해주세요." value={reservationId} onChange={handleInputChange} className="flex h-12 w-[588px] rounded-xl border border-gray-15 px-4 py-3 text-[16px] font-normal focus:outline-none focus:border-primary-40 focus:outline-[1px]" />
                <button onClick={handleSearchReservation} className="w-[180px] h-[59px] flex flex-shrink-0 text-center justify-center items-center mx-auto rounded-xl text-[18px] font-medium text-gray-0 bg-primary-50">조회하기</button>
            </div>
        </div>
        <Link href="/ticket/" className="mt-10 w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center mx-auto rounded-xl text-[18px] font-medium text-gray-60 bg-gray-5">예매 페이지로 돌아가기</Link>
    </div>
    );
};

export default Search;