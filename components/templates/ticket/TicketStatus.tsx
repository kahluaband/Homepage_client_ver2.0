
import Image from "next/image";

interface TicketStatusProps {
    reservation_id: string;
}

const TicketStatus: React.FC<TicketStatusProps> = ({ reservation_id }) => {
    return(
        <div className="flex flex-row mx-12 my-10">
            <Image src="/image/ticket/Poster.svg" alt="포스터사진" width={198} height={263} className="flex flex-shrink-0 rounded-xl"/>
            <div className="flex flex-col ml-8 mt-2">
                <p className="h-[36px] text-[24px] font-semibold leading-6 text-gray-90 ">2024년 3월 정기 공연</p>
                <p className="h-[30px] text-[20px] font-medium leading-5 text-gray-40">2024.03.01  SAT  18:00</p>
                <div className="w-[670px] h-[1px] bg-gray-10 flex flex-shrink-0 mt-6"/> 
                <div className="flex flex-row h-[27px] text-[18px] font-medium leading-7 mt-7">
                    <p className="text-gray-40 w-[63px]">예매자</p>
                    <p className="text-gray-80 w-[129px] ml-[39px]">깔루아</p>
                    <p className="text-gray-40 w-[67px] ml-[104px]">예매번호</p>
                    <p className="text-gray-80 w-[135px] ml-[39px]">{reservation_id}</p>
                </div>
                <div className="flex flex-row h-[27px] text-[18px] font-medium leading-7 mt-6">
                    <p className="text-gray-40 w-[63px]">전화번호</p>
                    <p className="text-gray-80 w-[129px] ml-[39px]">010-1234-5678</p>
                    <p className="text-gray-40 w-[67px] ml-[104px]">예매상태</p>
                    <p className="text-gray-80 w-[135px] ml-[39px]">예매 완료</p>
                </div>
                <div className="flex flex-row h-[27px] text-[18px] font-medium leading-7 mt-6">
                    <p className="text-gray-40 w-[63px]">학번</p>
                    <p className="text-gray-80 w-[129px] ml-[39px]">C123456</p>
                </div>
            </div>
        </div>
    )
}

export default TicketStatus;
