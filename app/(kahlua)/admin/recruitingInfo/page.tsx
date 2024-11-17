'use client';

import * as React from 'react';
import { useState } from 'react';
import Banner from '@/components/ui/Banner';
import InfoList from '@/components/templates/admin/Info'; // Use only this import
import { defaultData, recruitingInfoList } from './recruitingData';
import AdminButton from '@/components/ui/admin/Button';
import isChanged from '@/components/util/isChanged';
import ButtonModal from '@/components/ui/ButtonModal';

const RecruitingPage = () => {
  const [data, setData] = useState<{ [key: string]: any }>(defaultData); // Explicitly typing data
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 수정 취소
  const onCancelEdit = () => {
    if (!isChanged(data, defaultData)) {
      return;
    }
    setData(defaultData);
  };

  // 변경 사항 저장
  const onSaveEdit = () => {
    // [todo] api 연결
  };

  const onChangeData = (newValue: any, label: string) => {
    setData((prevData) => ({ ...prevData, [label]: newValue }));
  };

  return (
    <div className="font-pretendard mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto flex flex-col gap-[40px]">
      <Banner>모집 정보 수정</Banner>
      <div className="flex flex-col w-full max-pad:px-[16px]">
        <InfoList
          data={data}
          fieldList={recruitingInfoList}
          onChange={onChangeData}
        />
      </div>
      <div className="flex flex-row gap-[24px] w-full max-pad:px-[16px] justify-end">
        <AdminButton onClick={onCancelEdit}>취소하기</AdminButton>
        <AdminButton
          disabled={!isChanged(defaultData, data)}
          onClick={() => setIsModalOpen(true)}
          className={`${isChanged(defaultData, data) ? 'bg-primary-50' : 'bg-gray-10'}`}
        >
          저장하기
        </AdminButton>
        <ButtonModal isOpen={isModalOpen} onClose={() => onSaveEdit()}>
          모집 정보를 수정하시겠습니까?
        </ButtonModal>
      </div>
    </div>
  );
};

export default RecruitingPage;
