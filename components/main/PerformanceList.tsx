import { SongList } from '../performance/SongList';
import { song } from '../performance/SongList';
import PerformanceCard from './PerformanceCard';

interface SonglistProps {
  songs: song[];
}

const PerformanceList = () => {
  return (
    <div className="overflow-hidden w-screen flex flex-col">
      <div className="animate-slide-right-ph1 pad:animate-slide-right-dt1 hover:animation-pause mt-[24px] pad:mt-[32px]">
        <div className="flex flex-nowrap gap-[16px] pad:gap-[24px]">
          <Playlist1 songs={SongList} />
          <Playlist1 songs={SongList} />
        </div>
      </div>
      <div className="animate-slide-left-ph2 pad:animate-slide-left-dt2 hover:animation-pause mt-[32px] pad:mt-[72px]">
        <div className="flex flex-nowrap gap-[16px] pad:gap-[24px]">
          <Playlist2 songs={SongList} />
          <Playlist2 songs={SongList} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceList;

const Playlist1: React.FC<SonglistProps> = ({ songs }) => {
  return (
    <div className="flex flex-nowrap w-auto h-auto gap-[16px] pad:gap-[24px]">
      {songs.map(
        (song, index: number) => index < 7 && <PerformanceCard song={song} />
      )}
    </div>
  );
};

const Playlist2: React.FC<SonglistProps> = ({ songs }) => {
  return (
    <div className="flex flex-nowrap w-auto h-auto gap-[16px] pad:gap-[24px]">
      {songs.map(
        (song, index: number) => index > 7 && <PerformanceCard song={song} />
      )}
    </div>
  );
};
