import Image from 'next/image';
import aboutband from '@/public/image/about-band.png';
import aboutmusic from '@/public/image/about-music.svg';

const page = () => {
  return (
    <div className="font-pretendard w-full h-[3468px] flex justify-center">
      <div className="w-[1200px]">
        {/* About KAHLUA */}
        <section className="h-[333px] text-center bg-gray-90 mt-20 rounded-3xl">
          <h1 className="pt-16 font-mustica font-semibold leading-[130%] text-gray-0 text-[64px]">
            About KAHLUA
          </h1>
          <div className="pt-8 text-xl leading-[150%]">
            <p className="text-gray-0 font-semibold">매주 월요일은 깔요일!</p>
            <p className="text-gray-40 font-medium">
              매주 월요일에는 깔루아 정기 회의 및 뒷풀이가 있는 날입니다.
              <br />
              정기 모임 외에도 또 어떤 활동들을 할까요?
            </p>
          </div>
        </section>
        {/* 새내기 첫 합주 */}
        <section className="mt-[72px] h-[470px] flex">
          <div className="w-96 rounded-3xl h-full">
            <div className="flex">
              <h3 className="w-[282px] h-[102px] rounded-t-3xl bg-gray-90 text-gray-0">
                <p className="mt-8 ml-8 text-[32px] font-semibold leading-[150%]">
                  새내기 첫 합주
                </p>
              </h3>
              <div className="w-[102px] h-[102px] bg-gray-90 relative">
                <div className="w-[102px] h-[102px] rounded-bl-3xl z-1000 absolute bg-gray-0">
                  <div className="w-[78px] h-[78px] absolute bg-gray-5 ml-6 mb-6 rounded-3xl flex justify-center items-center">
                    <Image
                      src={aboutmusic}
                      className="w-12 h-12"
                      alt="About Music"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-[368px] flex justify-center rounded-r-3xl rounded-bl-3xl bg-gray-90 text-gray-0">
              <p className="w-80 pt-[174px] text-[18px] font-medium leading-[150%]">
                깔루아 모집 후 직속 선배들의 악기 연주를
                <br />
                위한 속성 과외가 준비되어 있습니다.
                <br />
                그리고 새내기들끼리 대망의 첫 합주를
                <br />
                하게되는데요.
                <br />
                이 첫 합주를 기점으로 밴드의 매력에
                <br />푹 빠지게 될거에요!
              </p>
            </div>
          </div>
          <div className="ml-6 rounded-3xl w-96 h-full bg-gray-90 overflow-hidden">
            <Image src={aboutband} alt="About Band" />
          </div>
          <div className="ml-6">
            <div className="rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
              <Image src={aboutband} alt="About Band" />
            </div>
            <div className="rounded-3xl w-96 h-[223px] overflow-hidden">
              <Image src={aboutband} alt="About Band" />
            </div>
          </div>
        </section>
        {/* 정기 공연 및 각종 행사 */}
        <section className="">
          <div></div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
        {/* 창립제와 연말 송년회 */}
        <section className="">
          <div></div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
        {/* MT, 번개, 여행 */}
        <section className="">
          <div></div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
