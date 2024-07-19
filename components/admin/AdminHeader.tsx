'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo_black from '@/public/image/KAHLUA-black.svg';
import logo_white from '@/public/image/KAHLUA.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const AdminHeader = () => {
  return (
    // padding 수정 필요
    <div className="font-pretendard w-full h-[64px] fixed bg-gray-0 flex flex-row justify-between items-center px-40">
      <Link href="/admin" key="admin">
        <div className="inline-flex gap-5 items-center">
          <Image src={logo_black} alt="logo-black" height={24} />
          <p className="font-mustica text-2xl text-gray-60 font-semibold">
            Admin
          </p>
        </div>
      </Link>
      <div>
        <ul className="flex flex-row gap-[64px]">
          <li className="text-lg font-medium">지원 관리</li>
          <li className="text-lg font-medium">예매 관리</li>
          <li className="text-lg font-medium text-danger-40">로그아웃</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
