import React from 'react';
import Image from 'next/image';
import defaultImg from '@/public/image/notice/defaultProfile.svg';

interface TitleSectionProps {
  title?: string;
  author?: string;
  date?: string;
  onDeleteClick: () => void;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title = 'No Title',
  author = 'Unknown',
  date = 'Unknown',
  onDeleteClick,
}) => {
  return (
    <div className="flex mt-8">
      <Image
        src={defaultImg}
        alt="default-profile"
        width={88}
        height={88}
        className="dt:flex pad:flex ph:hidden"
      />
      <div className="w-full flex flex-col dt:ml-[24px] pad:ml-[24px] ph:ml-0">
        <span className="font-pretendard text-[32px] font-semibold">
          {title}
        </span>
        <span className="w-full flex flex-row mt-[16px] items-center justify-between">
          <div className="flex flex-row gap-2">
            <span className="font-pretendard text-base font-medium flex">
              {author}
            </span>
            <div className="border-l border-black h-[24px]" />
            <span className="font-pretendard text-base font-medium flex">
              {date}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-pretendard text-base font-normal cursor-pointer">
              수정
            </span>
            <span
              className="font-pretendard text-base text-danger-50 font-normal cursor-pointer"
              onClick={onDeleteClick}
            >
              삭제
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default TitleSection;
