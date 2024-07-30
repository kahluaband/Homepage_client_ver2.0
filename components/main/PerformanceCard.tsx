import Image from 'next/image';
import { song } from '../performance/SongList';

interface SongProps {
  song: song;
}

const PerformanceCard: React.FC<SongProps> = ({ song }) => {
  return (
    <div className="w-[282px] pad:w-[384px] h-auto flex flex-col items-start">
      <Image
        src={song.src}
        alt="thumbnail"
        quality={80}
        className="rounded-[12px]"
      />
      <p className="text-[20px] pad:text-[22px] font-semibold mt-[8px] pad:mt-[12px]">
        {song.name}
      </p>
      <span className="text-[16px] pad:text-[18px] text-gray-40 font-medium mt-[4px]">
        {song.description}
      </span>
    </div>
  );
};

export default PerformanceCard;
