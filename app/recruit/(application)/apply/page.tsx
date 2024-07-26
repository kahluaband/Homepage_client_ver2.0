'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import ApplicantInfo from '@/components/templates/apply/ApplicantInfo';
import CLInfo from '@/components/templates/apply/CLInfo';
import OtherInfo from '@/components/templates/apply/OtherInfo';
import LastCheckModal from '@/components/popups/ticket/LastCheckModal';

const page = () => {
  const [PersonalInfo, setPersonalInfo] = useState({
    name: '',
    birthday: '',
    phone_num: '',
    department: '',
    residence: '',
    gender: '',
  });

  const [CoverLetterInfo, setCoverLetterInfo] = useState({
    session1: '',
    session2: '',
    motivation: '',
    career: '',
    instrument: '',
    determination: '',
  });

  const [AdditionalInfo, setOtherInfo] = useState({
    schedule: '',
    afterparty: true,
  });

  const handlePersonalInfoChange = (Personalinfo: {
    name: string;
    birthday: string;
    phone_num: string;
    department: string;
    residence: string;
    gender: string;
  }) => {
    setPersonalInfo(Personalinfo);
  };

  const handleCLInfoChange = (CLinfo: {
    session1: string;
    session2: string;
    motivation: string;
    career: string;
    instrument: string;
    determination: string;
  }) => {
    setCoverLetterInfo(CLinfo);
  };

  const handleOtherInfoChange = (AdditionalInfo: {
    schedule: string;
    afterparty: boolean;
  }) => {
    setOtherInfo(AdditionalInfo);
  };

  const [isComplete, setIsComplete] = React.useState(false);
  const [showLastCheckModal, setShowLastCheckModal] = useState(false);

  const handleApplicationComplete = () => {
    window.location.href = `/recruit/complete`;
  };

  useEffect(() => {
    const isDataComplete =
      PersonalInfo.birthday.trim() != '' &&
      PersonalInfo.department.trim() != '' &&
      PersonalInfo.gender.trim() != '' &&
      PersonalInfo.name.trim() != '' &&
      PersonalInfo.phone_num.trim() != '' &&
      PersonalInfo.residence.trim() != '' &&
      CoverLetterInfo.career.trim() != '' &&
      CoverLetterInfo.determination.trim() != '' &&
      CoverLetterInfo.instrument.trim() != '' &&
      CoverLetterInfo.motivation.trim() != '' &&
      CoverLetterInfo.session1.trim() != '' &&
      CoverLetterInfo.session2.trim() != '' &&
      AdditionalInfo.schedule.trim() != '' &&
      true;

    setIsComplete(isDataComplete);
  }, [PersonalInfo, CoverLetterInfo, AdditionalInfo]);

  return (
    <div className="flex flex-col relative top-16 items-center justify-start text-center mx-auto w-full pad:w-[786px] dt:w-[996px] h-auto mt-4 ">
      <div className="h-[200px] w-full pad:rounded-t-xl bg-gray-90 flex flex-col mx-auto">
        <p className="mt-10 text-gray-0 text-center text-[24px] pad:text-[32px] font-semibold leading-[48px]">
          지원 전 필독사항
        </p>
        <p className="mt-4 text-gray-20 text-center text-[16px] pad:text-[18px]  font-normal leading-[27px] hidden pad:block">
          안녕하세요! 홍익대학교 컴퓨터공학과 밴드학회 깔루아입니다.
        </p>
        <p className="text-gray-20 text-center text-[16px] pad:text-[18px]  font-normal leading-[27px] max-pad:px-6">
          단순 인원 집계용으로 사용되는 가입 지원서이므로 부담 없이 작성해
          주시면 됩니다.
        </p>
      </div>
      <div className="w-full h-auto pad:rounded-b-xl pad:border border-gray-15 flex flex-col text-left">
        <ApplicantInfo
          PersonalInfo={PersonalInfo}
          onInfoChange={handlePersonalInfoChange}
        />
        <CLInfo
          CoverLetterInfo={CoverLetterInfo}
          onInfoChange={handleCLInfoChange}
        />
        <OtherInfo
          OtherInfo={AdditionalInfo}
          onInfoChange={handleOtherInfoChange}
        />
      </div>
      <button
        onClick={(e) => setShowLastCheckModal(true)}
        disabled={!isComplete}
        className={`flex justify-center items-center text-center h-[60px] w-[328px] pad:w-[384px] text-[18px] rounded-[12px] mt-[40px] ph:mb-[100px] pad:mb-[140px] dt:mb-[180px] ${isComplete ? 'bg-primary-50 text-gray-0' : 'bg-gray-10 text-gray-40 cursor-not-allowed'}`}
      >
        제출하기
      </button>
      <LastCheckModal
        isOpen={showLastCheckModal}
        onClose={() => setShowLastCheckModal(false)}
        onReservationComplete={handleApplicationComplete}
      />
    </div>
  );
};

export default page;
