import { Input } from "@/components/ui/input"

const FreshmanInfo = () => {

    return (
    <div className="flex flex-col mt-10 mb-10 w-full">
        <div className="flex flex-row h-[30px]">
            <div className="font-semibold text-xl leading-[30px] text-gray-90">예매자 정보 입력</div>
            <div className="flex ml-3 font-medium text-[16px] leading-6 text-gray-40 items-center">신입생 확인을 위해 정확한 정보를 입력해주세요.</div>
        </div>
        <div className="flex flex-col">
            <p className="mt-6 text-[16px] font-normal leading-6">이름</p>
            <Input className="mt-2"  type="name" placeholder="예매자 성함"/>
            <p className="mt-6 text-[16px] font-normal leading-6">학과</p>
            <Input className="mt-2"  type="name" placeholder="예매자 학과"/>
            <p className="mt-6 text-[16px] font-normal leading-6">학번</p>
            <Input className="mt-2"  type="name" placeholder="예매자 학번"/>
            <p className="mt-6 text-[16px] font-normal leading-6">연락처</p>
            <Input className="mt-2"  type="name" placeholder="전화번호 -없이 입력"/>
        </div>
    </div>);
};

export default FreshmanInfo;