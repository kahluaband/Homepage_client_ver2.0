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
  children,
}: {
  field: InputFieldType;
  value: any;
  onChange: (newValue: any, label: string) => void;
  isEditing: boolean;
  children: React.ReactNode;
}) {
  const { label } = field;

  return (
    <div className="flex flex-col pad:flex-row gap-2">
      <div className="flex items-center w-[160px] h-[30px] pad:h-12">
        {children}
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          value={value}
          defaultValue={dayjs()}
          onChange={(newValue) => onChange(newValue, label)}
          disabled={!isEditing}
          format="L hh:mm a"
        />
      </LocalizationProvider>
    </div>
  );
}
