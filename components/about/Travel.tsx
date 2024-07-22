import beer from '@/public/image/about/beer.svg';
import travel1 from '@/public/image/about/travel1.avif';
import travel2 from '@/public/image/about/travel2.avif';
import travel3 from '@/public/image/about/travel3.avif';
import Card from './Card';
import ImageBox from './ImageBox';

const Travel = () => {
  return (
    <section className="pad:mt-[200px] ph:mt-[104px] flex pad:mb-0 ph:mb-[-80px]">
      {/* pad */}
      <div className="mr-[21px] dt:hidden pad:grid ph:hidden gap-y-[28px]">
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[223px] pad:h-[223px]"
          imageSrc={travel1}
          altText="travel1"
        />
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[470px] pad:h-[466px]"
          imageSrc={travel3}
          altText="travel3"
        />
      </div>
      <div className="pad:flex-col pad:grid gap-y-6 ph:hidden">
        <Card
          bgColor="bg-primary-50"
          title1="MT · 번개 · 여행"
          title2=""
          width="pad:w-80 ph:w-64"
          height="pad:h-[162px] ph:h-36"
          descriptions={{
            default: [
              'MT, 바다 여행, 놀이공원 등의',
              '친목을 다질 수 있는 활동과',
              '산책, 보드게임 카페, 술자리, 맛집 탐방 등',
              '일상을 함께하는 다양한 모임들이 있습니다.',
              '이렇게 많은 시간을 함께 보내는 만큼 깔루아',
              '는 가족보다 더 가족같은 사이랍니다.',
            ],
            phone: [
              'MT, 바다 여행, 놀이공원 등의 친목을',
              '다질 수 있는 활동과 산책, 보드게임 카페,',
              '술자리, 맛집 탐방 등 일상을 함께하는',
              '다양한 모임들이 있습니다. 이렇게 많은',
              '시간을 함께 보내는 만큼 깔루아는',
              '가족보다 더 가족같은 사이랍니다.',
            ],
          }}
          imageSrc={beer}
          altText="travel"
        />
        <div className="dt:hidden pad:block ph:hidden">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={travel2}
            altText="travel2"
          />
        </div>
      </div>
      {/* dt */}
      <div className="ml-6 dt:grid gap-y-6 pad:hidden ph:hidden">
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[223px] pad:h-[223px]"
          imageSrc={travel1}
          altText="travel1"
        />
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[223px] pad:h-[223px]"
          imageSrc={travel2}
          altText="travel2"
        />
      </div>
      <div className="ml-6 dt:block pad:hidden ph:hidden">
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[470px] pad:h-[466px]"
          imageSrc={travel3}
          altText="travel3"
        />
      </div>
      {/* ph */}
      <div className="dt:hidden pad:hidden ph:flex gap-x-4 overflow-x-scroll scrollbar-hide">
        <div className="flex flex-nowrap mr-4">
          <Card
            bgColor="bg-primary-50"
            title1="MT · 번개 · 여행"
            title2=""
            width="pad:w-80 ph:w-64"
            height="pad:h-[162px] ph:h-36"
            descriptions={{
              default: [
                'MT, 바다 여행, 놀이공원 등의',
                '친목을 다질 수 있는 활동과',
                '산책, 보드게임 카페, 술자리, 맛집 탐방 등',
                '일상을 함께하는 다양한 모임들이 있습니다.',
                '이렇게 많은 시간을 함께 보내는 만큼 깔루아',
                '는 가족보다 더 가족같은 사이랍니다.',
              ],
              phone: [
                'MT, 바다 여행, 놀이공원 등의 친목을',
                '다질 수 있는 활동과 산책, 보드게임 카페,',
                '술자리, 맛집 탐방 등 일상을 함께하는',
                '다양한 모임들이 있습니다. 이렇게 많은',
                '시간을 함께 보내는 만큼 깔루아는',
                '가족보다 더 가족같은 사이랍니다.',
              ],
            }}
            imageSrc={beer}
            altText="travel"
          />
          <ImageBox
            width="ph:w-[297px]"
            height="ph:h-[364px]"
            imageSrc={travel1}
            altText="travel1"
          />
          <ImageBox
            width="ph:w-[297px]"
            height="ph:h-[364px]"
            imageSrc={travel2}
            altText="travel2"
          />
          <ImageBox
            width="ph:w-[297px]"
            height="ph:h-[364px]"
            imageSrc={travel3}
            altText="travel3"
          />
        </div>
      </div>
    </section>
  );
};

export default Travel;
