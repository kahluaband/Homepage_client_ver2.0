'use client';
import { useEffect, useState } from 'react';
import { Toggle } from '@/components/announcement/list/Toggle';
import { AnnouncementList } from '@/components/announcement/list/AnnouncementList';
import { CommunityList } from '@/components/announcement/list/CommunityList';
import { toggleList } from '@/components/announcement/list/dto';

const List = () => {
  const [toggle, setToggle] = useState(toggleList[0].toggle);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery('');
  }, [toggle]);

  return (
    <div className="flex flex-col mt-10 mx-4 pad:mx-auto pad:w-[786px] dt:w-[1200px]">
      {/* 토글 */}
      <Toggle
        toggle={toggle}
        onToggleChange={setToggle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 리스트 */}
      <section className="flex flex-col border-t-[1px] border-t-black border-b-[1px] border-b-black">
        {toggle === toggleList[0].toggle && (
          <AnnouncementList searchQuery={searchQuery} />
        )}
        {toggle === toggleList[1].toggle && (
          <CommunityList searchQuery={searchQuery} />
        )}
      </section>
    </div>
  );
};

export default List;
