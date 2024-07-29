import Image, { StaticImageData } from 'next/image';
import blurCard from '@/public/image/dev/blurCard.svg';
import blurCard2 from '@/public/image/dev/blurCard2.svg';
import blurCard3 from '@/public/image/dev/blurCard3.svg';
import schoolIcon from '@/public/image/dev/school.svg';
import githubIcon from '@/public/image/dev/github.svg';

interface DevCardProps {
  image: StaticImageData;
  name: string;
  role: string;
  year?: string;
  school: string;
  githubUrl: string;
  githubName: string;
  index: number;
}

const PadDtCard: React.FC<DevCardProps> = ({
  image,
  name,
  role,
  year,
  school,
  githubUrl,
  githubName,
}) => {
  return (
    <div className="relative ph:hidden pad:block w-[384px] h-[210px] mx-auto">
      <div className="relative w-full h-full">
        <div className="absolute rounded-xl flex justify-center items-center w-[92px] h-[92px] mb-3">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <Image src={blurCard} alt="blurCard" layout="fill" objectFit="cover" />
        <div className="absolute w-full h-full flex">
          <p className="absolute top-[20px] left-[128px] text-2xl leading-normal text-gray-0 font-semibold">
            {name}
          </p>
          {year && (
            <div className="absolute top-[22px] left-[203px] w-[55px] h-[32px] rounded-[32px] bg-primary-50 text-gray-0 text-medium text-base text-center py-[4px]">
              {year}기
            </div>
          )}
          <p className="absolute top-[60px] left-[128px] text-lg leading-normal text-gray-40 font-medium">
            {role}
          </p>
          <div className="absolute top-[126px] left-[24px]">
            <Image src={schoolIcon} alt="school" />
          </div>
          <p className="absolute top-[124px] left-[56px] text-lg leading-normal text-gray-40 font-medium">
            {school}
          </p>
          <div className="absolute top-[165px] left-[24px]">
            <Image src={githubIcon} alt="github" />
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[163px] left-[56px] text-lg leading-normal text-gray-40 font-medium hover:text-gray-20"
          >
            @{githubName}
          </a>
        </div>
      </div>
    </div>
  );
};

const PhCard: React.FC<DevCardProps> = ({
  image,
  name,
  role,
  year,
  school,
  githubUrl,
  githubName,
  index,
}) => {
  const isEven = index % 2 === 1;
  return (
    <div className="relative pad:hidden ph:block w-[328px] h-[172px] mx-auto">
      <div
        className={`absolute bg-gray-0 rounded-xl flex justify-center items-center w-[68px] h-[68px] ${isEven ? 'left-[260px]' : 'left-0'}`}
      >
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={isEven ? blurCard3 : blurCard2}
          alt={isEven ? 'blurCard' : 'blurCard'}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute w-full h-full flex">
          <p
            className={`absolute top-[19px] ${isEven ? 'left-[20px]' : 'left-[104px]'} text-xl leading-normal text-gray-0 font-semibold`}
          >
            {name}
          </p>
          {year && (
            <div
              className={`absolute top-[18px] ${isEven ? 'left-[84px]' : 'left-[168px]'} w-[55px] h-[32px] rounded-[32px] bg-primary-50 text-gray-0 text-medium text-base text-center py-[4px]`}
            >
              {year}기
            </div>
          )}
          <p
            className={`absolute top-[56px] ${isEven ? 'left-[20px]' : 'left-[104px]'} text-base leading-normal text-gray-40 font-medium`}
          >
            {role}
          </p>
          <div className="absolute top-[96px] left-[20px]">
            <Image src={schoolIcon} alt="school" />
          </div>
          <p className="absolute top-[96px] left-[52px] text-base leading-normal text-gray-40 font-medium">
            {school}
          </p>
          <div className="absolute top-[132px] left-[20px]">
            <Image src={githubIcon} alt="github" />
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[132px] left-[52px] text-base leading-normal text-gray-40 font-medium hover:text-gray-20"
          >
            @{githubName}
          </a>
        </div>
      </div>
    </div>
  );
};

const DevCard: React.FC<DevCardProps> = (props) => {
  return (
    <>
      <PadDtCard {...props} />
      <PhCard {...props} />
    </>
  );
};

export default DevCard;
