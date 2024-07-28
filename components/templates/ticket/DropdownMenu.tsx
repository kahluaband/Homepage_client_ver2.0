'use client'
import DropDownBox from '@/components/ui/DropDownBox';
import { useState, useEffect, useRef } from 'react';

interface TicketOptionProps {
  isDays: boolean;
}

const DropdownMenu = ({ isDays }: TicketOptionProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState(isDays);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActive(isDays);
  }, [isDays]);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="fixed pad:hidden w-screen bg-gray-0 bottom-0 z-50 min-h-[98px] ">
      <div
        className={`absolute mx-auto w-full bg-gray-0 transition-all duration-300 ease-out ${
          dropdownOpen ? 'translate-y-0 opacity-100 max-h-[238px] p-4 rounded-t-3xl border-t border-gray-15' : 'translate-y-[100%] opacity-0 max-h-0 p-0'
        }`}
        style={{ overflow: 'hidden', bottom: '100%' }}
      >
        <div className="h-[320px] gap-4 w-full flex flex-col items-center">
            <DropDownBox type="date" />
            <DropDownBox type="ticket" />
        </div>
      </div>

      <div
        onClick={toggleDropdown}
        className={`relative z-10 w-[328px] h-[52px] flex flex-shrink-0 text-center justify-center items-center mt-4 mx-auto rounded-xl text-[18px] font-medium cursor-pointer
            ${active ? "text-gray-0 bg-primary-50" : "text-gray-40 bg-gray-10"}
        `}
      >
        예매하기
      </div>
    </div>
  );
};

export default DropdownMenu;
