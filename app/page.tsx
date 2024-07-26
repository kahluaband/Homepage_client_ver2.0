import About from '@/components/main/About';
import Performance from '@/components/main/Performance';
import Ticket from '@/components/main/Ticket';
import TopRightRoundBorder from '@/components/ui/RoundBorder';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-pretendard flex flex-col relative top-16 w-full h-[5000px] max-pad:px-[16px] justify-start items-center pad:mt-[32px]">
      <About />
      <Performance />
      <Ticket />
    </div>
  );
}
