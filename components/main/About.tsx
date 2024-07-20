import TopRightRoundBorder from '@/components/ui/RoundBorder';
import Image from 'next/image';

export default function About() {
  return (
    <div className="w-full h-auto pad:w-[786px] dt:w-[1200px] pad:h-[744px] bg-gray-90 rounded-[48px] border-none relative z-0">
      {/* right top 흰부분 */}
      <TopRightRoundBorder className='absolute right-[204px] -top-[20px]'/>
      <div className='absolute -right-[20px] -top-[20px] bg-gray-0 rounded-bl-[48px] w-[244px] h-[158px] z-20'/>
      <TopRightRoundBorder className='absolute -right-[20px] top-[118px]'/>

      {/* left bottom 흰부분 */}
      <TopRightRoundBorder className='absolute -left-[20px] bottom-[328px] rotate-180'/>
      <TopRightRoundBorder className='absolute left-[412px] -bottom-[20px] rotate-180'/>
      <div className='absolute -left-[20px] -bottom-[20px] bg-gray-0 rounded-tr-[48px] w-[452px] h-[368px] z-20'/>


    </div>
  )
}
