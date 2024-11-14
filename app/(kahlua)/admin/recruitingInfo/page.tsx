'use client';

import * as React from 'react';
import { useState } from 'react';
import Banner from '@/components/ui/Banner';
import InfoList from '@/components/templates/admin/Info'; // Use only this import
import { defaultData, recruitingInfoList } from './recruitingData';
import { InputFieldType } from '@/components/ui/admin/type';

const RecruitingPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [data, setData] = useState<{ [key: string]: any }>(defaultData); // Explicitly typing data

  const onChangeData = (newValue: any, label: string) => {
    setData((prevData) => ({ ...prevData, [label]: newValue }));
  };

  return (
    <div className="font-pretendard mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto flex flex-col">
      <Banner>지원 정보 수정</Banner>
      <InfoList
        data={data}
        fieldList={recruitingInfoList}
        isEditing={isEditing}
        onChange={onChangeData}
      />
    </div>
  );
};

export default RecruitingPage;
