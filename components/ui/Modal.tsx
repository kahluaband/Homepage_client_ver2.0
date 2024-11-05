import React from 'react';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
        onClose();
        }
    };

    return (
        <div
        onClick={handleOverlayClick}
        className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center text-black"
        >
        <div className="fixed flex flex-col rounded-3xl w-[328px] h-[166px] pad:w-[560px] pad:h-[210px] z-50 bg-gray-0 px-6 pad:px-8">
            <Image
            src="/image/black_x.svg"
            width={24}
            height={24}
            alt="Close"
            onClick={onClose}
            className="ml-auto mt-6 cursor-pointer"
            />
            {children}
        </div>
        </div>
    );
};

export default Modal;