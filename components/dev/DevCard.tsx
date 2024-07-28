import Image, { StaticImageData } from 'next/image';
import blurCard from '@/public/image/dev/blurCard.svg';
import blurCard2 from '@/public/image/dev/blurCard2.svg';
import schoolIcon from '@/public/image/dev/school.svg';
import githubIcon from '@/public/image/dev/github.svg';

interface DevCardProps {
  image: StaticImageData;
  name: string;
  role: string;
  school: string;
  githubUrl: string;
  githubName: string;
}

const DevCard: React.FC<DevCardProps> = ({
  image,
  name,
  role,
  school,
  githubUrl,
  githubName
}) => {
  return (
    <div className="relative w-[328px] h-[172px] pad:w-[384px] pad:h-[210px] dt:w-[384px] dt:h-[210px] mx-auto">
      <div className="absolute bg-gray-0 rounded-xl flex justify-center items-center pad:w-[92px] pad:h-[92px] w-[68px] h-[68px] mb-3 pad:mb-3">
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
          src={blurCard}
          alt="blurCard"
          layout="fill"
          objectFit="cover"
          className="pad:block ph:hidden"
        />
        <Image
          src={blurCard2}
          alt="blurCard2"
          layout="fill"
          objectFit="cover"
          className="ph:block pad:hidden"
        />
        <div className="absolute w-full h-full flex">
          <p className="absolute top-[19px] left-[104px] text-xl pad:top-[20px] pad:left-[128px] pad:text-2xl leading-normal text-gray-0 font-semibold">
            {name}
          </p>
          <p className="absolute top-[56px] left-[104px] text-base pad:top-[60px] pad:left-[128px] pad:text-lg leading-normal text-gray-40 font-medium">
            {role}
          </p>
          <div className="absolute top-[96px] left-[20px] pad:top-[126px] pad:left-[24px]">
            <Image src={schoolIcon} alt="school" />
          </div>
          <p className="absolute top-[96px] left-[52px] text-base pad:top-[124px] pad:left-[56px] pad:text-lg leading-normal text-gray-40 font-medium">
            {school}
          </p>
          <div className="absolute top-[132px] left-[20px] pad:top-[165px] pad:left-[24px]">
            <Image src={githubIcon} alt="github" />
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[132px] left-[52px] text-base pad:top-[163px] pad:left-[56px] pad:text-lg leading-normal text-gray-40 font-medium hover:text-gray-20"
          >
            @{githubName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
