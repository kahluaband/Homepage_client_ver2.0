// TimeTable.tsx
import React, { useState, useEffect } from 'react';

// 예약 상태 타입
export interface Reservation {
  timeRange: string;
  status: 'unavailable' | 'booked' | 'myReservation' | 'available';
  name?: string; // 예약자의 이름 (예약 마감 상태일 때만 표시)
}

interface TimeTableProps {
  date: Date | null;
  onSelectTime: (timeRange: string) => void;
  reservations: Reservation[];
}

const TimeTable = ({ date, onSelectTime, reservations }: TimeTableProps) => {
  const hours = Array.from({ length: 12 }, (_, i) => i + 10); // 10시부터 22시까지
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<string | null>(null); // 시작 시간 추적
  const [endTime, setEndTime] = useState<string | null>(null); // 종료 시간 추적

  // 시간 선택 및 해제
  const handleTimeClick = (startTimeStr: string, endTimeStr: string) => {
    if (!date) {
      alert('날짜를 선택해 주세요!');
      return;
    }

    // 이미 시작과 종료 시간이 선택된 상태에서 다시 클릭하면 초기화
    if (startTime && endTime) {
      setSelectedTimes([]);
      setStartTime(null);
      setEndTime(null);
      return;
    }

    // 시작 시간이 없을 때: 시작 시간으로 설정
    if (!startTime) {
      setStartTime(startTimeStr);
      setSelectedTimes([`${startTimeStr} ~ ${endTimeStr}`]);
    }
    // 시작 시간이 설정된 상태에서 두 번째 클릭: 종료 시간으로 설정
    else {
      setEndTime(endTimeStr);
      const newSelectedTimes = generateTimeRange(startTime, endTimeStr);
      setSelectedTimes(newSelectedTimes);
    }
  };

  // 시작 시간과 종료 시간 사이의 시간을 모두 선택
  const generateTimeRange = (start: string, end: string) => {
    const times = [];
    let current = start;

    while (current !== end) {
      const [hour, minute] = current.split(':').map(Number);
      const nextMinute = minute === 0 ? '30' : '00';
      const nextHour = minute === 0 ? hour : hour + 1;
      const nextTime = `${nextHour}:${nextMinute}`;

      times.push(`${current} ~ ${nextTime}`);
      current = nextTime;
    }

    times.push(`${current} ~ ${end}`);
    return times;
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
    console.log(formatSelectedRange());
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
    <div className="flex flex-col w-full">
      <p className="text-black text-base mb-2">* 30분 단위 예약 가능</p>
      <div className="flex flex-row py-2 mb-6 overflow-x-scroll">
        {hours.map((hour) => (
          <div key={hour} className="flex flex-col dt:w-[100px] ph:w-[64px]">
            <span className="text-base mb-1">{hour}시</span>
            <div className="flex flex-row">
              <div
                key={`${hour}:00`}
                className={`pad:flex-1 h-[60px] w-[32px] cursor-pointer ${
                  date
                    ? getTimeSlotStatus(`${hour}:00`, `${hour}:30`) ===
                      'selected'
                      ? 'bg-primary-50 text-white'
                      : 'bg-gray-5'
                    : 'bg-gray-7 cursor-not-allowed'
                }`}
                onClick={() => handleTimeClick(`${hour}:00`, `${hour}:30`)}
              ></div>
              <div
                key={`${hour}:30`}
                className={`pad:flex-1 h-[60px] w-[32px] cursor-pointer mr-[1px] ${
                  date
                    ? getTimeSlotStatus(`${hour}:30`, `${hour + 1}:00`) ===
                      'selected'
                      ? 'bg-primary-50 text-white'
                      : 'bg-gray-5'
                    : 'bg-gray-7 cursor-not-allowed'
                }`}
                onClick={() => handleTimeClick(`${hour}:30`, `${hour + 1}:00`)}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap pad:flex-nowrap gap-6 pb-10 border-b border-gray-15 text-sm pad:text-base">
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 pad:w-6 pad:h-6 bg-gray-15 mr-2"></span>
          예약 불가능
        </div>
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 pad:w-6 pad:h-6 bg-primary-10 mr-2"></span>
          예약 마감
        </div>
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 pad:w-6 pad:h-6 bg-warning-10 mr-2"></span>
          내예약
        </div>
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 pad:w-6 pad:h-6 bg-gray-5 mr-2"></span>
          예약 가능
        </div>
      </div>
      {formattedReservation() && (
        <div className="mt-4 text-black pad:text-2xl pb-10 border-b border-gray-15">
          {formattedReservation()}
        </div>
      )}
    </div>
  );
};

export default TimeTable;
