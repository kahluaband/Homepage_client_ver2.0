'use client';
import likeIcon from '@/public/image/mypage/grayHeart.svg';
import chatIcon from '@/public/image/mypage/grayChat.svg';
import Image from 'next/image';
import { useState } from 'react';

interface reservationProps {
  date: string;
  time: string;
  status: string;
}

interface myPostProps {
  title: string;
  like: number;
  comment: number;
  date: string;
}

interface toggleProps {
  toggle: string;
}

const toggleList: Array<toggleProps> = [
  { toggle: '동방 예약 확인' },
  { toggle: '내가 쓴 글' },
];

// dummy data
const dummyReservation: reservationProps[] = [
  {
    date: '2024.10.30 (수)',
    time: '20:00 - 21:30',
    status: '개인 : 홍길동',
  },
  {
    date: '2024.10.31 (목)',
    time: '20:00 - 22:00',
    status: '팀 : OB1팀',
  },
];
// dummy data
const dummyMyPost: myPostProps[] = [
  {
    title: '제목1제목1제목1제목1제목1제목1제목1',
    like: 10,
    comment: 5,
    date: '2024.10.30',
  },
  {
    title: '제목2',
    like: 20,
    comment: 3,
    date: '2024.10.31',
  },
  {
    title: '제목3',
    like: 30,
    comment: 2,
    date: '2024.11.01',
  },
  {
    title: '제목4',
    like: 40,
    comment: 1,
    date: '2024.11.02',
  },
];

// 카테고리 토글
export const CategoryToggle = (props: {
  toggleHandler: (arg0: string) => void;
  toggle: string;
}) => {
  return (
    <section className="flex mb-6 text-2xl font-semibold">
      <ul className="flex gap-6">
        {toggleList.map((category) => {
          return (
            <li
              key={category.toggle}
              onClick={() => {
                props.toggleHandler(category.toggle);
              }}
              className={`cursor-pointer ${props.toggle === category.toggle ? 'text-black' : 'text-gray-40'}`}
            >
              {category.toggle}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// 동방 예약 내역 리스트
export const ReservationList = () => {
  return (
    <div>
      <ul>
        {dummyReservation.map((reservation) => {
          return (
            // li 태그 스타일 코드는 그대로 쓰셔도 됩니다.
            <li className="flex flex-col pad:flex-row py-6 pad:items-center ph:items-start gap-4 self-stretch relative border-y-[1px] border-y-solid border-y-gray-10">
              <div className="flex gap-4">
                <p className="text-black text-xl font-semibold">
                  {reservation.date}
                </p>
                <p className="text-black text-xl font-semibold">
                  {reservation.time}
                </p>
              </div>
              <div className="flex py-1 px-2 justify-center items-center gap-[10px] rounded-full border-[1px] border-solid border-primary-50">
                <p className="flex items-center text-primary-50 text-base font-normal">
                  {reservation.status}
                </p>
              </div>
              <p className="flex items-center text-danger-40 text-base font-normal absolute right-0 bottom-6 pad:top-6 cursor-pointer">
                예약 취소하기
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// 내가 쓴 글 리스트
export const MyPostList = () => {
  return (
    <div>
      <ul>
        {dummyMyPost.map((post) => {
          return (
            // li 태그 스타일 코드는 그대로 쓰셔도 됩니다.
            <li className="flex flex-col pad:flex-row py-6 items-start gap-4 self-stretch relative border-y-[1px] border-y-solid border-y-gray-10 justify-between">
              <p className="text-[20px] leading-6">{post.title}</p>

              <div className="flex gap-10 text-gray-40">
                <div className="flex gap-6">
                  <div className="flex gap-[10px]">
                    <Image src={likeIcon} alt="like" width={14} height={14} />
                    <p>{post.like}</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <Image src={chatIcon} alt="chat" width={18} height={18} />
                    <p>{post.comment}</p>
                  </div>
                </div>
                <p>{post.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const List = () => {
  const [toggle, setToggle] = useState('동방 예약 확인');

  const toggleHandler = (toggleItem: string) => {
    setToggle(toggleItem);
  };

  return (
    <div className="flex flex-col mt-6 pad:mt-10 mx-4 pad:mx-6 dt:mx-[150px]">
      {/* 카테고리 토글 */}
      <CategoryToggle toggle={toggle} toggleHandler={toggleHandler} />

      {/* 리스트 */}
      <section className="flex flex-col border-t-[1px] border-t-black border-b-[1px] border-b-black">
        {toggle === toggleList[0].toggle && <ReservationList />}
        {toggle === toggleList[1].toggle && <MyPostList />}
      </section>
    </div>
  );
};

export default List;
