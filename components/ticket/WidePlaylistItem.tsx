import Image from 'next/image';
import Link from 'next/link';

interface Performance {
  ticketInfoId: number;
  title: string;
  content: string;
  posterUrl: string;
  status: 'OPEN' | 'CLOSED';
}

const WidePlaylistItem = ({ show }: { show: Performance }) => {
  return (
    <div className="flex overflow-hidden cursor-pointer gap-[14px] w-[344px] h-[184px] rounded-[10px] border border-black">
      {/* 이미지 영역 */}
      <div className="relative w-[128px] h-full overflow-hidden rounded-[10px]">
        {show.status === 'OPEN' && (
          <div className="z-30 flex items-center justify-center absolute top-[5px] left-[5px] w-[42px] h-[23px] bg-primary-40 text-gray-0 text-xs font-medium rounded-[5px]">
            공연중
          </div>
        )}
        <Link href={`/ticket/${show.ticketInfoId}`}>
          <Image
            src={show.posterUrl}
            alt={show.title}
            layout="fill"
            className="object-cover rounded-[10px]"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-center gap-[5px] w-[200px]">
        <p className="text-left font-pretendard text-base font-semibold text-gray-90">
          {show.title}
        </p>
        <p className="text-left text-sm font-pretendard font-normal text-gray-40">
          {show.content}
        </p>
      </div>
    </div>
  );
};

export default WidePlaylistItem;
