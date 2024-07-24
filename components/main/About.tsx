import TopRightRoundBorder from '@/components/ui/RoundBorder';
import Image from 'next/image';
import music from '@/public/image/main/music.svg';

export default function About() {
  return (
      <div className="w-full h-[260px] pad:w-[786px] dt:w-[1200px] pad:h-[744px] bg-mainAbout bg-center bg-contain object-contain rounded-[32px] pad:rounded-[48px] border-none relative z-0">
        <p className='font-mustica text-[24px] pad:text-[40px] dt:text-[64px] font-semibold text-gray-0 m-[24px] pad:m-[56px]'>Hongik University<br/>Computer Engineering<br/>Band Club KAHLUA!</p>
        
        {/* right top 흰상자 */}
        <TopRightRoundBorder className='absolute right-[184px] -top-[20px] hidden pad:block'/>
        <div className='absolute -right-[20px] -top-[20px] bg-gray-0 rounded-bl-[48px] w-[224px] h-[134px] z-20 hidden pad:block'/>
        <TopRightRoundBorder className='absolute -right-[20px] top-[94px] hidden pad:block'/>

        {/* pad: right top 파란상자 ph: bottome left 파란상자 */}
        <div className='w-[144px] h-[56px] pad:w-[180px] pad:h-[90px] absolute bottom-0 max-pad:left-0 pad:top-0 pad:right-0 bg-primary-50 rounded-[48px] z-30'>
            <div className='absolute w-[179px] h-[120px] pad:w-[195px] pad:h-[128px] bottom-0 left-[6px] pad:left-[16px]'>
                <Image src={music} layout='fill' alt='music'/>
            </div>
        </div>

        {/* left bottom 흰상자 */}
        <TopRightRoundBorder className='absolute -left-[16px] bottom-[56px] pad:-left-[20px] pad:bottom-[304px] rotate-180'/>
        <TopRightRoundBorder className='absolute left-[144px] -bottom-[16px] pad:left-[388px] pad:-bottom-[20px] rotate-180'/>
        <div className='absolute -left-[16px] -bottom-[16px] rounded-tr-[32px] w-[176px] h-[88px] pad:-left-[20px] pad:-bottom-[20px] bg-gray-0 pad:rounded-tr-[48px] pad:w-[428px] pad:h-[344px] z-20'/>


    </div>
  )
}
