'use client';
import React, { useState } from 'react';
import DetailsErrorModal from '@/components/popups/ticket/DetailsErrorModal';
import LastCheckModal from '@/components/popups/ticket/LastCheckModal';

interface Props {
    price: number;
    amount: number;
    onReservationComplete: () => void;
    isFormComplete: boolean;
}

const FinalStep: React.FC<Props> = ({ price, amount, onReservationComplete, isFormComplete }) => {
    const [showDetailsErrorModal, setShowDetailsErrorModal] = useState(false);
    const [showLastCheckModal, setShowLastCheckModal] = useState(false);
    const priceValue = price || 0;
    const finalAmount = priceValue * amount;

    const handleClickReservation = () => {
        if (isFormComplete) {
            setShowLastCheckModal(true);
        } else {
            setShowDetailsErrorModal(true);
        }
    };

    return (
        <div className="flex flex-row mt-10 w-full">
            <div className="flex flex-col ml-12">
                <div className="text-gray-50 font-normal text-[18px] leading-[27px]">
                    {priceValue === 0 ? `무료 x ${amount}매` : `5,000원 x ${amount}매`}
                </div>
                <div className="flex flex-row w-[289px] h-[48px] gap-4 items-center">
                    <p className="w-[137px] text-gray-70 font-medium text-[24px] leading-9">최종 결제 금액</p>
                    <div className="text-primary-50 font-semibold text-[32px] leading-[48px] whitespace-nowrap">
                        {finalAmount === 0 ? "무료" : `${finalAmount.toLocaleString()}원`}
                    </div>
                </div>
            </div>
            <button onClick={handleClickReservation} className="mr-12 mt-[20px] w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center ml-auto rounded-xl text-[18px] font-medium text-gray-0 bg-primary-50">예매하기</button>
            <DetailsErrorModal isOpen={showDetailsErrorModal} onClose={() => setShowDetailsErrorModal(false)} />
            <LastCheckModal isOpen={showLastCheckModal} onClose={()=> setShowLastCheckModal(false)} onReservationComplete={onReservationComplete} />
        </div>
    );
};

export default FinalStep;
