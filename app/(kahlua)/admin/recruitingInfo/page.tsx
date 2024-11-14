'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import RecruitingInfo from '@/components/templates/admin/recruitingInfo';
import Banner from '@/components/ui/Banner';

const page = () => {
  const [info, setInfo] = useState({
    generation: '',
    recruitingStartDate: '',
    recruitingDeadline: '',
    vocalDeadline: '',
    applyDeadline: '',
    meeting: '',
    afterParty: '',
    announcementDate: '',
    activePeriod: '',
  });

  const handleInfoChange = (info: {
    generation: BigInteger;
    recruitingStartDate: Date;
    recruitingDeadline: Date;
    vocalDeadline: Date;
    applyDeadline: Date;
    meeting: Date;
    afterParty: Date;
    announcementDate: Date;
    activePeriod: Date;
  }) => {
    setInfo((prevState) => ({
      ...prevState,
      ...info,
    }));
  };

  return (
    <div className="font-pretendard mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto flex flex-col">
      <Banner>지원 정보 수정</Banner>
      <RecruitingInfo onInfoChange={handleInfoChange} Info={info} />
    </div>
  );
};

export default page;
