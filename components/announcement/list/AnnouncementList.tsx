import Image from 'next/image';
import { formatDate } from '@/components/util/formatDate';
import { AnnouncementProps } from '@/components/announcement/list/dto';
import likeIcon from '@/public/image/grayHeart.svg';
import chatIcon from '@/public/image/grayChat.svg';

const dummyAnnouncement: AnnouncementProps[] = [
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
