'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import logo_black from '@/public/image/KAHLUA-black.svg';
import logo_white from '@/public/image/KAHLUA.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import table_menu from '@/public/image/tabler_menu-2.svg';
import table_menu_white from '@/public/image/tabler_menu-2-white.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
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
  const [width, setWidth] = useState(window.innerWidth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <div className="w-full mt-8 ml-8 mb-8">
        {width <= 834 ? (
          <Image src={kahlua_logo} alt="kahlua_logo" height={16} />
        ) : (
          <Image src={kahlua_logo} alt="kahlua_logo" height={24} />
        )}
      </div>
      <List>
        {['ABOUT', 'PERFORMANCE', 'TICKET', 'RECRUIT'].map((section, index) => (
          <ListItem key={section} disablePadding>
            <ListItemButton>
              <div
                className={`w-[610px] rounded-[20px] flex items-center ${width <= 834 ? 'pl-4 h-[40px]' : 'pl-6 h-[43px]'} ${section === currentLink ? 'bg-primary-50' : ''}`}
                onClick={() => handleLinkClick(section)}
              >
                <ListItemText
                  primary={section}
                  className={`font-pretendard font-medium ${section === currentLink ? 'text-gray-0' : 'text-gray-70'} ${width <= 834 ? 'text-base' : 'text-lg'}`}
                />
              </div>
            </ListItemButton>
          </ListItem>
        ))}
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
  ];

  const handleLinkClick = (name: string) => {
    setCurrentLink(name);
    router.push(`/${name.toLowerCase()}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div
        className={`font-pretendard w-full h-[64px] fixed top-0 bg-gray-0 flex flex-row justify-center min-[1500px]:justify-between items-center px-0 min-[1500px]:px-40 z-50 
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
          <ul className="hidden min-[1500px]:flex flex-row gap-[64px]">
            {Url.map((url) => (
              <li
                key={url.name}
                className={`font-medium text-center text-[18px] leading-6 ${
                  pathname === '/recruit' || pathname === '/contributors'
                    ? 'text-gray-0'
                    : ''
                }`}
              >
                <Link href={url.url} passHref>
                  <div onClick={() => handleLinkClick(url.name)}>
                    {url.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
