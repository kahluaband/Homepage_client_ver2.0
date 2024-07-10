import React from 'react';
import Image from 'next/image';

interface LastCheckProps {
    isOpen: boolean;
    onClose: () => void;
}

const LastCheck: React.FC<LastCheckProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick} className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center">
            <div className="fixed flex flex-col rounded-3xl w-[560px] h-[210px] z-50 bg-gray-0">
                <div className='flex flex-col rounded-t-3xl w-full h-[194px] px-8'>
                    <Image src="/image/black_x.svg" width={24} height={24} alt="X" onClick={onClose} className='ml-auto mt-6 cursor-pointer' />
                    <p className='text-[22px] font-medium leading-[33px] text-gray-90 text-center mt-6'>
                        제출한 이후에는 수정할 수 없습니다.<br />
                        제출하시겠습니까?
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default LastCheck;
