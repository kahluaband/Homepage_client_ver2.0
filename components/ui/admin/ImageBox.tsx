import React, { useEffect, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import { InputFieldType } from './type';

export default function ImageBox({
  field,
  value,
  onChange,
}: {
  field: InputFieldType;
  value: string;
  onChange: (newValue: any, label: string) => void;
}) {
  const { label } = field;

  const [image, setImage] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImage = Array.from(files).map(
        (file) => URL.createObjectURL(file) // 이미지 미리 볼 수 있게
      );
      setImage((prevImage) => [...prevImage, ...newImage]);
    }
  };

  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={(event) => onChange(event.target.value, label)}
      sx={{ width: '300px', height: '400px' }}
      InputProps={{
        sx: {
          borderRadius: '12px',
        },
      }}
    />
  );
}
