import Image from 'next/image';
import Link from 'next/link';
import { RecommendData } from '../data/RecommendData';
import WidePlaylistItem from '../ticket/WidePlaylistItem';

const TicektList = () => {
  return (
    <>
      <div className="pad:w-[786px] dt:w-[1200px] h-full grid grid-cols-1 pad:grid-cols-4 pad:gap-x-4 dt:gap-x-9 gap-y-12">
        {/* 태블릿, 데스크탑 */}
        {RecommendData.map((show, index) => (
          <div
            key={index}
            className="max-[833px]:hidden relative block w-[184px] dt:w-[273px]"
          >
            {show.isLive && (
              <div className="flex items-center justify-center rounded-[20px] z-30 text-center absolute top-[15px] left-[13px] w-[42px] h-[23px] bg-primary-40 text-gray-0 text-xs font-medium rounded-5">
                공연중
              </div>
            )}
            <Link href={show.link} className="block">
              <div className="relative w-full h-[257px] dt:h-[380px] rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={show.image}
                  alt={show.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
            <p className="mt-3 text-left font-pretendard text-base font-semibold text-gray-90">
              {show.title}
            </p>
            <p className="text-left text-sm font-pretendard font-normal text-gray-40">
              {show.description}
            </p>
          </div>
        ))}

        {/* 모바일 */}
        {RecommendData.map((show, index) => (
          <WidePlaylistItem key={index} show={show} />
        ))}
      </div>
    </>
  );
};

export default TicektList;
