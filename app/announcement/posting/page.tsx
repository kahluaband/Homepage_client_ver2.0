'use client';
import React from 'react';

const Page = () => {
  return (
    <div className="relative flex flex-col items-center mt-[96px] mb-[-160px] font-pretendard">
      <section className="dt:w-[1200px] pad:w-[786px] ph:w-[328px] dt:pb-[578px] pad:pb-[559px] ph:pb-[171px]">
        {/* 취소, 게시하기 */}
        <div className="flex justify-end mb-10">
          <div className="w-[51px] h-[46px] flex justify-center items-center rounded-[12px] mr-4 text-gray-40 text-[20px] font-[500] leading-[150%] cursor-pointer">
            취소
          </div>
          <div className="w-[100px] h-[46px] flex justify-center items-center rounded-[12px] bg-gray-10 text-[20px] font-[500] leading-[150%] text-gray-0 cursor-pointer">
            게시하기
          </div>
        </div>
        {/* 제목 */}
        <input
          type="text"
          placeholder="제목"
          className="w-full pad:h-[64px] ph:h-[52px] shadow-[0_0_0_1px_black] rounded-[8px] px-3 py-2 pad:text-[32px] ph:text-[24px] font-[500] leading-[150%] text-black placeholder-gray-40
          focus:shadow-outline focus:shadow-primary-50 focus:outline-none mb-10"
        />
        {/* 내용 */}
        <textarea
          placeholder="내용을 입력하세요"
          className="w-full h-[586px] shadow-[0_0_0_1px_black] rounded-[8px] px-3 py-2 pad:text-[20px] ph:text-[16px] font-[500] leading-[150%] text-black placeholder-gray-40
          focus:shadow-outline focus:shadow-primary-50 focus:outline-none resize-none mb-10"
        />
        {/* 첨부파일 업로드 */}
        <p className="text-gray-90 text-[20px] font-[400] leading-normal pad:mb-2 ph:mb-4">
          첨부파일 업로드<span className="ml-2">(0/5)</span>
        </p>
        <div className="w-full pad:h-[400px] ph:h-[328px] flex justify-center items-center mb-10">
          <div className="pad:h-[400px] ph:h-[328px] pad:w-[400px] ph:w-[328px] shadow-[0_0_0_1px_black] rounded-[12px] flex justify-center items-center">
            <div
              className="w-8 h-8 rounded-full bg-gray-10 flex justify-center items-center cursor-pointer"
              style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }}
            >
              <span className="text-gray-0 text-[24px] font-[500] leading-normal pb-1">
                +
              </span>
            </div>
          </div>
        </div>

        {/* 커뮤니티 이용규칙 */}
        <div className="bg-[#DADBE2] w-full h-[1px] mb-10" />
        <p className="text-gray-40 pad:text-[20px] ph:text-[18px] font-[600] leading-normal mb-2">
          커뮤니티 이용규칙
        </p>
        <p className="text-gray-40 pad:text-[16px] ph:text-[14px] font-[400] leading-normal">
          ‘깔브리타임 게시판'은 깔루아 멤버 누구나 이용할 수 있는
          커뮤니티입니다. 자유롭게 게시글을 작성하고 소통해주세요. 다만 누구나
          기분 좋게 참여할 수 있는 커뮤니티를 만들기 위하여 관리자가 관리
          운영하고 있습니다. 부적절한 언행 및 내용이 포함된 게시글을 관리자에
          의해 경고없이 삭제될 수 있음을 알려드립니다.
        </p>
      </section>
    </div>
  );
};

export default Page;
