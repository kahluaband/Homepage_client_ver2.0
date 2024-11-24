import ButtonModal from '@/components/ui/ButtonModal';
import React, { useEffect } from 'react';

interface CancelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CancelPopup: React.FC<CancelPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  // 모달 열릴 때 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = ''; // 모달이 닫힐 때 스크롤 복구
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
      <ButtonModal
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={onConfirm}
        mainContent={
          <>
            <p>게시글 작성을 취소하시겠습니까?</p>
            <p>취소 시 작성하던 게시글은 저장되지 않습니다.</p>
          </>
        }
        buttonContent="취소하기"
      />
    </div>
  );
};

export default CancelPopup;
