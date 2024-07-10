
import React from 'react';
import Image from 'next/image';
import { ModalInput } from '../ui/ModalInput';
import { CancelButton } from '../ui/CancelButton';

interface CancelModalProps {
    isOpen: boolean;
    text: string;
    onClose: () => void;
    onConfirm: () => void;
}

const CancelModal: React.FC<CancelModalProps> = ({ text, isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick} className= "fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center">
            <div className="fixed flex flex-col rounded-3xl w-[652px] h-[341px] z-50 bg-[white]">
                <div className="bg-gray-80 h-[76px] px-8 rounded-t-3xl w-full flex flex-row justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-0">예매를 취소하시겠습니까?</h2>
                    <Image src="/image/tabler_x.svg" width={24} height={24} alt="X" onClick={onClose} />
                </div>
                <div className='h-[265px] px-8 w-full pt-10 pb-8'>
                    <p className='font-medium leading-[30px] text-[20px] text-gray-90'>취소하시려면 {text} 입력해주세요.</p>
                    <ModalInput placeholder="-없이 입력" className='mt-4'/>
                    <CancelButton onClick={onConfirm} className='mt-10 ml-auto'>예매 취소</CancelButton>
                    </div>
            </div>
        </div>
    );
};

export default CancelModal;
