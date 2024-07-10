"use client"

import CancelModal from "@/components/popups/ticket/CancelModal";
import TicketStatus from "@/components/templates/ticket/TicketStatus";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const ReservationDetails = () => {
    const params = useSearchParams();
    const reservationId = params.get("reservation_id");
    const [isFreshman, setIsFreshman] = useState(true);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmCancel = () => {
        window.location.href = `/ticket/cancel?reservation_id=${reservationId}`;
    };

    return (
        <div className="h-screen w-[996px] flex flex-col relative mx-auto top-20 mt-4 ">
            <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex flex-col mx-auto items-center justify-center gap-4">
                <p className="h-12 text-gray-0 text-center text-2xl font-semibold leading-[48px]">예매 내역 조회</p>
                <p className="text-gray-20 text-center text-lg  font-normal leading-[27px]">티켓 예매 내역을 확인하고 취소할 수 있습니다.</p>
            </div>
            <div className="h-[343px] w-full rounded-b-xl border border-gray-15 flex mx-auto">
                <TicketStatus reservation_id={reservationId as string} />
            </div>
            <div className="flex flex-row mt-10 gap-6 text-[18px] font-medium mx-auto">
                <Link href="/ticket/" className="w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center rounded-xl text-gray-60 bg-gray-5">예매 페이지로 돌아가기</Link>
                <button onClick={handleOpenModal} className="w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center rounded-xl bg-gray-0 text-danger-40 border border-danger-40">예매 취소하기</button>
            </div>
            <CancelModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmCancel}
                text={isFreshman ? "학번을" : "전화번호를"}
            />
        </div>
    );
};

export default ReservationDetails;
