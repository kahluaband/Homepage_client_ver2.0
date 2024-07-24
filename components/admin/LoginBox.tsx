import Image from 'next/image';
import React, { useState } from 'react';
import bg_logo from '@/public/image/admin/bg_KAHLUA.svg';
import { api } from '@/api';

const LoginBox = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    const id = 'id';
    const password = 'password';
    try {
      const response = await api.post('/auth/sign-in', { id, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center mt-[185px]">
      <div className="w-[792px] h-[484px] rounded-xl">
        <div className="bg-gray-90 h-[160px] relative z-0 rounded-t-xl">
          <Image
            src={bg_logo}
            alt="bg-logo"
            height={136}
            className="opacity-50 fill-gray-0 absolute top-[43px] z-10"
          />
          <p className="font-mustica absolute top-[37px] left-[299px] text-center text-[64px] font-semibold text-gray-0">
            Admin
          </p>
        </div>
        <div className="font-pretendard w-full h-[324px] flex flex-col items-center justify-center border-solid border-[1px] border-gray-15 rounded-b-xl">
          <form>
            <div className="mb-[40px] flex flex-col gap-2">
              <span className="text-xl font-semibold text-gray-90">ID</span>
              <input
                type="text"
                placeholder="ID를 입력해주세요."
                className="w-[588px] h-12 rounded-xl border-solid border-[1px] border-gray-15 pl-4 placeholder:text-base placeholder:text-gray-20 placeholder:font-normal"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-gray-90">
                비밀번호
              </span>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className="w-[588px] h-12 rounded-xl border-solid border-[1px] border-gray-15 pl-4 placeholder:text-base placeholder:text-gray-20 placeholder:font-normal"
              />
            </div>
          </form>
        </div>
      </div>{' '}
      <div className="w-[384px] h-[59px] bg-gray-5 rounded-xl flex justify-center items-center">
        <span className="font-pretendard text-gray-60 text-center text-lg font-medium">
          로그인
        </span>
      </div>
    </div>
  );
};

export default LoginBox;
