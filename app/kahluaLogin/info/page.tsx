import Image from "next/image"

const page = () => {
    return(
        <div className="font-pretendard w-full h-full flex justify-center items-center mt-16 text-gray-0 text-center max-pad:-mb-40">
            <div className="w-full h-full justify-center items-center pad:w-[786px] dt:w-[876px] pad:h-[536px] flex flex-col pt-[32px] pad:pt-[58px] pb-[78px] px-[16px] pad:px-[64px] dt:px-[118px] gap-[48px] bg-gray-90 pad:rounded-[24px] mt-[16px] pad:mt-[32px]">
                <div className="flex flex-col gap-[16px] w-full justify-center items-center">
                    <div className="font-semibold text-[64px]">JOIN</div>
                    <div className="font-medium text-[16px] pad:text-[20px] text-gray-20">
                        깔루아 회원만 가입 신청 가능합니다.<br/>
                        가입 신청 이후 관리자 인증을 거쳐 KAHLUA 전용 서비스를 이용하실 수 있습니다.
                    </div>
                </div>
                <div className="flex flex-col pad:flex-row gap-[20px] justify-center items-center">
                    <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[42px] rounded-[12px] bg-black">
                        <p>이름</p>

                    </div>
                    <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[42px] rounded-[12px] bg-black">
                        <p>이름</p>
                        
                    </div>
                    <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[42px] rounded-[12px] bg-black">
                        <p>이름</p>
                        
                    </div>
                </div>
                <div className="w-full pad:w-[384px] h-[60px] rounded-[12px] ">
                    KAHLUA 가입 신청하러 가기 
                </div>
            </div>
        </div>
    )
}

export default page;