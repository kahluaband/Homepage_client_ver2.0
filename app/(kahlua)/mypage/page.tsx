import UserProfile from '@/components/mypage/UserProfile';
import List from '@/components/mypage/List';

const page = () => {
  return (
    <div className="font-pretendard w-full flex-col mt-16">
      {/* 상단 프로필 섹션*/}
      <UserProfile />

      {/* 리스트 섹션 */}
      <List />
    </div>
  );
};

export default page;
