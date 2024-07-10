"use client"
import Image from "next/image";
import Link from "next/link";


const Freshman_tickets: React.FC = () => {

    return (
    <div className="h-screen w-[996px] flex flex-col relative mx-auto top-20 mt-4 ">
        <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex mx-auto items-center justify-center">
            <p className="h-12 text-gray-0 text-center text-2xl font-semibold leading-[48px]">예매가 완료되었습니다.</p>
        </div>
        <div className="h-[517px] w-full rounded-b-xl border border-gray-15 flex flex-col mx-auto">
            <div className="flex flex-row mx-12 my-10">
                <Image src="../image/ticket/Poster.svg" alt="포스터사진" width={198} height={263} className="flex flex-shrink-0 rounded-xl"/>
                <div className="flex flex-col ml-8">
                    <p className="h-[36px] text-[24px] font-semibold leading-6 text-gray-90">2024년 3월 정기 공연</p>
                    <p className="h-[30px] text-[20px] font-medium leading-5 text-gray-40">2024.03.01  SAT  18:00</p>
                    <div className="w-[670px] h-[1px] bg-gray-10 flex flex-shrink-0 mt-6"/> 
                    <div className="flex flex-row h-[27px] text-[18px] font-medium leading-7 mt-7">
                        <p className="text-gray-40 w-[63px]">예매자</p>
                        <p className="text-gray-80 w-[129px] ml-[39px]">깔루아</p>
                        <p className="text-gray-40 w-[67px] ml-[104px]">예매번호</p>
                        <p className="text-gray-80 w-[135px] ml-[39px]">1234567890123</p>
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
            <div className="mx-12 font-semibold text-xl leading-[30px] text-gray-90">필독사항</div>
            <ol className="mx-12 list-disc list-inside font-normal leading-6 text-gray-40 text-[16px] mt-2">
                <li>계좌이체 결제를 선택하신 분들은 [예매현황-입금계좌]에 24시간 이내로 입금해주시면 자동으로 결제 완료 처리됩니다.</li>
                <li>결제 취소를 원하시면 [예매하기 - 결제 내역확인하기 - 예매번호 조회]를 통해 취소하실 수 있습니다. </li>
                <li>여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우 모든 티켓이 일괄처리됩니다. </li>
                <li>이외에 모든 문의 사항은 [깔루아 카카오톡]을 이용해주시기 바랍니다. </li>
            </ol>
        </div>
        <Link href="/ticket/" className="mt-10 w-[384px] h-[59px] flex flex-shrink-0 text-center justify-center items-center mx-auto rounded-xl text-[18px] font-medium text-gray-60 bg-gray-5">예매 페이지로 돌아가기</Link>
    </div>
    );
};

export default Freshman_tickets;