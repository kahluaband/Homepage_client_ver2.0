import {SelectBox} from "@/components/ui/selectBox";

const TicketSelection = () => {
    return (
    <div className="flex flex-col mt-10 mb-10 w-full">
        <div className="flex h-[30px]">
            <div className="font-semibold text-xl leading-[30px] text-gray-90">티켓 수령 방법 선택</div>
        </div>
        <div className="flex flex-col mt-6">
            <SelectBox name="현장 수령" state={true} alt="ticketSelection" disabled/>
        </div>
    </div>);
};

export default TicketSelection;