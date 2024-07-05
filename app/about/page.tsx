import Image from 'next/image';
import aboutband from '@/public/image/about-band.png';
import aboutmusic from '@/public/image/about-music.svg';

const page = () => {
  return (
    <div className="font-pretendard w-full h-[3129px] flex justify-center">
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
                <div className="w-[102px] h-[102px] rounded-bl-3xl absolute bg-gray-0">
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
            <div className="w-96 h-[368px] flex flex-col items-center rounded-r-3xl rounded-bl-3xl bg-gray-90 text-gray-0">
              <div className="flex-grow"></div>
              <p className="w-80 h-[162px] mb-8 text-lg font-medium leading-[150%]">
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
        <section className="mt-[200px] h-[470px] flex">
          <div className="w-96 rounded-3xl h-full">
            <div className="flex">
              <h3 className="w-[282px] h-[102px] rounded-t-3xl bg-danger-40 text-gray-0">
                <p className="mt-8 ml-8 text-[32px] font-semibold leading-[150%]">
                  정기 공연
                  <br />및 각종 행사
                </p>
              </h3>
              <div className="w-[102px] h-[102px] bg-danger-40 relative">
                <div className="w-[102px] h-[102px] rounded-bl-3xl absolute bg-gray-0">
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
            <div className="w-96 h-[368px] flex flex-col items-center rounded-r-3xl rounded-bl-3xl bg-danger-40 text-gray-0">
              <div className="flex-grow"></div>
              <p className="w-84 h-[189px] mb-8 text-lg font-medium leading-[150%]">
                밴드의 꽃은 바로 공연! 깔루아는 매년 3월과
                <br />
                9월 정기 공연을 열고 있습니다.
                <br />
                이 외에도 학교 축제, 학과 축제 등 무대만 있다
                <br />
                면 달려가 다양한 공연을 하고 있습니다.
                <br />
                공연 전 한두 달간 수십번의 합주를 하며 팀워
                <br />
                크를 다지고, 공연 직전에는 런스루와 리허설
                <br />도 합니다.
              </p>
            </div>
          </div>

          <div className="ml-6">
            <div className="rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
              <Image src={aboutband} alt="About Band" />
            </div>
            <div className="rounded-3xl w-96 h-[223px] overflow-hidden">
              <Image src={aboutband} alt="About Band" />
            </div>
          </div>
          <div className="ml-6 rounded-3xl w-96 h-full bg-gray-90 overflow-hidden">
            <Image src={aboutband} alt="About Band" />
          </div>
        </section>

        {/* 창립제와 연말 송년회 */}
        <section className="mt-[200px] h-[470px] flex">
          <div className="w-96 rounded-3xl h-full">
            <div className="flex">
              <h3 className="w-[282px] h-[102px] rounded-t-3xl bg-warning-40 text-gray-0">
                <p className="mt-8 ml-8 text-[32px] font-semibold leading-[150%]">
                  창립제와
                  <br />
                  연말 송년회
                </p>
              </h3>
              <div className="w-[102px] h-[102px] bg-warning-40 relative">
                <div className="w-[102px] h-[102px] rounded-bl-3xl absolute bg-gray-0">
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
            <div className="w-96 h-[368px] flex flex-col items-center rounded-r-3xl rounded-bl-3xl bg-warning-40 text-gray-0">
              <div className="flex-grow"></div>
              <p className="w-80 h-[189px] mb-8 text-lg font-medium leading-[150%]">
                7월에는 깔루아의 창립일을 기념하는 창립제,
                <br />
                12월에는 다함께 연말을 마무리하는 송년회가
                <br />
                열립니다.
                <br />
                1기부터 활동기수까지 선후배가 함께 모여
                <br />
                네트워킹을 할 수 있는 행사입니다.
                <br />
                이렇게 많은 선배들, 동기들, 후배들을 사귈 수
                <br />
                있는 것이 깔루아의 자랑 중 하나입니다.
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

        {/* MT, 번개, 여행 */}
        <section className="mt-[200px] h-[470px] flex">
          <div className="w-96 rounded-3xl h-full">
            <div className="flex">
              <h3 className="w-[282px] h-[102px] rounded-t-3xl bg-primary-50 text-gray-0">
                <p className="mt-8 ml-8 text-[32px] font-semibold leading-[150%]">
                  MT · 번개 · 여행
                </p>
              </h3>
              <div className="w-[102px] h-[102px] bg-primary-50 relative">
                <div className="w-[102px] h-[102px] rounded-bl-3xl absolute bg-gray-0">
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
            <div className="w-96 h-[368px] flex flex-col items-center rounded-r-3xl rounded-bl-3xl bg-primary-50 text-gray-0">
              <div className="flex-grow"></div>
              <p className="w-80 h-[162px] mb-8 text-lg font-medium leading-[150%]">
                MT, 바다 여행, 놀이공원 등의
                <br />
                친목을 다질 수 있는 활동과
                <br />
                산책, 보드게임 카페, 술자리, 맛집 탐방 등
                <br />
                일상을 함께하는 다양한 모임들이 있습니다.
                <br />
                이렇게 많은 시간을 함께 보내는 만큼 깔루아
                <br />는 가족보다 더 가족같은 사이랍니다.
              </p>
            </div>
          </div>

          <div className="ml-6">
            <div className="rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
              <Image src={aboutband} alt="About Band" />
            </div>
            <div className="rounded-3xl w-96 h-[223px] overflow-hidden">
              <Image src={aboutband} alt="About Band" />
            </div>
          </div>
          <div className="ml-6 rounded-3xl w-96 h-full bg-gray-90 overflow-hidden">
            <Image src={aboutband} alt="About Band" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
