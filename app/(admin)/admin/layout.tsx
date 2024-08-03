'use client';
import { ReactNode, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/navigation';

const layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (
      !localStorage.getItem('access_token') &&
      !localStorage.getItem('refresh_token')
    ) {
      alert('로그인이 필요합니다.');
      router.push('/login');
    }
  }, []);

  return <RecoilRoot>{children}</RecoilRoot>;
};

export default layout;
