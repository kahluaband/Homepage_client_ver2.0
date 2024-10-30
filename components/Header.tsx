'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import logo_black from '@/public/image/KAHLUA-black.svg';
import logo_white from '@/public/image/KAHLUA.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import table_menu from '@/public/image/tabler_menu-2.svg';
import table_menu_white from '@/public/image/tabler_menu-2-white.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material';
import kahlua_logo from '@/public/image/KAHLUA-black.svg';
import youtube_logo from '@/public/image/youtube-icon.svg';
import kakaotalk_logo from '@/public/image/kakaotalk-icon.svg';
import instagram_logo from '@/public/image/instagram-icon.svg';
import { useRouter } from 'next/navigation';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '@media (min-width: 360px)': {
            width: '280px',
          },
          '@media (min-width: 834px)': {
            width: '634px',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '8px 12px',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 834,
      lg: 1500,
      xl: 1920,
    },
  },
});

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLink, setCurrentLink] = useState('');
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [kahluaRightOffset, setKahluaRightOffset] = useState(0); // 추가 요소 위치

  const kahluaRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <div className="w-auto mt-8 ml-8 mb-8">
        {width <= 834 ? (
          <Image src={kahlua_logo} alt="kahlua_logo" height={16} width={94} />
        ) : (
          <Image src={kahlua_logo} alt="kahlua_logo" height={24} width={140} />
        )}
      </div>
      <List>
        {['ABOUT', 'PERFORMANCE', 'TICKET', 'RECRUIT', 'KAHLUA'].map(
          (section, index) => (
            <ListItem key={section} disablePadding>
              <ListItemButton>
                <div
                  className={`w-[610px] rounded-[20px] flex items-center ${width <= 834 ? 'pl-5 h-[40px]' : 'pl-5 h-[43px]'} ${section === currentLink ? 'bg-primary-50' : ''}`}
                  onClick={() => handleLinkClick(section)}
                >
                  <ListItemText
                    primary={section}
                    className={`font-pretendard font-medium ${section === currentLink ? 'text-gray-0' : 'text-gray-70'} ${width <= 834 ? 'text-base' : 'text-lg'}`}
                  />
                </div>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <div className="fixed bottom-14 left-8">
        {width <= 834 ? (
          <Image
            src={kahlua_logo}
            alt="kahlua_logo"
            height={24}
            className="pb-6"
          />
        ) : (
          <Image
            src={kahlua_logo}
            alt="kahlua_logo"
            height={32}
            className="pb-6"
          />
        )}
        <List className="flex gap-4">
          <Link href="https://www.youtube.com/@kahluaband8409">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex justify-center items-center">
              <Image
                src={youtube_logo}
                alt="youtube_logo"
                width={24}
                height={24}
              />
            </div>
          </Link>
          <Link href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA==">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex justify-center items-center">
              <Image
                src={instagram_logo}
                alt="instagram_logo"
                width={24}
                height={24}
              />
            </div>
          </Link>
          <Link href="http://pf.kakao.com/_UaIZG/chat">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex justify-center items-center">
              <Image
                src={kakaotalk_logo}
                alt="youtube_logo"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </List>
      </div>
    </Box>
  );

  let Url = [
    { name: 'ABOUT', url: '/about' },
    { name: 'PERFORMANCE', url: '/performance' },
    { name: 'TICKET', url: '/ticket' },
    { name: 'RECRUIT', url: '/recruit' },
    { name: 'KAHLUA', url: '/kahlua' },
  ];

  const handleLinkClick = (name: string) => {
    router.push(`/${name.toLowerCase()}`);
    setCurrentLink(name);
  };

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // KAHLUA 요소의 위치를 가져와 설정
    if (kahluaRef.current) {
      const { right } = kahluaRef.current.getBoundingClientRect();
      setKahluaRightOffset(window.innerWidth - right); // 오른쪽 기준 위치로 조정
    }
  }, [isHovered, width]); // 크기 변경이나 hover 상태 변경 시 업데이트

  return (
    <ThemeProvider theme={theme}>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div className={`flex flex-col ${isHovered ? 'mt-[64px]' : ''}`}>
        {/* 기존 Header */}
        <div
          className={`font-pretendard w-full min-h-[64px] max-h-[104px] fixed top-0 bg-gray-0 flex flex-row justify-center min-[1500px]:justify-between items-center px-0 min-[1500px]:px-40 z-50 
                ${pathname === '/recruit' || pathname === '/contributors' ? 'bg-gray-90/20 ' : 'bg-gray-0'}`}
        >
          <div className="min-[1500px]:hidden cursor-pointer fixed left-6">
            {pathname === '/recruit' || pathname === '/contributors' ? (
              <Image
                src={table_menu_white}
                alt="moblie_menu_button"
                width={24}
                onClick={toggleDrawer(true)}
              />
            ) : (
              <Image
                src={table_menu}
                alt="moblie_menu_button"
                width={24}
                onClick={toggleDrawer(true)}
              />
            )}
          </div>
          <div>
            <Link href="/" key="home">
              {pathname === '/recruit' || pathname === '/contributors' ? (
                <Image
                  src={logo_white}
                  width={140}
                  alt="logo-white"
                  className="h-4 min-[834px]:h-6"
                />
              ) : (
                <Image
                  src={logo_black}
                  width={140}
                  alt="logo-black"
                  className="h-4 min-[834px]:h-6"
                />
              )}
            </Link>
          </div>
          {/* KAHLUA와 추가 요소를 감싸는 공통 div */}
          <div>
            <ul className="hidden min-[1500px]:flex flex-row gap-[64px]">
              {Url.map((url) => (
                <li
                  key={url.name}
                  className={`font-medium text-center text-[18px] leading-6 ${
                    pathname === '/recruit' || pathname === '/contributors'
                      ? 'text-gray-0'
                      : ''
                  }`}
                  // 마우스가 KAHLUA에 올라가면 추가 요소 표시
                  onMouseOver={() =>
                    url.name === 'KAHLUA' && setIsHovered(true)
                  }
                  onMouseOut={() =>
                    url.name === 'KAHLUA' && setIsHovered(false)
                  }
                >
                  <Link href={url.url} passHref>
                    <div
                      ref={url.name === 'KAHLUA' ? kahluaRef : null}
                      onClick={() => handleLinkClick(url.name)}
                    >
                      {url.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden min-[1500px]:flex ">
            {/* 로그인 코드 작성 후 수정 필요 */}
            <p className="text-lg text-gray-50 text-center">로그인</p>
            {/*<p className="text-lg text-danger-40 text-center">로그아웃</p>*/}
          </div>
        </div>

        {/* 추가 요소를 헤더 아래에 위치시키기 위해 마진 조정 */}
        {isHovered && (
          <div
            className="absolute top-[64px] text-gray-60 h-10 hidden min-[1500px]:flex"
            style={{ right: `${kahluaRightOffset - 28}px` }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            <ul className="gap-[60px] w-full h-full flex flex-row justify-end">
              <li>RESERVATION</li>
              <li>ANNOUNCEMENT</li>
              <li>MYPAGE</li>
              <li>ADMIN</li>
            </ul>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Header;
