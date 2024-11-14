import { TextField } from '@mui/material';
import { TextType } from './type';
import React from 'react';

export default function Text({
  field,
  value,
  onChange,
}: {
  field: TextType;
  value: any;
  onChange: (newValue: any, label: string) => void;
}) {
  const { label, inputType } = field;

  return (
    <TextField
      variant="outlined"
      type={inputType}
      value={value}
      onChange={(event) => onChange(event.target.value, label)}
      sx={{ width: '100%', borderRadius: '12px' }}
    />
  );
}
