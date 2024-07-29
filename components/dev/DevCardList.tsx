'use client';
import React, { useEffect, useRef } from 'react';
import DevCard from './DevCard';
import JY from '@/public/image/dev/JY.avif';
import GR from '@/public/image/dev/GR.avif';
import SW from '@/public/image/dev/SW.avif';
import GY from '@/public/image/dev/GY.avif';
import SY from '@/public/image/dev/SY.avif';
import JE from '@/public/image/dev/JE.avif';
import GH from '@/public/image/dev/GH.avif';

const devs = [
  {
    image: JY,
    name: '강지윤',
    role: '백엔드',
    year: '20',
    school: '홍익대학교 컴퓨터공학과 20학번',
    githubUrl: 'https://github.com/kjiyun',
    githubName: 'kjiyun',
  },
  {
    image: GR,
    name: '구름',
    role: '디자인',
    school: '서울여자대학교 디지털미디어학과 21학번',
    githubUrl: '',
    githubName: 'goorm',
  },
  {
    image: SW,
    name: '박상욱',
    role: '백엔드',
    year: '18',
    school: '홍익대학교 컴퓨터공학과 19학번',
    githubUrl: 'https://github.com/woogieon8on',
    githubName: 'woogieon8on',
  },
  {
    image: GY,
    name: '서가영',
    role: '프론트엔드',
    year: '20',
    school: '홍익대학교 컴퓨터공학과 21학번',
    githubUrl: 'https://github.com/caminobelllo',
    githubName: 'caminobelllo',
  },
  {
    image: SY,
    name: '심수연',
    role: '프론트엔드 · 백엔드',
    year: '19',
    school: '홍익대학교 컴퓨터공학과 20학번',
    githubUrl: 'https://github.com/letthem',
    githubName: 'letthem',
  },
  {
    image: JE,
    name: '염지은',
    role: '프론트엔드 · 백엔드',
    year: '20',
    school: '홍익대학교 컴퓨터공학과 21학번',
    githubUrl: 'https://github.com/yumzen',
    githubName: 'yumzen',
  },
  {
    image: GH,
    name: '임가현',
    role: '프론트엔드',
    year: '20',
    school: '홍익대학교 컴퓨터공학과 21학번',
    githubUrl: 'https://github.com/limgahyun',
    githubName: 'limgahyun',
  },
];

const DevCardList = () => {
  const bgGray90Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const adjustHeight = () => {
      if (bgGray90Ref.current) {
        const innerDiv = bgGray90Ref.current.querySelector('.inner-div');
        if (innerDiv) {
          const innerDivHeight = (
            innerDiv as HTMLElement
          ).getBoundingClientRect().height;
          if (window.innerWidth >= 1500) {
            bgGray90Ref.current.style.height = `${innerDivHeight - 80}px`;
          } else if (window.innerWidth >= 834) {
            bgGray90Ref.current.style.height = `${innerDivHeight - 325}px`;
          } else {
            bgGray90Ref.current.style.height = 'auto';
          }
        }
      }
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <div ref={bgGray90Ref} className="relative w-full bg-gray-90 ">
      <div className="inner-div flex justify-center relative top-0 pad:top-[-325px] dt:top-[-80px] w-full ph:pb-20 ph:mb-[-20] pad:pb-[160px] dt:pb-[240px]">
        <div className="grid grid-cols-1 pad:grid-cols-2 dt:grid-cols-3 gap-x-[18px] gap-y-[40px] pad:gap-y-[32px] dt:gap-y-[48px] max-pad:px-[16px] w-full pad:w-[786px] dt:w-[1200px] ">
          {devs.map((dev, index) => (
            <DevCard
              key={index}
              image={dev.image}
              name={dev.name}
              role={dev.role}
              year={dev.year}
              school={dev.school}
              githubUrl={dev.githubUrl}
              githubName={dev.githubName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevCardList;
