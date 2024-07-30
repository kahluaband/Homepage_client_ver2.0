'use client';

import Image from 'next/image';
import { song } from '../performance/SongList';

interface SongProps {
  songs: song[];
}

const PerformanceCard: React.FC<SongProps> = ({ songs }) => {
  return (
    <div className="overflow-hidden w-screen flex flex-col">
      <div className="animate-slide-right-ph1 pad:animate-slide-right-dt1 hover:animation-pause mt-[24px] pad:mt-[32px]">
        <div className="flex flex-nowrap gap-[16px] pad:gap-[24px]">
          <Playlist1 songs={songs} />
          <Playlist1 songs={songs} />
        </div>
      </div>
      <div className="animate-slide-left-ph2 pad:animate-slide-left-dt2 hover:animation-pause mt-[32px] pad:mt-[72px]">
        <div className="flex flex-nowrap gap-[16px] pad:gap-[24px]">
          <Playlist2 songs={songs} />
          <Playlist2 songs={songs} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;

const Playlist1: React.FC<SongProps> = ({ songs }) => {
  return (
    <div className="flex flex-nowrap w-auto h-auto gap-[16px] pad:gap-[24px]">
      {songs.map(
        (song, index: number) =>
          index < 7 && (
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
          )
      )}
    </div>
  );
};

const Playlist2: React.FC<SongProps> = ({ songs }) => {
  return (
    <div className="flex flex-nowrap w-auto h-auto gap-[16px] pad:gap-[24px]">
      {songs.map(
        (song, index: number) =>
          index > 7 && (
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
          )
      )}
    </div>
  );
};
