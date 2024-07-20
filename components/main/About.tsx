import TopRightRoundBorder from '@/components/ui/RoundBorder';
import Image from 'next/image';

export default function About() {
  return (
    <div className="w-full h-[260px] pad:w-[786px] dt:w-[1200px] pad:h-[744px] bg-gray-90 rounded-[32px] pad:rounded-[48px] border-none relative z-0">
      {/* right top 흰부분 */}
      <TopRightRoundBorder className='absolute right-[184px] -top-[20px] hidden pad:block'/>
      <div className='absolute -right-[20px] -top-[20px] bg-gray-0 rounded-bl-[48px] w-[224px] h-[134px] z-20 hidden pad:block'/>
      <TopRightRoundBorder className='absolute -right-[20px] top-[94px] hidden pad:block'/>

      {/* left bottom 흰부분 */}
      <TopRightRoundBorder className='absolute -left-[16px] bottom-[56px] pad:-left-[20px] pad:bottom-[304px] rotate-180'/>
      <TopRightRoundBorder className='absolute left-[144px] -bottom-[16px] pad:left-[388px] pad:-bottom-[20px] rotate-180'/>
      <div className='absolute -left-[16px] -bottom-[16px] rounded-tr-[32px] w-[176px] h-[88px] pad:-left-[20px] pad:-bottom-[20px] bg-gray-0 pad:rounded-tr-[48px] pad:w-[428px] pad:h-[344px] z-20'/>


    </div>
  )
}
