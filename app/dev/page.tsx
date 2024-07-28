import Image from 'next/image';
import logo_white from '@/public/image/KAHLUA.svg';

const page = () => {
  return (
    <div>
      <div className="flex top-0 justify-center h-auto h-screen w-full dt:h-[480px] pad:h-[753px] h-[322px] bg-performance bg-center text-gray-0 mb-[-160px]">
        <div className="flex flex-col dt:mt-[184px] pad:mt-[152px] mt-[120px] items-center text-center w-full pad:w-[786px] dt:w-[1200px]">
          <div className="flex relative pad:w-[376px] pad:h-[64px] w-[235px] h-[40px]">
            <Image src={logo_white} layout="fill" alt="logo" />
          </div>
          <p className="dt:text-[32px] font-semibold text-gray-10 pad:text-[24px] text-[20px] leading-normal dt:mt-6 mt-8">
            DEVELOPERS
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-90 bg-notice h-auto">
        <div className="flex flex-col max-pad:px-[16px] w-full pad:w-[786px] dt:w-[1200px]"></div>
      </div>
    </div>
  );
};

export default page;
