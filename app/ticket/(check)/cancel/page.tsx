"use client"

import MustRead from "@/components/templates/ticket/MustRead";
import TicketStatus from "@/components/templates/ticket/TicketStatus";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ReservationDetails = () => {
    const params = useSearchParams();
    const reservationId = params.get("reservation_id");


    return (
        <div className="h-screen w-[996px] flex flex-col relative mx-auto top-20 mt-4 ">
            <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex flex-col mx-auto items-center justify-center gap-4">
                <p className="h-12 text-gray-0 text-center text-2xl font-semibold leading-[48px]">예매 내역 조회</p>
                <p className="text-gray-20 text-center text-lg  font-normal leading-[27px]">티켓 예매 내역을 확인하고 취소할 수 있습니다.</p>
            </div>
            <div className="h-[500px] w-full rounded-b-xl border border-gray-15 flex flex-col mx-auto">
                <TicketStatus reservation_id={reservationId as string} />
                <MustRead/>
            </div>
            <Link href="/ticket/" className="mt-10 w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center mx-auto rounded-xl text-[18px] font-medium text-gray-60 bg-gray-5">예매 페이지로 돌아가기</Link>
        </div>
    );
};

export default ReservationDetails;
