import Image from 'next/image';
import music from '@/public/image/about/music.svg';
import guitar from '@/public/image/about/guitar.svg';
import celebrate from '@/public/image/about/celebrate.svg';
import beer from '@/public/image/about/beer.svg';
import ensemble1 from '@/public/image/about/ensemble1.avif';
import ensemble2 from '@/public/image/about/ensemble2.avif';
import ensemble3 from '@/public/image/about/ensemble3.avif';
import concert1 from '@/public/image/about/concert1.avif';
import concert2 from '@/public/image/about/concert2.avif';
import concert3 from '@/public/image/about/concert3.avif';
import networking1 from '@/public/image/about/networking1.avif';
import networking2 from '@/public/image/about/networking2.avif';
import networking3 from '@/public/image/about/networking3.avif';
import travel1 from '@/public/image/about/travel1.avif';
import travel2 from '@/public/image/about/travel2.avif';
import travel3 from '@/public/image/about/travel3.avif';
import Banner from '@/components/about/Banner';
import Card from '@/components/about/Card';
import ImageBox from '@/components/about/ImageBox';

const page = () => {
  return (
    <div className="font-pretendard relative mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto pt-4 flex flex-col justify-center">
      {/* About KAHLUA */}
      <Banner />

      {/* 새내기 첫 합주 */}
      <section className="pad:mt-[72px] ph:mt-[32px] flex">
        <Card
          bgColor="bg-gray-90"
          title1="새내기 첫 합주"
          title2=""
          width="pad:w-80 ph:w-64"
          height="pad:h-[162px] ph:h-36"
          descriptions={{
            default: [
              '깔루아 모집 후 직속 선배들의 악기 연주를',
              '위한 속성 과외가 준비되어 있습니다.',
              '그리고 새내기들끼리 대망의 첫 합주를',
              '하게되는데요.',
              '이 첫 합주를 기점으로 밴드의 매력에',
              '푹 빠지게 될거예요!',
            ],
            phone: [
              '깔루아 모집 후 직속 선배들의 악기',
              '연주를 위한 속성 과외가 준비되어',
              '있습니다. 그리고 새내기들끼리 대망의 첫',
              '합주를 하게되는데요.',
              '이 첫 합주를 기점으로 밴드의 매력에',
              '푹 빠지게 될거예요!',
            ],
          }}
          imageSrc={music}
          altText="ensemble"
        />
        <div className="ml-6">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[470px] pad:h-[466px]"
            imageSrc={ensemble1}
            altText="ensemble1"
          />
        </div>
        <div className="ml-6 grid gap-y-6">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={ensemble2}
            altText="ensemble2"
          />
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={ensemble3}
            altText="ensemble3"
          />
        </div>
      </section>

      {/* 정기 공연 및 각종 행사 */}
      <section className="pad:mt-[200px] ph:mt-[104px] h-[470px] flex">
        <Card
          bgColor="bg-danger-40"
          title1="정기 공연"
          title2="및 각종 행사"
          width="pad:w-[321px] ph:w-64"
          height="pad:h-[189px] ph:h-[168px]"
          descriptions={{
            default: [
              '밴드의 꽃은 바로 공연! 깔루아는 매년 3월과',
              '9월 정기 공연을 열고 있습니다.',
              '이 외에도 학교 축제, 학과 축제 등 무대만 있다',
              '면 달려가 다양한 공연을 하고 있습니다.',
              '공연 전 한두 달간 수십번의 합주를 하며 팀워',
              '크를 다지고, 공연 직전에는 런스루와 리허설',
              '도 합니다.',
            ],
            phone: [
              '밴드의 꽃은 바로 공연! 깔루아는 매년',
              '3월과 9월 정기 공연을 열고 있습니다.',
              '이 외에도 학교 축제, 학과 축제 등 무대만',
              '있다면 달려가 공연을 하고 있습니다.',
              '공연 전 한두 달간 수십번의 합주를 하며',
              '팀워크를 다지고, 공연 직전에는 런스루와',
              '리허설도 합니다.',
            ],
          }}
          imageSrc={guitar}
          altText="concert"
        />
        <div className="ml-6 grid gap-y-6">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={concert1}
            altText="concert1"
          />
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={concert2}
            altText="concert2"
          />
        </div>
        <div className="ml-6">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[470px] pad:h-[466px]"
            imageSrc={concert3}
            altText="concert3"
          />
        </div>
      </section>

      {/* 창립제와 연말 송년회 */}
      <section className="pad:mt-[200px] ph:mt-[104px] h-[470px] flex">
        <Card
          bgColor="bg-warning-40"
          title1="창립제와"
          title2="연말 송년회"
          width="pad:w-80 ph:w-64"
          height="pad:h-[189px] ph:h-[192px]"
          descriptions={{
            default: [
              '7월에는 깔루아의 창립일을 기념하는 창립제,',
              '12월에는 다함께 연말을 마무리하는 송년회가',
              '열립니다.',
              '1기부터 활동기수까지 선후배가 함께 모여',
              '네트워킹을 할 수 있는 행사입니다.',
              '이렇게 많은 선배들, 동기들, 후배들을 사귈 수',
              '있는 것이 깔루아의 자랑 중 하나입니다.',
            ],
            phone: [
              '7월에는 깔루아의 창립일을 기념하는',
              '창립제, 12월에는 다함께 연말을 마무리',
              '하는 송년회가 열립니다.',
              '1기부터 활동기수까지 선후배가 함께',
              '모여 네트워킹을 할 수 있는 행사입니다.',
              '이렇게 많은 선배들, 동기들, 후배들을',
              '사귈 수 있는 것이 깔루아의 자랑 중',
              '하나입니다.',
            ],
          }}
          imageSrc={celebrate}
          altText="networking"
        />
        <div className="ml-6">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[470px] pad:h-[466px]"
            imageSrc={networking1}
            altText="networking1"
          />
        </div>
        <div className="ml-6 grid gap-y-6">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={networking2}
            altText="networking2"
          />
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={networking3}
            altText="networking3"
          />
        </div>
      </section>

      {/* MT, 번개, 여행 */}
      <section className="pad:mt-[200px] ph:mt-[104px] h-[470px] flex mb-[160px]">
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
        <div className="ml-6 grid gap-y-6">
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
        <div className="ml-6">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[470px] pad:h-[466px]"
            imageSrc={travel3}
            altText="travel3"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
