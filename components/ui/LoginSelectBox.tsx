import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectBoxProps {
    data: string;
    setData: React.Dispatch<React.SetStateAction<string>>;
    id: string;
    itemList: string[];
}

const LoginSelectBox: React.FC<SelectBoxProps> = ({ data, setData, id, itemList }) => (
    <div className="flex flex-row w-[200px] h-[48px] px-[20px] py-[10px] justify-center items-center gap-[24px] rounded-[12px] bg-black">
        <p className="text-primary-50">기수</p>
        <Select
            labelId={id}
            value={data}
            onChange={(e: SelectChangeEvent) => setData(e.target.value)}
            sx={{
                border: 'none',
                padding: 0,
                margin: 0,
                '.MuiSelect-icon': { color: '#ffffff' },
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
                '&.Mui-focused': { outline: 'none', border: 'none' },
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: 152, width: 178, backgroundColor: '#000000', marginTop: 4, padding: 0, borderRadius: 12 } } }}
            className="w-full h-[48px] text-gray-0 text-start p-0"
        >
            {itemList.map((item) => (
                <MenuItem key={item} value={item} sx={{ height: 48 }} className="text-gray-0">
                    {item}
                </MenuItem>
            ))}
        </Select>
    </div>
);

export default LoginSelectBox;