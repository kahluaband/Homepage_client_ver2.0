import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import TicketDetails from './TicketDetails';

interface Option {
    value: string;
    label: string;
}

interface DropDownBoxProps {
    type: 'date' | 'ticket';
    onSelect: (value: string) => void;
    member: number;
    setMember: React.Dispatch<React.SetStateAction<number>>;
}

const dateOptions: Option[] = [
    { value: '2024년 3월 1일 18시 00분', label: '2024년 3월 1일 18시 00분' },
];

const ticketOptions: Option[] = [
    { value: '신입생 티켓', label: '신입생 티켓' },
    { value: '일반 티켓', label: '일반 티켓' },
];


const DropDownBox: React.FC<DropDownBoxProps> = ({ type, onSelect, member, setMember}) => {
    const defaultText = type === 'date' ? '회차 선택' : '좌석 선택';
    const [selectedValue, setSelectedValue] = useState<string>(defaultText);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownVisible(prev => !prev);
    };

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        setIsDropdownVisible(false);
        onSelect(value);
        
        if (type === 'ticket') {
            setSelectedTicket(value);
        }
    };

    const handleTicketDetailsClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // 이벤트 전파 중지
        setSelectedTicket(null);
        setIsDropdownVisible(true);
    };

    const options = type === 'date' ? dateOptions : ticketOptions;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`font-pretendard relative inline-block text-center transition-all duration-300 w-[312px] ${isDropdownVisible ? 'mb-14' : ''}`} ref={dropdownRef}>
            {selectedTicket ? (
                <TicketDetails ticketType={selectedTicket} onClick={handleTicketDetailsClick} member={member} setMember={setMember}/>
            ) : (
                <>
                    <div
                        className={`z-10 mx-auto px-5 justify-between items-center flex flex-row appearance-none outline-none text-16px font-medium text-start leading-6 cursor-pointer w-full h-[56px] rounded-xl bg-gray-0 border border-gray-15 transition-all duration-300 ${
                            isDropdownVisible ? 'border-b-0 rounded-b-none' : ''
                        }`}
                        onClick={toggleDropdown}
                    >
                        <p className={`${selectedValue !== defaultText ? 'text-gray-90' : 'text-gray-40'}`}>{selectedValue}</p>
                        {!isDropdownVisible && <Image src="/image/ticket/down.svg" width={24} height={24} alt="down" />}
                    </div>
                    <div
                        className={`absolute rounded-b-xl border-t-0 left-0 right-0 bg-gray-0 border border-gray-15 transition-all duration-300 ease-in-out overflow-hidden ${
                            isDropdownVisible ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        style={{ top: '55px', zIndex: isDropdownVisible ? 20 : -1 }}
                    >
                        <ul className="text-16px font-medium leading-6 text-gray-60 px-5">
                            {options.map(option => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        className="w-full text-start focus:outline-none flex justify-start hover:bg-gray-200 py-4"
                                        onClick={() => handleOptionClick(option.value)}
                                        disabled={option.value === ''}
                                    >
                                        <p className='text-gray-60'>{option.label}</p>
                                        {type === "ticket" && (
                                            <>
                                                <p className='ml-2 text-[14px] text-primary-50'>예매가능</p>
                                                <p className='ml-auto text-[16px]'>{option.value === "신입생 티켓" ? "무료" : "5,000원"}</p>
                                            </>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default DropDownBox;