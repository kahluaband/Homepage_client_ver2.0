import React from 'react';
import Image from 'next/image';
import grayRight from '@/public/image/announcement/grayRight.svg';
import blackRight from '@/public/image/announcement/blackRight.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageGroup: number;
  pagesPerGroup: number;
  onPageChange: (page: number) => void;
  onPrevGroup: () => void;
  onNextGroup: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageGroup,
  pagesPerGroup,
  onPageChange,
  onPrevGroup,
  onNextGroup,
}) => {
  const startPage = pageGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  return (
    <div className="flex justify-center gap-3 mt-10 items-center">
      {/* 이전 그룹 버튼 */}
      <button
        onClick={onPrevGroup}
        className="flex items-center"
        disabled={pageGroup === 0}
      >
        <Image
          src={pageGroup > 0 ? blackRight : grayRight}
          className="rotate-180"
          alt="previous"
          width={30}
          height={30}
        />
      </button>

      {/* 페이지 번호 */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <div
          key={startPage + index}
          onClick={() => onPageChange(startPage + index)}
          className={`w-[30px] h-[30px] cursor-pointer rounded-full flex justify-center items-center ${
            currentPage === startPage + index
              ? 'border-[1px] border-black'
              : 'border-none'
          } `}
        >
          <span
            className={`font-[500] text-[20px] ${
              currentPage === startPage + index ? 'text-black' : 'text-gray-40'
            }`}
          >
            {startPage + index}
          </span>
        </div>
      ))}

      {/* 다음 그룹 버튼 */}
      <button
        onClick={onNextGroup}
        className="flex items-center"
        disabled={(pageGroup + 1) * pagesPerGroup >= totalPages}
      >
        <Image
          src={
            (pageGroup + 1) * pagesPerGroup < totalPages
              ? blackRight
              : grayRight
          }
          alt="next"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default Pagination;
