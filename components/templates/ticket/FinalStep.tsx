import Link from "next/link";

interface Props {
    price: number;
    amount: number;
}

const FinalStep = ({ price, amount}: Props) => {
    const priceValue = price || 0;

    const finalAmount = priceValue * amount;
    return (
        <div className="flex flex-row mt-10 w-full">
            <div className="flex flex-col">
            <div className="text-gray-50 font-normal text-[18px] leading-[27px]">
                    {priceValue === 0 ? `무료 x ${amount}매` : `${priceValue} x ${amount}매`}
                </div>
                <div className="flex flex-row w-[209px] h-[48px] gap-4 items-center">
                    <p className="text-gray-70 font-medium text-[24px] leading-9">최종 결제 금액</p>
                    <div className="text-primary-50 font-semibold text-[32px] leading-[48px]">
                        {finalAmount === 0 ? "무료" : finalAmount}
                    </div>
                </div>
            </div>
            <Link href="complete" className="mr-12 mt-[20px] w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center ml-auto rounded-xl text-[18px] font-medium text-gray-0 bg-primary-50">예매하기</Link>
        </div>
    );
};

export default FinalStep;