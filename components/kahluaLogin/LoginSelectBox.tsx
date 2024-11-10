import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectBoxProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  itemList: string[];
  children: string;
}

const LoginSelectBox: React.FC<SelectBoxProps> = ({
  data,
  setData,
  id,
  itemList,
  children,
}) => (
  <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[24px] rounded-[12px] bg-black">
    <p className="text-primary-50">{children}</p>
    <Select
      labelId={id}
      value={data}
      onChange={(e: SelectChangeEvent) => setData(e.target.value)}
      sx={{
        padding: 0,
        '.MuiSelect-icon': { color: '#ffffff' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 152,
            width: 178,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            marginTop: 4,
            padding: 0,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            transform: 'translateX(-16px)',
          },
        },
        sx: {
          '*::-webkit-scrollbar': {
            width: '4px',
            borderRadius: '4px',
            margin: '8px',
            transform: 'translateX(28px)',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#CBCDD7',
            borderRadius: '4px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            borderRadius: '4px',
            border: '1px solid #CBCDD7',
            margin: '8px',
          },
        },
      }}
      className="w-full h-[48px] text-gray-0 text-start p-0"
    >
      {itemList.map((item) => (
        <MenuItem
          key={item}
          value={item}
          sx={{ height: 48 }}
          className="text-gray-0"
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  </div>
);

export default LoginSelectBox;
