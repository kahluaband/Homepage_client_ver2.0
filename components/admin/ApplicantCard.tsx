'use client';
import React, { useState, useEffect } from 'react';
import phone_icon from '@/public/image/admin/tabler_device-mobile.svg';
import department_icon from '@/public/image/admin/tabler_book-2.svg';
import address_icon from '@/public/image/admin/tabler_map-pin.svg';
import Image from 'next/image';
import show_more from '@/public/image/admin/tabler_chevron-down.svg';

const dummy_applicant = {
  name: '홍길동',
  gender: '남성',
  birth: '1999-01-01',
  phone: '010-1234-5678',
  department: '컴퓨터공학과',
  address: '서울특별시 송파구',
  session1: '보컬',
  session2: '기타',
  motive:
    '안녕하세요. 저는 홍길동입니다. 평소 음악에 깊은 관심을 가지고 있었고, 밴드 동아리에 참여하여 저의 음악적 역량을 더욱 키우고자 지원하게 되었습니다. 어렸을 때부터 음악은 제 삶의 중요한 부분이었습니다. 특히 밴드 음악에 대한 열정이 강해 기타를 배워왔고, 다양한 음악을 연주하며 실력을 쌓아왔습니다. 혼자 연주하는 것도 좋지만, 다른 사람들과 함께 음악을 만들어가는 과정에서 얻는 즐거움과 배움은 더욱 특별하다고 생각합니다. 밴드 동아리에서 여러 멤버들과 함께 연습하고 공연하면서 팀워크와 협업의 가치를 체험하고 싶습니다. 또한, 동아리 활동을 통해 다양한 음악 장르를 접하고 새로운 기술을 배우고 싶습니다. 다른 멤버들과의 협력을 통해 음악적 시야를 넓히고, 공연을 준비하고 무대에 서는 경험을 통해 자신감을 키우고자 합니다. 밴드 동아리에 가입함으로써 음악에 대한 제 열정을 나누고, 함께 성장하는 과정을 즐기며, 동아리의 일원으로서 기여하고 싶습니다.',
  career:
    ' 중학생 때 처음 기타를 접하고, 그 매력에 빠져 꾸준히 연습해왔습니다. 기타를 연주하면서 다양한 음악 장르를 탐구할 수 있었고, 기타의 폭넓은 표현력에 매료되었습니다. 일렉트릭 기타뿐만 아니라 어쿠스틱 기타도 즐겨 연주하며, 음악의 다채로운 매력을 경험하고 있습니다. 저는 지난 몇 년 동안 기타를 통해 다양한 연주 경험을 쌓았습니다. 학교 축제에서 친구들과 밴드를 결성해 공연을 했고, 지역 음악 행사에서도 여러 차례 무대에 섰습니다. 이 과정에서 무대 경험을 쌓으며, 청중과의 소통과 무대 매너를 익힐 수 있었습니다. 또한, 다양한 음악 스타일을 접하며 제 연주 스타일을 발전시켜왔습니다. 기타는 밴드 음악의 핵심적인 역할을 담당하는 악기입니다. 제가 가진 기타 연주 실력과 열정을 바탕으로 밴드의 음악적 완성도를 높이고, 멋진 무대를 함께 만들어나가겠습니다.',
  etc: '저는 바이올린을 연주할 줄 압니다. 밴드 동아리에 들어가게 된다면, 바이올린을 통해 동아리의 음악적 다양성을 넓히고, 새로운 음악적 시도를 함께 해보고 싶습니다. 다른 악기와의 조화로운 앙상블을 통해 멋진 공연을 만들어 나가겠습니다.',
  determination:
    '동아리의 발전을 위해 새로운 아이디어를 제시하고, 다양한 활동을 기획하여 동아리가 더욱 활기차고 성장할 수 있도록 기여하겠습니다. 또한, 신입 회원들의 멘토 역할을 자청하여 후배들이 잘 적응하고 성장할 수 있도록 돕겠습니다. 밴드 동아리에서 저의 열정과 노력을 다해 활동하며, 멋진 음악을 만들어 나가겠습니다. 감사합니다.',
};

const ApplicantCard = () => {
  // TODO: 데이터 연동 필요 !!! 일단 더미 데이터로 대체

  return (
    <div className="max-w-[384px] h-[242px] rounded-3xl font-pretendard flex flex-col">
      {/* 카드 상단 부분 : 이름 및 기본 개인 정보 */}
      <div className="relative w-full h-[58px] bg-gray-80 rounded-t-3xl flex gap-1 justify-start items-center pl-6">
        <span className="text-xl font-semibold text-gray-0">
          {dummy_applicant.name}
        </span>
        <span className="text-lg font-medium text-gray-50">·</span>
        <span className="text-lg font-medium text-gray-50">
          {dummy_applicant.gender}
        </span>
        <span className="text-lg font-medium text-gray-50">·</span>
        <span className="text-lg font-medium text-gray-50">
          {dummy_applicant.birth}
        </span>
        <Image
          src={show_more}
          alt="show_more_icon"
          width={24}
          height={24}
          className="absolute right-5 cursor-pointer"
        />
      </div>
      {/* 카드 하단 부분 : 세부 개인 정보 */}
      <div className="w-full h-[184px] bg-gray-5 rounded-b-3xl pl-6 pt-4">
        <div className="flex gap-2 pb-3">
          <Image src={phone_icon} alt="phone_icon" width={20} height={20} />
          <span className="text-lg font-medium text-gray-80">
            {dummy_applicant.phone}
          </span>
        </div>
        <div className="flex gap-2 pb-3">
          <Image
            src={department_icon}
            alt="department_icon"
            width={20}
            height={20}
          />
          <span className="text-lg font-medium text-gray-80">
            {dummy_applicant.department}
          </span>
        </div>
        <div className="flex gap-2 pb-3">
          <Image src={address_icon} alt="address_icon" width={20} height={20} />
          <span className="text-lg font-medium text-gray-80">
            {dummy_applicant.address}
          </span>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <span className="text-lg font-medium text-gray-40">1지망</span>
            <span className="text-lg font-medium text-gray-80">
              {dummy_applicant.session1}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-lg font-medium text-gray-40">2지망</span>
            <span className="text-lg font-medium text-gray-80">
              {dummy_applicant.session2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
