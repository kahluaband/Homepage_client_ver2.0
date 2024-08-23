import Image from 'next/image';
import { song } from '../data/SongList';

interface SongProps {
  song: song;
}

const PerformanceCard: React.FC<SongProps> = ({ song }) => {
  return (
    // hover시 카드 크기 키우려면 hover:pad:w-[440px]
    <div className="w-[282px] pad:w-[384px] ease-in-out h-auto flex flex-col items-start">
      <Image
        src={song.src}
        alt="thumbnail"
        quality={50}
        className="rounded-[12px]"
        sizes="100vw"
      />
      <p className="text-[20px] pad:text-[22px] font-medium mt-[8px] pad:mt-[12px]">
        {song.name}
      </p>
      <span className="text-[16px] pad:text-[18px] text-gray-40 font-normal mt-[4px]">
        {song.description}
      </span>
    </div>
  );
};

export default PerformanceCard;
