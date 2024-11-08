// TimeTable.tsx
import React, { useState, useEffect } from 'react';

interface TimeTableProps {
  date: Date | null;
  onSelectTime: (timeRange: string) => void;
}

const TimeTable = ({ date, onSelectTime }: TimeTableProps) => {
  const hours = Array.from({ length: 12 }, (_, i) => i + 10); // 10시부터 22시까지
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  // 시간 선택 및 해제
  const handleTimeClick = (startTime: string, endTime: string) => {
    const timeRange = `${startTime} ~ ${endTime}`;
    setSelectedTimes((prevSelected) => {
      if (prevSelected.includes(timeRange)) {
        return prevSelected.filter((t) => t !== timeRange);
      } else {
        return [...prevSelected, timeRange];
      }
    });
  };

  // 선택된 시간 범위 포맷
  const formatSelectedRange = () => {
    if (selectedTimes.length === 0) return '';

    const sortedTimes = selectedTimes
      .map((timeRange) => timeRange.split(' ~ '))
      .sort();

    const startTime = sortedTimes[0][0];
    const endTime = sortedTimes[sortedTimes.length - 1][1];

    return `${startTime} ~ ${endTime}`;
  };

  // 선택된 시간 범위를 상위 컴포넌트에 자동 업데이트
  useEffect(() => {
    onSelectTime(formatSelectedRange());
  }, [selectedTimes, onSelectTime]);

  // 날짜 형식과 선택된 시간 범위 문자열 결합
  const formattedReservation = () => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    const dateString = date ? date.toLocaleDateString('ko-KR', options) : '';
    const timeRange = formatSelectedRange();

    return dateString ? `${dateString} ${timeRange}` : '';
  };

  // 타임 테이블 선택 및 해제 적용
  const getTimeSlotStatus = (startTime: string, endTime: string) => {
    const timeRange = `${startTime} ~ ${endTime}`;
    return selectedTimes.includes(timeRange) ? 'selected' : 'available';
  };

  return (
    <div className="flex flex-col w-full pb-10 border-b border-gray-15">
      <p className="text-black text-base mb-2">* 30분 단위 예약 가능</p>
      <div className="flex flex-row py-2 border-b border-gray-15 overflow-x-scroll">
        {hours.map((hour) => (
          <div key={hour} className="flex flex-col dt:w-[100px] ph:w-[64px]">
            <span className="text-base mb-1">{hour}시</span>
            <div className="flex flex-row">
              <div
                key={`${hour}:00`}
                className={`pad:flex-1 h-[60px] w-[32px] cursor-pointer ${
                  getTimeSlotStatus(`${hour}:00`, `${hour}:30`) === 'selected'
                    ? 'bg-primary-50 text-white'
                    : 'bg-gray-5'
                }`}
                onClick={() => handleTimeClick(`${hour}:00`, `${hour}:30`)}
              ></div>
              <div
                key={`${hour}:30`}
                className={`pad:flex-1 h-[60px] w-[32px] cursor-pointer mr-[1px] ${
                  getTimeSlotStatus(`${hour}:30`, `${hour + 1}:00`) ===
                  'selected'
                    ? 'bg-primary-50 text-white'
                    : 'bg-gray-5'
                }`}
                onClick={() => handleTimeClick(`${hour}:30`, `${hour + 1}:00`)}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-black pad:text-2xl">
        {formattedReservation()}
      </div>
    </div>
  );
};

export default TimeTable;
