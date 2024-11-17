'use client';

import * as React from 'react';
import { useState } from 'react';
import InfoList from '@/components/templates/admin/Info';
import {
  defaultData,
  defaultImage,
  performanceImage,
  performanceInfoList,
} from './performanceData';
import ImageBox from '@/components/ui/admin/ImageBox';

const PerformanceInfoTemplate = () => {
  const [data, setData] = useState<{ [key: string]: any }>(defaultData);
  const [image, setImage] = useState<{ [key: string]: string }>(defaultImage);

  const onChangeData = (newValue: any, label: string) => {
    setData((prevData) => ({ ...prevData, [label]: newValue }));
  };

  const onChangeImage = (newValue: string, label: string) => {
    setImage((prevData) => ({ ...prevData, [label]: newValue }));
  };

  return (
    <div className="flex flex-col pad:flex-row w-full max-pad:px-[16px]">
      <ImageBox
        data={image}
        field={performanceImage}
        onChange={onChangeImage}
      />
      <InfoList
        data={data}
        fieldList={performanceInfoList}
        onChange={onChangeData}
      />
    </div>
  );
};

export default PerformanceInfoTemplate;
