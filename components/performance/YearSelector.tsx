'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import chevron_down from '@/public/image/performance/chevron-down.svg';
import chevron_up from '@/public/image/performance/chevron-up.svg';
import { useRecoilState } from 'recoil';
import { selectedYear } from '@/atoms';

// const yearData = {
//   '2024': [
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9Luut6RrZvInAnzspEsL2JG2S9',
//       thumbnail: '',
//       title: '2024.03.04 정기공연',
//       tags: [
//         '# 행복했던 날들이었다',
//         '# 검정치마',
//         '# 터치드',
//         '# 알루미늄',
//         '# Green Day',
//         '# 데이브레이크',
//       ],
//     },
//   ],
//   '2023': [
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9LuuuvOWc_mlR5d5eC3EnYZPiH',
//       thumbnail: '',
//       title: '2023.09.01 정기공연',
//       tags: [
//         '# 그대에게',
//         '# LUCY',
//         '# 직감',
//         '# 실리카겔',
//         '# 멋진헛간 remix',
//         '# Lacuna',
//       ],
//     },
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9LuuuvOWc_mlR5d5eC3EnYZPiH',
//       thumbnail: '',
//       title: '2023.03.06 정기공연',
//       tags: [
//         '# 스물다섯 스물하나',
//         '# 데이식스',
//         '# 잔나비',
//         '# YB 밴드',
//         '# 백예린',
//         '# 미도와 파라솔',
//       ],
//     },
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9Luus1TGr0V9kNhXqSRJJbJkTW',
//       thumbnail: '',
//       title: '2023.01.28 새해맞이 공연',
//       tags: [
//         '# Last Christmas',
//         '# 너드커넥션',
//         '# 쏜애플',
//         "# Can't take my eyes off you",
//         '# Radiohead',
//       ],
//     },
//   ],
//   '2022': [
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9Luusvf1KLF90v1FQBAOejv8_g',
//       thumbnail: '',
//       title: '2022.09.01 정기공연',
//       tags: [
//         '# The Volunteers',
//         '# 사건의 지평선',
//         '# (여자)-아이들',
//         '# Sk8er Boy',
//         '# Muse',
//       ],
//     },
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9LuutWQhQJW-c1j1_rkFdwsRYt',
//       thumbnail: '',
//       title: '2022.03.07 정기공연',
//       tags: [
//         '# 윤하',
//         '# Reality',
//         '# 새소년',
//         '# Champagne Supernova',
//         '# 비와 당신',
//       ],
//     },
//   ],
//   '2019': [
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9Luuuq168b0ZO6X0bE5p5W8LbX',
//       thumbnail: '',
//       title: '2019.09 정기공연',
//       tags: [
//         '# 박하사탕',
//         '# Basket Case',
//         '# 크라잉넛',
//         '# Wake Up When September Ends',
//       ],
//     },
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9Luusva097pGe_sxwVQ5LwBeLN',
//       thumbnail: '',
//       title: '2019.06 깔루아&고스락 연합공연',
//       tags: [
//         '# 그의 바다',
//         '# This Love',
//         '# 아이유',
//         '# 로맨틱펀치',
//         '# Triptych',
//       ],
//     },
//     {
//       url: 'https://www.youtube.com/playlist?list=PLLmJk1z9LuutTG8UD9hNIWbv_F3JotPS-',
//       thumbnail: '',
//       title: '2019.03 정기공연',
//       tags: [
//         '# 나에게로 떠나는 여행',
//         '# Hysteria',
//         '# 브로큰발렌타인',
//         '# Time Is Running Out',
//       ],
//     },
//   ],
// };

const YearSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sYear, setSYear] = useRecoilState(selectedYear);

  const years = ['All', '2024', '2023', '2022', '2019', '2018', '2017', '2016'];
  const year1 = ['All', '2024', '2023', '2022'];
  const year2 = ['2019', '2018', '2017', '2016'];
  const currentYearList = year2.includes(sYear) ? year2 : year1;

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-2 mt-16 relative">
      {/* 연도 4개만 표시 */}
      <div className="max-w-[336px] h-[32px] bg-gray-0 rounded-[32px]">
        {currentYearList.map((year) => (
          <div
            key={year}
            onClick={() => {
              setSYear(year);
            }}
            className={`${sYear === year ? 'bg-primary-50' : 'bg-gray-0'} " w-[84px] inline-flex px-[12px] py-[4px] justify-center items-center gap-[10px] rounded-[32px] cursor-pointer "`}
          >
            <p
              key={year}
              className={`${sYear === year ? 'text-gray-0' : 'text-gray-50'} " text-center font-pretendard text-[16px] font-normal leading-6 "`}
            >
              {year}
            </p>
          </div>
        ))}
      </div>

      {/* 토글 버튼 */}
      {isOpen ? (
        <div
          className="w-8 h-8 rounded-full bg-primary-50 flex justify-center items-center cursor-pointer"
          onClick={toggleBtn}
        >
          <Image src={chevron_up} alt="up" width={24} height={24} />
        </div>
      ) : (
        <div
          className="w-8 h-8 rounded-full bg-gray-0 flex justify-center items-center cursor-pointer"
          onClick={toggleBtn}
        >
          <Image src={chevron_down} alt="down" width={24} height={24} />
        </div>
      )}

      {/* 전체 연도 카드 */}
      {isOpen && (
        <div className="absolute top-8 -left-12 grid grid-cols-4 bg-gray-0 p-3 mt-4 gap-3 rounded-2xl shadow-[0_0_24px_0px_rgba(27,28,35,0.25)]">
          {years.map((year) => (
            <div
              key={year}
              onClick={() => {
                setSYear(year);
                toggleBtn();
              }}
              className={`${sYear === year ? 'bg-primary-50' : 'bg-gray-0'} " px-[12px] py-[4px] justify-center items-center gap-[10px] cursor-pointer rounded-[32px] "`}
            >
              <p
                key={year}
                className={`${sYear === year ? 'text-gray-0' : 'text-gray-50'} " w-[60px] justify-center items-center text-center font-pretendard text-base font-normal "`}
              >
                {year}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YearSelector;
