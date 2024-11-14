'use client';

import * as React from 'react';
import { useState } from 'react';
import Banner from '@/components/ui/Banner';
import InfoList from '@/components/templates/admin/Info'; // Use only this import
import { defaultData, recruitingInfoList } from './recruitingData';
import { InputFieldType } from '@/components/ui/admin/type';
import { Button } from '@mui/material';
import AdminButton from '@/components/ui/admin/Button';

const RecruitingPage = () => {
  const [data, setData] = useState<{ [key: string]: any }>(defaultData); // Explicitly typing data

  // 수정 취소
  const onCancelEdit = () => {
    if (!isChanged(data, defaultData)) {
      return;
    }
  };

  // 변경 사항 저장
  const onSaveEdit = () => {};

  const onChangeData = (newValue: any, label: string) => {
    setData((prevData) => ({ ...prevData, [label]: newValue }));
  };

  return (
    <div className="font-pretendard mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto flex flex-col gap-[40px]">
      <Banner>지원 정보 수정</Banner>
      <InfoList
        data={data}
        fieldList={recruitingInfoList}
        onChange={onChangeData}
      />
      <div className="flex flex-row gap-[24px] justify-end">
        <AdminButton onClick={onCancelEdit}>취소하기</AdminButton>
        <AdminButton
          disabled={!isChanged(defaultData, data)}
          onClick={onSaveEdit}
        >
          저장하기
        </AdminButton>
      </div>
    </div>
  );
};

function isChanged(dataA: any, dataB: any) {
  for (const key in dataA) {
    if (dataA[key] !== dataB[key]) {
      return true;
    }
  }
  return false;
}

export default RecruitingPage;
