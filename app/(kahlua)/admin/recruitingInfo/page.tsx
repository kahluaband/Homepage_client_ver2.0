'use client';

import * as React from 'react';
import { useState } from 'react';
import Banner from '@/components/ui/Banner';
import InfoList from '@/components/templates/admin/Info'; // Use only this import
import { defaultData, recruitingInfoList } from './recruitingData';
import AdminButton from '@/components/ui/admin/Button';
import isChanged from '@/components/util/isChanged';
import Link from 'next/link';
import WestIcon from '@mui/icons-material/West';
import CancelModal from '@/components/admin/CancelModal';
import EditModal from '@/components/admin/EditModal';

const RecruitingPage = () => {
  const [data, setData] = useState<{ [key: string]: any }>(defaultData); // Explicitly typing data
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isCandelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);

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
    setIsEditModalOpen(false);
  };

  const onChangeData = (newValue: any, label: string) => {
    setData((prevData) => ({ ...prevData, [label]: newValue }));
  };

  return (
    <div className="font-pretendard mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto flex flex-col gap-[40px]">
      {/* Banner */}
      <Banner>모집 정보 수정</Banner>

      {/* List */}
      <div className="flex flex-col w-full max-pad:px-[16px]">
        <InfoList
          data={data}
          fieldList={recruitingInfoList}
          onChange={onChangeData}
        />
      </div>

      {/* 취소, 저장 Buttons */}
      <div className="flex flex-row gap-[24px] w-full max-pad:px-[16px] justify-end">
        <AdminButton onClick={onCancelEdit}>취소하기</AdminButton>
        <AdminButton
          disabled={!isChanged(defaultData, data)}
          onClick={() => setIsEditModalOpen(true)}
          className={`${isChanged(defaultData, data) ? 'bg-primary-50' : 'bg-gray-10'}`}
        >
          저장하기
        </AdminButton>
        <EditModal
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          handleSubmit={onSaveEdit}
        />
      </div>

      {/* admin 홈으로 Button */}
      <div
        key="admin"
        className="flex flex-row w-auto h-auto max-pad:mx-[16px] gap-[8px] items-center"
        onClick={() => setIsCancelModalOpen(true)}
      >
        <WestIcon />
        <span className="text-[16px] font-medium">Admin 홈으로</span>
      </div>
      <CancelModal
        isOpen={isCandelModalOpen}
        setIsOpen={setIsCancelModalOpen}
      />
    </div>
  );
};

export default RecruitingPage;
