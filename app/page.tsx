import About from '@/components/main/About';
import TopRightRoundBorder from '@/components/ui/RoundBorder';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-pretendard flex flex-col relative top-16 w-full max-pad:px-[16px] justify-center items-center mt-[32px]">
      <About/>
    </div>
  )
}
