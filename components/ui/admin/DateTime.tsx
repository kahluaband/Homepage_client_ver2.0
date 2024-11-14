import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { InputFieldType } from '@/components/ui/admin/type';

export default function DateTime({
  field,
  value,
  onChange,
}: {
  field: InputFieldType;
  value: any;
  onChange: (newValue: any, label: string) => void;
}) {
  const { label } = field;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={dayjs(value)}
        defaultValue={dayjs(value)}
        onChange={(newValue) => onChange(newValue, label)}
        format="YYYY-MM-dd HH:mm"
        sx={{ width: '100%' }}
      />
    </LocalizationProvider>
  );
}
