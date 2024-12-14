'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { axiosInstance } from '@/api/auth/axios';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');

    if (code) {
      const handleAuth = async () => {
        try {
          console.log('Code:', code); // 추후 삭제 예정 code

          const response = await axiosInstance.post(
            `/v1/auth/kakao/sign-in?code=${code}`
          );

          console.log('Response:', response); // 추후 삭제 예정 response

          localStorage.setItem('access_token', response.data.accessToken);
          localStorage.setItem('refresh_token', response.data.refreshToken);

          if (response.data.role == 'QUEST') {
            router.push('/login/info'); // 추가 정보 입력 페이지로 이동
          } else if (response.data.role == 'KAHLUA') {
            router.push('/'); // 메인 페이지로 이동
          }
        } catch (error) {
          console.error('Authentication failed:', error);
          alert('로그인 처리 중 오류가 발생했습니다.');
        }
      };

      handleAuth();
    } else {
      console.error('No code found in URL');
    }
  }, [router]);

  return <div>Redirecting...</div>;
};

export default page;
