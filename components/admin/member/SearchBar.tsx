'use client';

import { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@/public/image/admin/SearchIcon.svg';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleSearch = () => {
    if (!inputValue.trim()) return;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isComposing) return;
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-[403px] h-[62px] border-[2px] border-black rounded-[30px] pl-[25px] ">
      <input
        placeholder="이름 검색"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        className="outline-none flex-1 bg-transparent text-2xl font-semibold"
      />
      <Image
        src={SearchIcon}
        width={25}
        height={25}
        alt="검색"
        className="h-[25px] w-auto cursor-pointer mx-[22px]"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
