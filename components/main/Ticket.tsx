import { TicketIntroPad, TicketIntroPhone } from './TicketIntro';

export default function Ticket() {
  return (
    <div className="flex flex-col w-full max-pad:max-w-[500px] pad:w-[786px] dt:w-[1200px] h-auto items-center mt-[96px] pad:mt-[240px]">
      {/* title */}
      <div className="flex justify-start w-full font-mustica text-[24px] pad:text-[48px] font-semibold">
        TICKET
      </div>

      {/* ticket Introduction */}
      <TicketIntroPad className="max-pad:hidden" />
      <TicketIntroPhone className="pad:hidden" />
    </div>
  );
}
