import React from 'react';
import Image from 'next/image';

interface LastCheckProps {
    isOpen: boolean;
    onClose: () => void;
    onReservationComplete: () => void;
}

const LastCheck: React.FC<LastCheckProps> = ({ isOpen, onClose, onReservationComplete }) => {
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
            <div className="fixed flex flex-col rounded-3xl w-[560px] h-[264px] z-50 bg-gray-0">
                <div className='flex flex-col rounded-t-3xl w-full h-[194px] px-8'>
                    <Image src="/image/black_x.svg" width={24} height={24} alt="X" onClick={onClose} className='ml-auto mt-6 cursor-pointer' />
                    <p className='h-[66px] text-[22px] font-medium leading-[33px] text-gray-90 text-center mt-6'>
                        제출한 이후에는 수정할 수 없습니다.<br />
                        제출하시겠습니까?
                    </p>
                </div>
                <div className='mt-14 flex flex-row w-full h-[70px]'>
                    <button className='w-[280px] h-full rounded-bl-3xl border-t-gray-15 text-center font-[20px] font-[medium] text-gray-40' onClick={onClose}>돌아가기</button>
                    <button className='w-[280px] h-hull rounded-br-3xl bg-primary-50 text-center font-[20px] font-[medium] text-gray-0' onClick={onReservationComplete}>제출</button>
                </div>
            </div>
        </div>
    );
};

export default LastCheck;
