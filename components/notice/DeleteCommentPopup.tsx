import React, { useEffect } from 'react';
import Image from 'next/image';

interface DeleteCommentPopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const CancelPopup: React.FC<DeleteCommentPopupProps> = ({
  onClose,
  onConfirm,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // 모달 바깥 클릭 시
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center"
    >
      <div className="fixed bg-[white] overflow-hidden rounded-[24px] pad:w-[600px] ph:w-[328px] pad:h-[300px] ph:h-[200px] flex flex-col items-center text-center">
        <div className="absolute top-6 right-10 cursor-pointer">
          <Image
            src="/image/black_x.svg"
            width={24}
            height={24}
            alt="X"
            onClick={onClose}
          />
        </div>
        <div className="pad:mt-[107px] ph:mt-[52px] pad:text-[22px] ph:text-[16px] font-[500] leading-[150%] text-black">
          <div>
            <p>댓글을 삭제하시겠습니까?</p>
            <p>삭제하면 실행을 취소할 수 없습니다.</p>
          </div>
        </div>
        <div
          onClick={onConfirm}
          className="w-full cursor-pointer flex justify-center items-center pad:h-16 ph:h-[60px] pad:mt-16 ph:mt-[41px] text-center bg-danger-50 text-gray-0 pad:text-[22px] ph:text-[18px] font-[600] leading-[150%]"
        >
          삭제하기
        </div>
      </div>
    </div>
  );
};

export default CancelPopup;
