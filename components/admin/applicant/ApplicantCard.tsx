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
import { authInstance } from '@/api/auth/axios';

// 라이브러리 기본 css 덮어쓰기
const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '24px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingLeft: '32px',
          paddingRight: '32px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0px',
          position: 'absolute',
          right: '0px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '0px',
          padding: '0px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '48px',
        },
      },
    },
  },
});

const ApplicantCard = ({
  id,
  name,
  phone_num,
  birth_date,
  gender,
  address,
  major,
  first_preference,
  second_preference,
}: {
  id: number;
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
  const [
    { motive, experience_and_reason, play_instrument, readiness },
    setDetail,
  ] = useState({
    motive: '',
    experience_and_reason: '',
    play_instrument: '',
    readiness: '',
  });

  const fetchEachApplicant = async () => {
    try {
      const response = await authInstance.get(`/admin/apply/${id}`);
      setDetail({
        motive: response.data.result.motive,
        experience_and_reason: response.data.result.experience_and_reason,
        play_instrument: response.data.result.play_instrument,
        readiness: response.data.result.readiness,
      });
    } catch (error) {}
  };

  const handleClickOpen = (scrollType: DialogProps['scroll']) => async () => {
    await fetchEachApplicant();
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
        <span className="text-xl font-medium text-gray-0">{name}</span>
        <span className="text-lg font-normal text-gray-50">·</span>
        <span className="text-lg font-normal text-gray-50">{gender}</span>
        <span className="text-lg font-normal text-gray-50">·</span>
        <span className="text-lg font-normal text-gray-50">{birth_date}</span>
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
          <span className="text-lg font-normal text-gray-80">{phone_num}</span>
        </div>
        <div className="flex gap-2 pb-3">
          <Image
            src={department_icon}
            alt="department_icon"
            width={20}
            height={20}
          />
          <span className="text-lg font-normal text-gray-80">{major}</span>
        </div>
        <div className="flex gap-2 pb-3">
          <Image src={address_icon} alt="address_icon" width={20} height={20} />
          <span className="text-lg font-normal text-gray-80">{address}</span>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <span className="text-lg font-normal text-gray-40">1지망</span>
            <span className="text-lg font-normal text-gray-80">
              {first_preference}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-lg font-normal text-gray-40">2지망</span>
            <span className="text-lg font-normal text-gray-80">
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
          <DialogTitle className="relative w-full h-[76px] bg-gray-80 rounded-t-3xl flex justify-between items-center">
            <div>
              <span className="text-2xl font-medium text-gray-0">{name}</span>
              <span className="text-2xl font-normal text-gray-50 mx-1">·</span>
              <span className="text-2xl font-normal text-gray-50">
                {gender}
              </span>
              <span className="text-2xl font-normal text-gray-50 mx-1">·</span>
              <span className="text-2xl font-normal text-gray-50">
                {birth_date}
              </span>
            </div>
            <DialogActions className="relative">
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

          <DialogContent className="p-0 max-h-[760px] overflow-y-scroll">
            <section className="flex py-6 gap-[100px]">
              <div className="flex-col">
                <div className="flex gap-2 pb-3">
                  <Image
                    src={phone_icon}
                    alt="phone_icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-lg font-normal text-gray-80">
                    {phone_num}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={department_icon}
                    alt="department_icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-lg font-normal text-gray-80">
                    {major}
                  </span>
                </div>
              </div>
              <div className="flex-col">
                <div className="flex gap-2 pb-3">
                  <Image
                    src={address_icon}
                    alt="address_icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-lg font-normal text-gray-80">
                    {address}
                  </span>
                </div>
                <div className="flex gap-5">
                  <div className="flex gap-2">
                    <span className="text-lg font-normal text-gray-40">
                      1지망
                    </span>
                    <span className="text-lg font-normal text-gray-80">
                      {first_preference}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-lg font-normal text-gray-40">
                      2지망
                    </span>
                    <span className="text-lg font-normal text-gray-80">
                      {second_preference}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* 구분선 */}
            <div className="max-w-[900px] border-solid border-[1px] border-gray-10"></div>
            {/* 지원 동기 및 세부 내용 */}
            <section className="mt-6 font-pretendard flex-col w-full">
              <div className="flex-col justify-start">
                <div className="text-lg text-gray-80 font-medium pb-2">
                  깔루아 지원 동기
                </div>
                <div className="inline-flex flex-wrap w-full p-6 justify-center align-center bg-gray-5 rounded-xl gap-[10px] mb-12">
                  {motive}
                </div>
              </div>
              <div className="flex-col justify-start">
                <div className="text-lg text-gray-80 font-medium pb-2">
                  지원 세션에 대한 경력 및 지원 이유
                </div>
                <div className="inline-flex flex-wrap w-full p-6 justify-center align-center bg-gray-5 rounded-xl gap-[10px] mb-12">
                  {experience_and_reason}
                </div>
              </div>
              <div className="flex-col justify-start">
                <div className="text-lg text-gray-80 font-medium pb-2">
                  이외에 다룰 줄 아는 악기
                </div>
                <div className="inline-flex flex-wrap w-full p-6 justify-center align-center bg-gray-5 rounded-xl gap-[10px] mb-12">
                  {play_instrument}
                </div>
              </div>
              <div className="flex-col justify-start">
                <div className="text-lg text-gray-80 font-medium pb-2">
                  포부 및 각오
                </div>
                <div className="inline-flex flex-wrap w-full p-6 justify-center align-center bg-gray-5 rounded-xl gap-[10px]">
                  {readiness}
                </div>
              </div>
            </section>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default ApplicantCard;
