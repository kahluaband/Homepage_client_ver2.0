'use client';

import { useState, useEffect, useMemo } from 'react';
import { authInstance } from '@/api/auth/axios';
import SearchBar from '../SearchBar';
import Table from './Table';

interface TableSectionProps {
  isWaiting: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setWaitingCount: React.Dispatch<React.SetStateAction<number>>;
  setCompletedCount: React.Dispatch<React.SetStateAction<number>>;
}

const TableSection = ({
  isWaiting,
  currentPage,
  setCurrentPage,
  setWaitingCount,
  setCompletedCount,
}: TableSectionProps) => {
  const [members, setMembers] = useState<any[]>([]);
  const [allMembers, setAllMembers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  const pageSize = 8;

  const fetchPageMembers = async () => {
    try {
      const response = await authInstance.get('/admin/users', {
        params: {
          approvalFilter: isWaiting ? 'PENDING' : 'ALL',
          page: currentPage,
          size: pageSize,
        },
      });
      const { content, pageInfo, pendingCount, approvedCount } =
        response.data.result;
      setMembers(content);
      setTotalPages(pageInfo.totalPages);
      setWaitingCount(pendingCount);
      setCompletedCount(approvedCount);
    } catch (error) {
      console.error('멤버 데이터 불러오기 실패:', error);
    }
  };

  const fetchAllMembers = async () => {
    try {
      const response = await authInstance.get('/admin/users', {
        params: {
          approvalFilter: isWaiting ? 'PENDING' : 'ALL',
          page: 0,
          size: 9999,
        },
      });
      const { content } = response.data.result;
      setAllMembers(content);
    } catch (error) {
      console.error('전체 멤버 데이터 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    if (!isSearching && searchQuery === '') {
      fetchPageMembers();
    }
  }, [currentPage, isWaiting]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      if (!isSearching) {
        fetchAllMembers();
        setIsSearching(true);
        setCurrentPage(0);
      }
    } else {
      if (isSearching) {
        setIsSearching(false);
        setCurrentPage(0);
      }
    }
  }, [searchQuery]);

  const displayedMembers = useMemo(() => {
    if (isSearching) {
      const filtered = allMembers.filter((member) =>
        member.name.includes(searchQuery)
      );
      const start = currentPage * pageSize;
      const end = start + pageSize;
      return filtered.slice(start, end);
    } else {
      return members;
    }
  }, [isSearching, searchQuery, allMembers, members, currentPage]);

  useEffect(() => {
    if (isSearching) {
      const filtered = allMembers.filter((member) =>
        member.name.includes(searchQuery)
      );
      setTotalPages(Math.ceil(filtered.length / pageSize));
    }
  }, [searchQuery, allMembers]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(0);
  };

  return (
    <>
      <div className="flex self-end max-dt:mt-10 max-pad:mt-6">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
        />
      </div>

      <div className="w-full mt-5 max-dt:mt-[35px] max-pad:mt-4">
        <Table
          isWaiting={isWaiting}
          searchQuery={searchQuery}
          members={displayedMembers}
          setMembers={setMembers}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default TableSection;
