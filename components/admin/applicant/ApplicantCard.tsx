'use client';
import React, { useState, useEffect, useRef } from 'react';
import phone_icon from '@/public/image/admin/tabler_device-mobile.svg';
import department_icon from '@/public/image/admin/tabler_book-2.svg';
import address_icon from '@/public/image/admin/tabler_map-pin.svg';
import Image from 'next/image';
import show_more from '@/public/image/admin/tabler_chevron-down.svg';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import tabler_x from '@/public/image/admin/tabler_x.svg';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '24px',
        },
      },
    },
  },
});

const ApplicantCard = ({
  name,
  phone_num,
  birth_date,
  gender,
  address,
  major,
  first_preference,
  second_preference,
}: {
  name: string;
  phone_num: string;
  birth_date: string;
  gender: string;
  address: string;
  major: string;
  first_preference: string;
  second_preference: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-[384px] h-[242px] rounded-3xl font-pretendard flex flex-col">
      {/* 카드 상단 부분 : 이름 및 기본 개인 정보 */}
      <div className="relative w-full h-[58px] bg-gray-80 rounded-t-3xl flex gap-1 justify-start items-center pl-6">
        <span className="text-xl font-semibold text-gray-0">{name}</span>
        <span className="text-lg font-medium text-gray-50">·</span>
        <span className="text-lg font-medium text-gray-50">{gender}</span>
        <span className="text-lg font-medium text-gray-50">·</span>
        <span className="text-lg font-medium text-gray-50">{birth_date}</span>
        <Image
          src={show_more}
          alt="show_more_icon"
          width={24}
          height={24}
          className="absolute right-5 cursor-pointer"
          onClick={handleClickOpen('paper')}
        />
      </div>
      {/* 카드 하단 부분 : 세부 개인 정보 */}
      <div className="w-full h-[184px] bg-gray-5 rounded-b-3xl pl-6 pt-4">
        <div className="flex gap-2 pb-3">
          <Image src={phone_icon} alt="phone_icon" width={20} height={20} />
          <span className="text-lg font-medium text-gray-80">{phone_num}</span>
        </div>
        <div className="flex gap-2 pb-3">
          <Image
            src={department_icon}
            alt="department_icon"
            width={20}
            height={20}
          />
          <span className="text-lg font-medium text-gray-80">{major}</span>
        </div>
        <div className="flex gap-2 pb-3">
          <Image src={address_icon} alt="address_icon" width={20} height={20} />
          <span className="text-lg font-medium text-gray-80">{address}</span>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <span className="text-lg font-medium text-gray-40">1지망</span>
            <span className="text-lg font-medium text-gray-80">
              {first_preference}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-lg font-medium text-gray-40">2지망</span>
            <span className="text-lg font-medium text-gray-80">
              {second_preference}
            </span>
          </div>
        </div>
      </div>

      {/* 상세 정보 : dialog */}
      <ThemeProvider theme={theme}>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={open}
          onClose={handleClose}
          scroll={scroll}
        >
          <DialogTitle className="relative w-full h-[76px] bg-gray-80 rounded-t-3xl flex gap-1 justify-start items-center">
            <span className="text-2xl font-semibold text-gray-0">{name}</span>
            <span className="text-2xl font-medium text-gray-50">·</span>
            <span className="text-2xl font-medium text-gray-50">{gender}</span>
            <span className="text-2xl font-medium text-gray-50">·</span>
            <span className="text-2xl font-medium text-gray-50">
              {birth_date}
            </span>
            <DialogActions>
              <Button onClick={handleClose} className="absolute right-8">
                <Image
                  src={tabler_x}
                  alt="close-dialog"
                  width={24}
                  height={24}
                />
              </Button>
            </DialogActions>
          </DialogTitle>

          <DialogContent className="p-0 ">
            <section className="pt-6 pl-12">
              <div className="flex pb-3 justify-between">
                <div className="flex gap-2">
                  <Image
                    src={phone_icon}
                    alt="phone_icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-lg font-medium text-gray-80">
                    {phone_num}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={address_icon}
                    alt="address_icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-lg font-medium text-gray-80">
                    {address}
                  </span>
                </div>
              </div>
              <div className="flex pb-6 justify-between">
                <div className="flex gap-2 pb-3">
                  <Image
                    src={department_icon}
                    alt="department_icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-lg font-medium text-gray-80">
                    {major}
                  </span>
                </div>
                <div className="flex gap-5">
                  <div className="flex gap-2">
                    <span className="text-lg font-medium text-gray-40">
                      1지망
                    </span>
                    <span className="text-lg font-medium text-gray-80">
                      {first_preference}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-lg font-medium text-gray-40">
                      2지망
                    </span>
                    <span className="text-lg font-medium text-gray-80">
                      {second_preference}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className="max-w-[900px] border-solid border-[1px] border-gray-10"></div>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default ApplicantCard;
