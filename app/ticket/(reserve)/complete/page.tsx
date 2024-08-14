"use client";
import MustRead from "@/components/templates/ticket/MustRead";
import TicketStatus from "@/components/templates/ticket/TicketStatus";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/api/auth/axios";
import { information } from "@/components/data/Information";

const Complete: React.FC = () => {
    const params = useSearchParams();
    const reservationId = params.get("reservationId");

    const [dynamicHeightClass, setDynamicHeightClass] = useState("");
    const [buyer, setBuyer] = useState<string>("");
    const [phone_num, setPhoneNum] = useState<string>("");
    const [reservation_id, setReservationId] = useState<string>("");
    const [student_id, setStudentId] = useState<string>("");
    const [state, setState] = useState<any>(null);
    const [type, setType] = useState<string>("GENERAL");

    // Adjust the height dynamically based on the screen size
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

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const response = await axiosInstance.get(`/tickets/get?reservationId=${reservationId}`);
                if (response.status === 200) {
                    const result = response.data.result;
                    setBuyer(result.buyer);
                    setPhoneNum(result.phone_num);
                    setReservationId(result.reservationId); 
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
        <div className="relative w-full h-[200px] pad:rounded-t-xl overflow-hidden">
            <div className="absolute inset-0 bg-ticket-complete bg-center bg-cover filter blur-[6px] z-[-1]"></div>
            <div className="relative flex flex-col h-full items-center justify-center pad:bg-gray-90 bg-opacity-60 rounded-t-xl">
                <p className="h-12 text-gray-0 text-center text-2xl pad:text-[32px]  font-semibold leading-[48px]">예매가 완료되었습니다.</p>
                <p className="mt-4 text-gray-20 text-center text-base pad:text-lg  font-normal leading-[27px]">{information.title}</p>
                <p className="mt-1 text-gray-20 text-center text-base pad:text-lg  font-normal leading-[27px]">{information.subDate}</p>
            </div>
        </div>
        <div className="h-full pad:h-[642px] dt:h-[517px] w-full pad:rounded-b-xl pad:border pad:border-gray-15 flex flex-col mx-auto">
            <TicketStatus reservation_id={reservation_id} buyer={buyer} phone_num={phone_num} student_id={student_id} state={state} type={type}/>
            <MustRead/>
        </div>
        <Link href="/ticket/" className="mt-14 pad:mt-10 w-[328px] pad:w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center mx-auto rounded-xl text-[18px] font-medium text-gray-60 bg-gray-5">예매 페이지로 돌아가기</Link>
        <div className="h-[123px] pad:h-[164px]"/>
    </div>
    );
};

export default Complete;