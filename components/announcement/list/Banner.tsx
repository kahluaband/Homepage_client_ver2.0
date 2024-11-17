export const Banner = () => {
  return (
    <div className="w-full h-[258px] pad:w-[786px] dt:w-[1200px] pad:h-[320px] mx-auto bg-gray-90 mt-[32px] pad:rounded-[24px] px-20 py-16 flex flex-col justify-center pad:justify-normal items-center">
      <h2 className="text-gray-0 text-[36px] pad:text-[64px] font-[600] leading-[130%]">
        ANNOUNCEMENT
      </h2>
      <p className="text-gray-20 text-[16px] pad:text-[20px] font-[500] text-center mt-8">
        깔루아 멤버들이 이용하는 게시판입니다.
        <br />
        각종 공연 및 행사 관련 정보, 공지사항들을 확인하실 수 있습니다.
      </p>
    </div>
  );
};
