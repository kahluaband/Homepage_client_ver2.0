'use client';
import Banner from '@/components/reservation/Banner';
import CalendarUI from '@/components/reservation/CalendarUI';
import ReservationForm from '@/components/reservation/ReservationForm';
import RoomNotice from '@/components/reservation/RoomNotice';
import TimeTable from '@/components/reservation/TimeTable';
import React, { useState } from 'react';

const page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  // 날짜 선택
  const handleDateSelect = (date: Date) => setSelectedDate(date);

  // 시간 선택
  const handleTimeSelect = (time: string) => setSelectedTime(time);

  // 다음 버튼 클릭시 컴포넌트 전환
  const handleNext = () => {
    window.scrollTo(0, 0);
    setIsFormVisible(false);
  };

  // 예약 정보 서버로 전송 함수 (추가수정필요)
  const handleReservationSubmit = async (name: string) => {
    const reservationData = {
      date: selectedDate?.toISOString(),
      time: selectedTime,
      name,
    };
    window.location.reload(); // 페이지 새로고침
    // 서버로 전송하는 로직 추가 필요
  };

  return (
    <div className="font-pretendard pb-48 mx-auto w-full pad:w-[786px] dt:w-[1200px] flex flex-col justify-center">
      <Banner />
      {isFormVisible ? (
        <div className="mx-4 pad:m-0 flex flex-col items-center gap-y-6">
          <CalendarUI onSelectDate={handleDateSelect} />
          <TimeTable date={selectedDate} onSelectTime={handleTimeSelect} />
          <RoomNotice />
          <button
            onClick={handleNext}
            disabled={!selectedTime}
            className={`rounded-xl w-[280px] h-[60px] text-[#fff] text-lg
                  ${selectedDate && selectedTime ? 'bg-primary-50 hover:bg-primary-60' : 'bg-gray-10'}`}
          >
            다음
          </button>
        </div>
      ) : (
        <div className="mx-4 pad:m-0">
          <ReservationForm
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSubmit={handleReservationSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default page;
