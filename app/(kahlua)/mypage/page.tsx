import UserProfile from '@/components/mypage/UserProfile';

interface reservationProps {
  date: string;
  time: string;
  status: string;
}

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

const page = () => {
  return (
    <div className="font-pretendard w-full flex mt-16">
      {/* 상단 프로필 섹션*/}
      <UserProfile />

      {/* 리스트 섹션 */}
    </div>
  );
};

export default page;
