import React from 'react';
import Image from 'next/image'; // Next.js를 사용한다면

interface CardProps {
  bgColor: string;
  title1: string;
  title2: string;
  width: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  description7: string;
  imageSrc: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({
  bgColor,
  title1,
  title2,
  width,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  imageSrc,
  altText,
}) => {
  return (
    <div className="w-96 rounded-3xl h-full">
      <div className="flex">
        <h3
          className={`w-[282px] h-[102px] rounded-t-3xl ${bgColor} text-gray-0`}
        >
          <p className="mt-8 ml-8 text-[32px] font-semibold leading-[150%]">
            <span>{title1}</span>
            <br />
            <span>{title2}</span>
          </p>
        </h3>
        <div className={`w-[102px] h-[102px] ${bgColor} relative`}>
          <div className="w-[102px] h-[102px] rounded-bl-3xl absolute bg-gray-0">
            <div className="w-[78px] h-[78px] absolute bg-gray-5 ml-6 mb-6 rounded-3xl flex justify-center items-center">
              <Image src={imageSrc} className="w-12 h-12" alt={altText} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-96 h-[368px] flex flex-col items-center rounded-r-3xl rounded-bl-3xl ${bgColor} text-gray-0`}
      >
        <div className="flex-grow"></div>
        <p
          className={`${width} h-[189px] mb-8 text-lg font-medium leading-[150%]`}
        >
          <span>{description1}</span>
          <br />
          <span>{description2}</span>
          <br />
          <span>{description3}</span>
          <br />
          <span>{description4}</span>
          <br />
          <span>{description5}</span>
          <br />
          <span>{description6}</span>
          <br />
          <span>{description7}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
