import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ButtonModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center text-black"
    >
      <div className="fixed flex flex-col w-[328px] pad:w-[560px] h-auto">
        <div className="flex flex-col rounded-t-3xl w-full h-[152px] pad:h-[236px] bg-gray-0 px-[40px] justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute right-[40px] top-[24px]"
            onClick={onClose}
          >
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="#31333F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="w-full font-medium text-[16px] pad:text-[22px]">
            {children}
          </div>
        </div>
        <div className="flex flex-col rounded-b-3xl w-full h-[48px] pad:h-[64px] px-[40px] bg-danger-50 justify-center text-center font-semibold text-[18px] pad:text-[22px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ButtonModal;
