'use client'

import Image from "next/image";
import { song } from "../performance/SongList";

interface SongProps {
    songs: song[];
}

const PerformanceCard: React.FC<SongProps> = ({ songs }) => {
    return (
        <div className="w-[328px] min-[834px]:w-[246px] min-[1920px]:w-[282px] flex flex-col items-start gap-[8px]">
            <div
              className="cursor-pointer"
              onClick={() => {
                window.open(songs[0].url);
              }}
            >
              <Image
                src={songs[0].src}
                alt="thumbnail"
                quality={80}
                className="rounded-[12px]"
              />
            </div>
            <p className="text-[20px] font-semibold leading-8">
              {songs[0].name}
            </p>
            <span className="text-[16px] text-gray-40 font-medium leading-6">
              {songs[0].description}
            </span>
          </div>
    );
};    

export default PerformanceCard;