import poster from '@/public/image/ticket/Poster.svg';
import TicketInfo from './TicketInfo';
import Image from 'next/image';

export default function Ticket () {
    return(
        <div className="flex flex-col w-full max-pad:max-w-[500px] pad:w-[786px] dt:w-[1200px] h-auto items-center mt-[96px] pad:mt-[240px]">
            {/* title */}
            <div className="flex justify-start w-full font-mustica text-[24px] pad:text-[48px] font-semibold">
                TICKET
            </div>

            {/* ticket */}
            <TicketIntro/>
        </div>
    );
}

const TicketIntro = () => {
    return(
        <div className='flex flex-row w-full h-auto mt-[32px] gap-[32px]'>
            <div className='flex shrink-0 relative rounded-[16px] w-[264px] h-[351px] pad:w-[246px] pad:h-[329px] dt:w-[282px] dt:h-[377px]'>
                <Image src={poster} alt='poster' layout='fill'/>
            </div>
            <div className='flex flex-col justify-end w-full h-auto gap-[32px]'>
                <p className='pad:text-[24px] dt:text-[32px] font-semibold'>깔루아 공연!<br/>홈페이지에서 간편하게 예매하세요</p>
                <TicketInfo
                    performanceName='2024년 3월 정기 공연'
                    place='001 클럽'
                    time={['2021', '03', '01', '18']}
                    className=''
                />
            </div>
        </div>
    )
}