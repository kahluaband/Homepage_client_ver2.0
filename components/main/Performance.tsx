import Image from 'next/image';
import arrow from '@/public/image/arrow_right.svg';
import PerformanceList from './PerformanceList';


export default function Performance () {
    return(
        <div className="flex flex-col w-full max-pad:max-w-[500px] items-center mt-[96px] pad:mt-[240px]">
            {/* title */}
            <div className="flex flex-row justify-between items-center w-full h-auto pad:w-[786px] dt:w-[1200px]">
                <p className="font-mustica text-[24px] pad:text-[48px] font-semibold">PERFORMANCE</p>
                <button className='flex flex-row items-center w-auto h-auto px-6 py-2 gap-[10px] bg-gray-90 text-gray-0 text-[16px] pad:text-[20px] font-medium rounded-[48px]'>
                    공연 영상 보러가기
                    <p className='relative w-[16px] h-[16px] pad:w-[24px] pad:h-[24px]'>
                        <Image src={arrow} alt='>' layout='fill'/>
                    </p>
                </button>
            </div>

            {/* performanceList */}
            <PerformanceList/>
        </div>
    );
}