"use client"

import CancelModal from "@/components/popups/ticket/CancelModal";
import MustRead from "@/components/templates/ticket/MustRead";
import TicketStatus from "@/components/templates/ticket/TicketStatus";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Reservation = () => {
    const params = useSearchParams();
    const reservationId = params.get("reservationId");
    const [isFreshman, setIsFreshman] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dynamicHeightClass, setDynamicHeightClass] = useState("");
    const [buyer, setBuyer] = useState<string>("");
    const [phone_num, setPhoneNum] = useState<string>("");
    const [student_id, setStudentId] = useState<string>("");
    const [state, setState] = useState<any>(null);
    const [type, setType] = useState<string>("GENERAL");
    const [inputValue, setInputValue] = useState("");


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleConfirmCancel = async () => {
        if ((type === "FRESHMAN" && inputValue === student_id) || (type !== "FRESHMAN" && inputValue === phone_num)) {
            try {
                const response = await axios.patch(`${baseUrl}/tickets/cancel-request?reservationId=${reservationId}`);
                if (response.status === 200) {
                    window.location.href = `/ticket/cancel?reservationId=${reservationId}`;
                } else {
                    console.error(`Unexpected response status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error canceling the ticket:', error);
            }
        } else {
            console.error('Input does not match required value');
        }
    }

    useEffect(() => {
        const updateHeightClass = () => {
            const screenHeight = window.innerHeight;
            const adjustedHeight = screenHeight - 64;
            setDynamicHeightClass(`h-[${adjustedHeight}px]`);
        };

        updateHeightClass();
        window.addEventListener("resize", updateHeightClass);
        return () => {
            window.removeEventListener("resize", updateHeightClass);
        };
    }, []);

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}/tickets/get?reservationId=${reservationId}`);
                if (response.status === 200) {
                    const result = response.data.result;
                    setBuyer(result.buyer);
                    setPhoneNum(result.phone_num);
                    setStudentId(result.studentId); 
                    setState(result.status); 
                    setType(result.type);
                } else {
                    console.error(`Unexpected response status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching ticket details:', error);
            }
        };

        if (reservationId) {
            fetchTicketDetails();
        }
    }, [reservationId]);


    return (
        <div className={`w-full pad:w-[786px] dt:w-[996px] flex flex-col relative mx-auto top-20 ${dynamicHeightClass}`}>
            <div className="h-[200px] w-full pad:rounded-t-xl bg-gray-90 flex flex-col mx-auto items-center justify-center gap-4">
                <p className="h-12 text-gray-0 text-center text-2xl font-semibold leading-[48px]">예매 내역 조회</p>
                <p className="text-gray-20 text-center text-lg  font-normal leading-[27px]">티켓 예매 내역을 확인하고 취소할 수 있습니다.</p>
            </div>
            <div className="h-full w-full pad:rounded-b-xl pad:border pad:border-gray-15 flex flex-col mx-auto">
                <TicketStatus reservation_id={reservationId as string} buyer={buyer} phone_num={phone_num} student_id={student_id} state={state} type={type} />
                <MustRead/>
            </div>
            <div className="flex flex-col mb-8 pad:flex-row mt-10 gap-[18px] dt:gap-6 text-[18px] font-medium mx-auto">
                <button onClick={handleOpenModal} className="pad:hidden w-[328px] pad:w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center rounded-xl bg-gray-0 text-danger-40 border border-danger-40">예매 취소하기</button>
                    <Link href="/ticket/" className="w-[328px] pad:w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center rounded-xl text-gray-60 bg-gray-5">예매 페이지로 돌아가기</Link>
                <button onClick={handleOpenModal} className="w-[328px] pad:w-[384px] h-[59px] hidden pad:flex flex-shrink-0 text-center justify-center items-center rounded-xl bg-gray-0 text-danger-40 border border-danger-40">예매 취소하기</button>
            </div>
            <CancelModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmCancel}
                isFreshman={type === "FRESHMAN"}
                inputValue={inputValue}
                onInputChange={handleInputChange}
            />
        </div>
    );
};

export default Reservation;
