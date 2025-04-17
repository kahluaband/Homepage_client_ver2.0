'use client';

import { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@/public/image/admin/SearchIcon.svg';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const [isComposing, setIsComposing] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
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
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
