'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import logo_black from '@/public/image/KAHLUA-black.svg';
import logo_white from '@/public/image/KAHLUA.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import table_menu from '@/public/image/tabler_menu-2.svg';

const Header = () => {
  const pathname = usePathname();
  const [currentLink, setCurrentLink] = useState('');

  let Url = [
    { name: 'ABOUT', url: '/about' },
    { name: 'PERFORMANCE', url: '/performance' },
    { name: 'TICKET', url: '/ticket' },
    { name: 'RECRUIT', url: '/recruit' },
  ];

  const handleLinkClick = (name: string) => {
    setCurrentLink(name);
  };

  return (
    // padding 수정 필요
    <div className="font-pretendard w-full h-[64px] fixed bg-gray-0 flex flex-row justify-center min-[1920px]:justify-between items-center px-0 min-[1920px]:px-40 ">
      <div className="min-[1920px]:hidden cursor-pointer fixed left-6">
        <Image src={table_menu} alt="moblie_menu_button" width={24} />
      </div>
      <div>
        <Link href="/" key="home">
          {pathname === '/recruit' ? (
            <Image
              src={logo_white}
              alt="logo-white"
              className="h-4 min-[834px]:h-6"
            />
          ) : (
            <Image
              src={logo_black}
              alt="logo-black"
              className="h-4 min-[834px]:h-6"
            />
          )}
        </Link>
      </div>
      <div>
        <ul className="hidden min-[1920px]:flex flex-row gap-[64px]">
          {Url.map((url) => (
            <li
              key={url.name}
              className={`font-medium text-center text-[18px] leading-6 ${
                pathname === '/recruit' ? 'text-gray-0' : ''
              }`}
            >
              <Link href={url.url} passHref>
                <div onClick={() => handleLinkClick(url.name)}>{url.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
