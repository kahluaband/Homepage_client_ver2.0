import React, { useEffect, useRef, useState } from 'react';
import { InputFieldType } from './type';

interface ImageProps {
  data: any;
  field: InputFieldType;
  onChange: (newValue: string, title: string) => void;
}

const ImageBox: React.FC<ImageProps> = ({ data, field, onChange }) => {
  const { label, title } = field;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImage = Array.from(files).map(
        (file) => URL.createObjectURL(file) // 이미지 미리 볼 수 있게
      );
    }
  };

  return (
    <div
      key={label}
      onClick={() => handleImageUpload}
      className="flex h-[438px] pad:h-[400px] w-[328px] pad:w-[300px] rounded-[12px] justify-center items-center border-gray-40 border"
    >
      <img
        src={data}
        alt={`uploaded-${label}`}
        className="w-auto h-full object-cover rounded-[11px] transition duration-200 ease-in-out group-hover:blur-sm"
      />
    </div>
  );
};

export default ImageBox;
