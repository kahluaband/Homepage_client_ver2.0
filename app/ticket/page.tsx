'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LocationModal from '@/components/popups/ticket/LocaltionModal';
import TicketOption from '@/components/templates/ticket/TicketOption';
import Bar from '@/components/ui/Bar';
import Image from 'next/image';
import Link from 'next/link';
import DropdownMenu from '@/components/templates/ticket/DropdownMenu';
import { information } from '@/components/data/Information';
import RecommendedList from '@/components/ticket/RecommendedList';
import { axiosInstance } from '@/api/auth/axios';
import TicketDetail from '@/components/ticket/TicketDetail';

const apikey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

declare global {
  interface Window {
    kakao: any;
  }
}

const Page = () => {
  return (
    <div className="flex relative flex-col top-16 h-[1150px] mb:h-[1000px] w-full pad:w-[768px] dt:w-[1200px] mx-auto z-10">
      <TicketDetail id="1" />
    </div>
  );
};
export default Page;
