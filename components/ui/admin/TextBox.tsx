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
    <TextField
      variant="outlined"
      type={inputType}
      value={value}
      onChange={(event) => onChange(event.target.value, label)}
      disabled={!isEditing}
    />
  );
}
