import Image from 'next/image';
import likeIcon from '@/public/image/grayHeart.svg';
import chatIcon from '@/public/image/grayChat.svg';
import { formatDate } from '@/components/util/formatDate';
import { CommunityProps } from '@/components/announcement/list/dto';

const dummyCommunity: CommunityProps[] = [
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
