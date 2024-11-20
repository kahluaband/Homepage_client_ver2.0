import Image from 'next/image';
import google from '@/public/image/login/google.svg';
import kakao from '@/public/image/login/kakao.svg';

const page = () => {
  return (
    <div className="font-pretendard min-h-[calc(100vh)] w-full h-full flex flex-col items-center mt-16 max-pad:bg-gray-90 text-gray-0 text-center max-pad:-mb-40">
      <div className="justify-center items-center w-full pad:w-[786px] dt:w-[876px] h-full pad:h-[536px] flex flex-col pt-[32px] pad:pt-[58px] pb-[78px] px-[16px] pad:px-[64px] dt:px-[118px] gap-[48px] bg-gray-90 pad:rounded-[24px] mt-[16px] pad:mt-[32px]">
        <div className="flex flex-col gap-[16px] w-full justify-center items-center">
          <div className="font-semibold text-[64px]">LOGIN</div>
          <div className="font-medium text-[16px] pad:text-[20px] text-gray-20">
            깔루아 회원 로그인 페이지입니다.
            <br />
            로그인 이후 KAHLUA 전용 서비스를 이용하실 수 있습니다.
          </div>
        </div>
        <div className="flex flex-col gap-[24px] w-full max-pad:max-w-[500px] pad:w-[400px] justify-center items-center">
          <div className="flex flex-row w-full h-[78px] px-[20px] py-[10px] justify-center items-center gap-[42px] rounded-[20px] bg-black">
            <Image src={kakao} alt="kakao" width={58} height={58} />
            <p className="font-medium text-[20px] w-full text-start">
              카카오로 로그인하기
            </p>
          </div>
          <div className="flex flex-row w-full h-[78px] px-[20px] py-[10px] justify-center items-center gap-[42px] rounded-[20px] bg-black">
            <Image src={google} alt="google" width={58} height={58} />
            <p className="font-medium text-[20px] w-full text-start">
              구글로 로그인하기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
