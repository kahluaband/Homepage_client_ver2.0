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
  isEditing,
}: {
  field: InputFieldType;
  value: any;
  onChange: (newValue: any, label: string) => void;
  isEditing: boolean;
}) {
  const { label } = field;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={value ? dayjs(value) : dayjs()}
        defaultValue={dayjs()}
        onChange={(newValue) => onChange(newValue, label)}
        disabled={!isEditing}
        format="YYYY-MM-dd HH:mm"
      />
    </LocalizationProvider>
  );
}
