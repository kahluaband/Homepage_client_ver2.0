'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ticketing_image from '@/public/image/admin/ticketing.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import { authInstance } from '@/api/auth/axios';

interface TicketingProps {
  status: string;
  number: number;
  name: string;
  phone: string;
  count: number;
  department?: string;
  afterParty?: boolean;
}

/// dummy data
const freshmenTicketingList: TicketingProps[] = [
  {
    status: '결제 완료',
    number: 1234567890123,
    name: '홍길동',
    phone: '010-1234-5678',
    count: 2,
    department: '디자인커뮤니케이션학과',
    afterParty: true,
  },
  {
    status: '미결제',
    number: 9876543210987,
    name: '서가영',
    phone: '010-5678-1234',
    count: 3,
    department: '컴퓨터공학과',
    afterParty: false,
  },
];

const generalTicketingList: TicketingProps[] = [
  {
    status: '결제 완료',
    number: 1234567890123,
    name: '홍길동',
    phone: '010-1234-5678',
    count: 2,
  },
  {
    status: '미결제',
    number: 12322890123,
    name: '홍길동',
    phone: '010-1234-5678',
    count: 2,
  },
  {
    status: '결제 완료',
    number: 1234563390123,
    name: '홍길동',
    phone: '010-1234-5678',
    count: 2,
  },
];

const page = () => {
  const router = useRouter();
  const typeArr = ['All', '신입생', '일반'];
  const [type, setType] = useState('All');

  const getTicketList = async () => {
    try {
      const response = await authInstance.get('/admin/tickets');
    } catch (error: any) {
      console.error(error);
    }
  };

  // middleware로 수정 가능성
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      router.push('/login');
    }
  });

  return (
    <div className="w-full h-full">
      <div className="font-pretendard w-full pt-[64px] flex flex-col items-center">
        <div className="w-full h-[259px] bg-gray-5 flex justify-between px-[360px]">
          <div className="flex flex-col mt-16">
            <span className="font-mustica text-[40px] text-gray-90 font-semibold leading-10 pb-[15px]">
              Ticketing List
            </span>
            <section className="flex gap-2 pb-10">
              <span className="font-pretendard text-2xl text-gray-90 font-semibold leading-9">
                2024 9월 정기공연
              </span>
              {/* 데이터 연동 필요 */}
              <span className="font-pretendard text-2xl text-primary-50 font-semibold leading-9">
                00
              </span>
            </section>
            <section className="w-[252px] h-8 rounded-[32px] bg-gray-0">
              {typeArr.map((typeName) => (
                <div
                  key={typeName}
                  onClick={() => {
                    setType(typeName);
                  }}
                  className={`${type === typeName ? 'bg-primary-50' : 'bg-gray-0'} " w-[84px] inline-flex px-[12px] py-[4px] justify-center items-center gap-[10px] rounded-[32px] cursor-pointer "`}
                >
                  <span
                    key={typeName}
                    className={`${type === typeName ? 'text-gray-0' : 'text-gray-50'} " text-center font-pretendard text-[16px] font-medium leading-6 "`}
                  >
                    {typeName}
                  </span>
                </div>
              ))}
            </section>
          </div>
          <Image src={ticketing_image} alt="image" width={443} height={259} />
        </div>
        {/* 데이터 섹션 */}
        <section className="w-full h-full flex flex-col items-center">
          <div className="w-[1200px] h-[51px] bg-gray-90 rounded-t-3xl mt-8 font-pretendard flex justify-start items-center">
            <div className="w-[94px] text-center text-lg font-medium text-gray-0">
              상태
            </div>
            <div className="w-[186px] text-center text-lg font-medium text-gray-0">
              예매 번호
            </div>
            <div className="w-[120px] text-center text-lg font-medium text-gray-0">
              이름
            </div>
            <div className="w-[160px] text-center text-lg font-medium text-gray-0">
              전화번호
            </div>
            <div className="w-[120px] text-center text-lg font-medium text-gray-0">
              매수
            </div>
            <div className="w-[256px] text-center text-lg font-medium text-gray-0">
              학과
            </div>
            <div className="w-[120px] text-center text-lg font-medium text-gray-0">
              뒷풀이
            </div>
          </div>
          <div className="max-w-[1200px] h-auto">
            {freshmenTicketingList.map((ticketing) => (
              <Accordion key={ticketing.number}>
                <AccordionSummary
                  className="w-[1200px] border-solid border-gray-10 border-b-2 p-0 pr-6"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {ticketing.status === '결제 완료' ? (
                    <Typography className="w-[94px] text-center text-base font-medium text-success-40">
                      {ticketing.status}
                    </Typography>
                  ) : (
                    <Typography className="w-[94px] text-center text-base font-medium text-danger-40">
                      {ticketing.status}
                    </Typography>
                  )}

                  <Typography className="w-[186px] text-center text-base font-medium text-gray-60">
                    {ticketing.number}
                  </Typography>
                  <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
                    {ticketing.name}
                  </Typography>
                  <Typography className="w-[160px] text-center text-base font-medium text-gray-60">
                    {ticketing.phone}
                  </Typography>
                  <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
                    {ticketing.count}장
                  </Typography>
                  <Typography className="w-[256px] text-center text-base font-medium text-gray-60">
                    {ticketing.department}
                  </Typography>
                  <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
                    {ticketing.afterParty ? '참석' : 'X'}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="flex pt-6 pb-5">
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}

            {generalTicketingList.map((ticketing) => (
              <Accordion key={ticketing.number}>
                <AccordionSummary
                  className="w-[1200px] border-solid border-gray-10 border-b-2 p-0 pr-6"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {ticketing.status === '결제 완료' ? (
                    <Typography className="w-[94px] text-center text-base font-medium text-success-40">
                      {ticketing.status}
                    </Typography>
                  ) : (
                    <Typography className="w-[94px] text-center text-base font-medium text-danger-40">
                      {ticketing.status}
                    </Typography>
                  )}
                  <Typography className="w-[186px] text-center text-base font-medium text-gray-60">
                    {ticketing.number}
                  </Typography>
                  <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
                    {ticketing.name}
                  </Typography>
                  <Typography className="w-[160px] text-center text-base font-medium text-gray-60">
                    {ticketing.phone}
                  </Typography>
                  <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
                    {ticketing.count}장
                  </Typography>
                  <Typography className="w-[256px] text-center text-base font-medium text-gray-60">
                    -
                  </Typography>
                  <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
                    -
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
