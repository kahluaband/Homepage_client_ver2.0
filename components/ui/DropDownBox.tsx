import Image from 'next/image';
import { useState } from 'react';

interface Option {
    value: string;
    label: string;
}

interface DropDownBoxProps {
    type: 'date' | 'ticket'; // Type of dropdown: 'date' or 'ticket'
}

const dateOptions: Option[] = [
    { value: '2024년 3월 1일 18시 00분', label: '2024년 3월 1일 18시 00분' },
];

const ticketOptions: Option[] = [
    { value: 'freshman', label: '신입생 티켓' },
    { value: 'general', label: '일반 티켓' },
];

const DropDownBox: React.FC<DropDownBoxProps> = ({ type }) => {
    const [selectedValue, setSelectedValue] = useState<string>(type === 'date' ? '회차 선택' : '좌석 선택');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(prev => !prev);
    };

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        setIsDropdownVisible(false);
    };

    const options = type === 'date' ? dateOptions : ticketOptions;

    return (
        <div className="font-pretendard relative inline-block text-center transition-all duration-450">
            <button
                type="button"
                className="z-5 mx-auto px-5 justify-between items-center flex flex-row appearance-none outline-none text-16px font-medium text-start leading-6 cursor-pointer w-[312px] h-[56px] rounded-xl bg-gray-0 border text-gray-40 border-gray-15"
                onClick={toggleDropdown}
            >
                <p>{selectedValue}</p>
                <Image src="/image/ticket/down.svg" width={24} height={24} alt="down" />
            </button>
            <ul
                className={`z-10 absolute top-[56px] left-0 right-0 text-16px font-medium leading-6 border border-gray-15 rounded-xl bg-gray-0 text-gray-40 overflow-hidden w-[312px] ${
                    isDropdownVisible ? 'block max-h-[300px] p-4' : 'hidden max-h-0 p-0'
                } transition-all duration-300 ease-in-out`}
            >
                {options.map(option => (
                    <li key={option.value}>
                        <button
                            type="button"
                            className="w-full text-start focus:outline-none flex justify-start hover:bg-gray-200"
                            onClick={() => handleOptionClick(option.label)}
                            disabled={option.value === ''}
                        >
                            {option.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownBox;
