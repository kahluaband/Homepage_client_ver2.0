import { useState } from 'react';
import Modal from '../ui/Modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CancelModal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const handleModalClose = () => {
    setIsOpen(false);
    window.location.href = `/`;
  };

  return (
    <Modal isOpen={isOpen} onClose={() => handleModalClose()}>
      <p className="font-medium text-[18px] mt-[24px] pad:px-[56px]">
        변경 사항은 저장되지 않습니다.
      </p>
    </Modal>
  );
};

export default CancelModal;
