'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import likeIcon from '@/public/image/grayHeart.svg';
import chatIcon from '@/public/image/grayChat.svg';
import blackSearch from '@/public/image/announcement/blackSearch.svg';
import blackPen from '@/public/image/announcement/blackPen.svg';

interface announcementProps {
  title: string;
  like: number;
  comment: number;
  date: string;
}

interface communityProps {
  title: string;
  like: number;
  comment: number;
  writer: string;
  date: string;
}

interface toggleProps {
  toggle: string;
}

const toggleList: Array<toggleProps> = [
  { toggle: '공지사항' },
  { toggle: '깔깔깔' },
];

// dummy data
const dummyAnnouncement: announcementProps[] = [
  {
    title: '2024년 크리스마스 공연',
    like: 20,
    comment: 6,
    date: '2024-11-15T00:00:00.000Z',
  },
  {
    title: '동방 예약 공지사항',
    like: 3,
    comment: 0,
    date: '2024-11-13T00:00:00.000Z',
  },
  {
    title: '크리스마스 공연 인원 모집',
    like: 12,
    comment: 18,
    date: '2024-10-31T00:00:00.000Z',
  },
  {
    title: '할로윈 파티 공지사항',
    like: 15,
    comment: 9,
    date: '2024-10-30T00:00:00.000Z',
  },
];

// dummy data
const dummyCommunity: communityProps[] = [
  {
    title: 'ㄱㄱㄱ',
    like: 10,
    comment: 5,
    writer: '심수연',
    date: '2024-11-14T00:00:00.000Z',
  },
  {
    title: '좋아',
    like: 20,
    comment: 3,
    writer: '임가현',
    date: '2024-11-03T00:00:00.000Z',
  },
  {
    title: '깔깔깔 어떰',
    like: 10,
    comment: 5,
    writer: '서가영',
    date: '2024-11-01T00:00:00.000Z',
  },
  {
    title: '깔브리타임 말고',
    like: 20,
    comment: 3,
    writer: '원채영',
    date: '2024-10-28T00:00:00.000Z',
  },
];

// 날짜 포맷 변환 함수
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// 공지사항 리스트
export const AnnouncementList = ({ searchQuery }: { searchQuery: string }) => {
  const filteredAnnouncements = dummyAnnouncement.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredAnnouncements.map((post, index) => (
          <li
            key={index}
            className="flex flex-col pad:flex-row py-6 items-start gap-4 self-stretch relative border-y-[1px] border-y-solid border-y-gray-10 justify-between"
          >
            <p className="text-[20px] leading-6 cursor-pointer">{post.title}</p>

            <div className="flex gap-6 pad:gap-10 text-gray-40">
              <div className="flex gap-3 pad:gap-6">
                <div className="flex gap-[10px]">
                  <Image src={likeIcon} alt="like" width={14} height={14} />
                  <p>{post.like}</p>
                </div>
                <div className="flex gap-[10px]">
                  <Image src={chatIcon} alt="chat" width={18} height={18} />
                  <p>{post.comment}</p>
                </div>
              </div>
              <p>{formatDate(post.date)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 깔깔깔 리스트
export const CommunityList = ({ searchQuery }: { searchQuery: string }) => {
  const filteredCommunity = dummyCommunity.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredCommunity.map((post, index) => (
          <li
            key={index}
            className="flex flex-col pad:flex-row py-6 items-start gap-4 self-stretch relative border-y-[1px] border-y-solid border-y-gray-10 justify-between"
          >
            <p className="text-[20px] leading-6 cursor-pointer">{post.title}</p>

            <div className="flex gap-6 pad:gap-10 text-gray-40">
              <div className="flex gap-3 pad:gap-6">
                <div className="flex gap-[10px]">
                  <Image src={likeIcon} alt="like" width={14} height={14} />
                  <p>{post.like}</p>
                </div>
                <div className="flex gap-[10px]">
                  <Image src={chatIcon} alt="chat" width={18} height={18} />
                  <p>{post.comment}</p>
                </div>
              </div>
              <p>{post.writer}</p>
              <p>{formatDate(post.date)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const List = () => {
  const [toggle, setToggle] = useState('공지사항');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleHandler = (toggleItem: string) => {
    setToggle(toggleItem);
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col mt-10 mx-4 pad:mx-auto pad:w-[786px] dt:w-[1200px]">
      {/* 카테고리 토글 */}
      <section className="flex flex-col gap-6 pad:flex-row pad:gap-0 mb-6 text-2xl font-semibold justify-between">
        <ul className="flex gap-6">
          {toggleList.map((category) => {
            return (
              <li
                key={category.toggle}
                onClick={() => {
                  toggleHandler(category.toggle);
                }}
                className={`cursor-pointer ${toggle === category.toggle ? 'text-black' : 'text-gray-40'}`}
              >
                {category.toggle}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between gap-5">
          <div className="relative flex-1">
            <input
              placeholder="게시글 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`relative w-full pad:w-[200px] ${toggle === '깔깔깔' ? 'h-[32px]' : 'h-[38px]'} pad:h-[38px] border-[1px] text-[16px] pad:text-[20px] font-[500] border-black rounded-[8px] focus:outline-none pl-3 pr-9 py-1`}
            />
            <Image
              src={blackSearch}
              alt="search"
              width={24}
              height={24}
              className="absolute top-[6px] right-[12px] cursor-pointer"
            />
          </div>
          {toggle === '깔깔깔' && (
            <div
              onClick={() => router.push('/announcement/posting')}
              className="h-[38px] border-[1px] border-black rounded-[8px] px-3 py-1 flex gap-5 items-center cursor-pointer"
            >
              <span className="hidden pad:block text-gray-40 text-[20px] font-[500]">
                글쓰기
              </span>
              <Image src={blackPen} alt="pen" width={24} height={24} />
            </div>
          )}
        </div>
      </section>

      {/* 리스트 */}
      <section className="flex flex-col border-t-[1px] border-t-black border-b-[1px] border-b-black">
        {toggle === '공지사항' && (
          <AnnouncementList searchQuery={searchQuery} />
        )}
        {toggle === '깔깔깔' && <CommunityList searchQuery={searchQuery} />}
      </section>
    </div>
  );
};

export default List;
