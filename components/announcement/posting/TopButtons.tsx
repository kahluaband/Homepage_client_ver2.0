import React from 'react';

interface TopButtonsProps {
  isPostActive: boolean;
}

const TopButtons: React.FC<TopButtonsProps> = ({ isPostActive }) => {
  return (
    <div className="flex justify-end mb-10">
      <div className="w-[51px] h-[46px] flex justify-center items-center rounded-[12px] mr-4 text-gray-40 text-[20px] font-[500] leading-[150%] cursor-pointer">
        취소
      </div>
      <div
        className={`w-[100px] h-[46px] flex justify-center items-center rounded-[12px] ${
          isPostActive
            ? 'bg-primary-50 cursor-pointer'
            : 'bg-gray-10 cursor-not-allowed'
        } text-[20px] font-[500] leading-[150%] text-gray-0`}
      >
        게시하기
      </div>
    </div>
  );
};

export default TopButtons;
