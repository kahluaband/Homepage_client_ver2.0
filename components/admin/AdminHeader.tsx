'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import logo_black from '@/public/image/KAHLUA-black.svg';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { authInstance } from '@/api/auth/axios';
import table_menu from '@/public/image/tabler_menu-2.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material';
import kahlua_logo from '@/public/image/KAHLUA-black.svg';

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

const AdminHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLink, setCurrentLink] = useState('');

  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
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
    } catch (error) {}
  };

  const handleLinkClick = (url: string) => {
    router.push(url);
    setCurrentLink(url); // URL을 기준으로 currentLink 업데이트
  };

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
        {[
          { name: '지원 관리', url: '/admin/applicant' },
          { name: '예매 관리', url: '/admin/ticketing' },
        ].map((section, index) => (
          <ListItem key={section.name} disablePadding>
            <ListItemButton>
              <div
                className={`w-[610px] rounded-[20px] flex items-center ${width <= 834 ? 'pl-5 h-[40px]' : 'pl-5 h-[43px]'} ${section.url === currentLink ? 'bg-primary-50' : ''}`}
                onClick={() => handleLinkClick(section.url)}
              >
                <ListItemText
                  primary={section.name}
                  className={`font-pretendard font-medium ${section.url === currentLink ? 'text-gray-0' : 'text-gray-70'} ${width <= 834 ? 'text-lg' : 'text-xl'}`}
                />
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="fixed bottom-14 left-8">
        <div className="text-lg font-medium text-danger-40 cursor-pointer" onClick={handleLogout}>
          로그아웃
        </div>
      </div>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div className="font-pretendard w-full h-[64px] fixed top-0 bg-gray-0 flex flex-row justify-center min-[1500px]:justify-between items-center px-0 min-[1500px]:px-40 z-50">
        <Link href="/admin/applicant" key="admin">
          <div className="inline-flex gap-5 items-center">
            <Image src={logo_black} alt="logo-black" height={24} />
            <h1 className="font-mustica text-2xl text-gray-60 font-semibold">
              Admin
            </h1>
          </div>
        </Link>
        <div>
          <div className="dt:hidden cursor-pointer fixed left-6 top-5">
            <Image
              src={table_menu}
              alt="moblie_menu_button"
              width={24}
              onClick={toggleDrawer(true)}
            />
          </div>
          {pathname === '/login' ? null : (
            <ul className="hidden dt:flex flex-row gap-[64px]">
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
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AdminHeader;
