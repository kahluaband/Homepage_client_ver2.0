'use client';

import CancelRead from '@/components/templates/ticket/CancelRead';
import TicketStatus from '@/components/templates/ticket/TicketStatus';
import { axiosInstance } from '@/api/auth/axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

const ReservationDetails = () => {
  const params = useSearchParams();
  const reservationId = params.get('reservationId');
  const [dynamicHeightClass, setDynamicHeightClass] = useState('');
  const [buyer, setBuyer] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');
  const [state, setState] = useState<any>(null);
  const [type, setType] = useState<string>('GENERAL');

  useEffect(() => {
    const updateHeightClass = () => {
      const adjustedHeight = window.screen.height - 64;
      setDynamicHeightClass(`h-[${adjustedHeight}px]`);
    };

    updateHeightClass();
    window.addEventListener('resize', updateHeightClass);
    return () => {
      window.removeEventListener('resize', updateHeightClass);
    };
  }, []);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      if (!reservationId) return;

      try {
        const response = await axiosInstance.get(
          `/tickets/get?reservationId=${reservationId}`
        );
        if (response.status === 200) {
          const result = response.data;
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

    fetchTicketDetails();
  }, [reservationId]);

  return (
    <div
      className={`w-full pad:w-[796px] dt:w-[996px] flex flex-col relative mx-auto top-20 ${dynamicHeightClass}`}
    >
      <div className="relative w-full h-[200px] pad:rounded-t-xl overflow-hidden">
        <div className="absolute inset-0 bg-ticket-complete bg-center bg-cover filter blur-[6px] z-[-1]"></div>
        <div className="relative flex h-full items-center justify-center pad:bg-gray-90 bg-opacity-60 rounded-t-xl">
          <p className="h-12 text-gray-0 text-center text-2xl pad:text-[32px] font-semibold leading-[48px]">
            예매가 취소되었습니다.
          </p>
        </div>
      </div>
      <div className="h-full w-full pad:rounded-b-xl pad:border pad:border-gray-15 flex flex-col mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <TicketStatus
            reservation_id={reservationId as string}
            buyer={buyer}
            phone_num={phoneNum}
            student_id={studentId}
            state={state}
            type={type}
          />
        </Suspense>
        <CancelRead />
      </div>
      <Link
        href="/ticket/"
        className="mt-10 w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center mx-auto rounded-xl text-[18px] font-medium text-gray-60 bg-gray-5"
      >
        예매 페이지로 돌아가기
      </Link>
    </div>
  );
};

const ReservationDetailsWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ReservationDetails />
  </Suspense>
);

export default ReservationDetailsWrapper;
