import {SelectBox} from "@/components/ui/SelectBox";

const PaymentSelection = () => {
    return (
    <div className="flex flex-col mt-10 mb-10 w-full">
        <div className="flex h-[30px]">
            <div className="font-semibold text-xl leading-[30px] text-gray-90">결제 방법 선택</div>
        </div>
        <div className="flex flex-col mt-6">
            <SelectBox name="계좌이체" state={true} alt="PaymentSelection" disabled/>
        </div>
    </div>);
};

export default PaymentSelection;