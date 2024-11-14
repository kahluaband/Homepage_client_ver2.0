import { TextField } from '@mui/material';
import { TextType } from './type';
import React from 'react';

export default function Text({
  field,
  value,
  onChange,
  isEditing,
  children,
}: {
  field: TextType;
  value: any;
  onChange: (newValue: any, label: string) => void;
  isEditing: boolean;
  children: React.ReactNode;
}) {
  const { label, inputType } = field;

  return (
    <div className="flex flex-col pad:flex-row gap-2">
      <div className="flex items-center w-[160px] h-[30px] pad:h-12">
        {children}
      </div>
      <TextField
        variant="outlined"
        type={inputType}
        value={value}
        onChange={(event) => onChange(event.target.value, label)}
        disabled={!isEditing}
      />
    </div>
  );
}
