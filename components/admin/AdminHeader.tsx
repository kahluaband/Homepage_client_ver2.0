'use client';
import Link from 'next/link';
import React from 'react';
import logo_black from '@/public/image/KAHLUA-black.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { authInstance } from '@/api/auth/axios';

const AdminHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await authInstance.post('/auth/sign-out', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      if (response.data.isSuccess === true) {
        alert(response.data.result);
      }
      localStorage.clear();
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // padding 수정 필요
    <div className="font-pretendard w-full h-[64px] fixed bg-gray-0 flex flex-row justify-between items-center px-[360px]">
      <Link href="/admin/applicant" key="admin">
        <div className="inline-flex gap-5 items-center">
          <Image src={logo_black} alt="logo-black" height={24} />
          <p className="font-mustica text-2xl text-gray-60 font-semibold">
            Admin
          </p>
        </div>
      </Link>
      <div>
        <ul className="flex flex-row gap-[64px]">
          <li
            className="text-lg font-medium cursor-pointer"
            onClick={() => {
              router.push('/admin/applicant');
            }}
          >
            지원 관리
          </li>
          <li
            className="text-lg font-medium cursor-pointer"
            onClick={() => {
              router.push('/admin/ticketing');
            }}
          >
            예매 관리
          </li>
          <li
            className="text-lg font-medium text-danger-40 cursor-pointer"
            onClick={handleLogout}
          >
            로그아웃
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
