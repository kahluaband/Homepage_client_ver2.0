import Image from 'next/image';
import profileImg from '@/public/image/mypage/profile.png';

interface userProps {
  name: string;
  generation: number;
  session: string;
}

const dummyUser: userProps = {
  name: '홍길동',
  generation: 20,
  session: '보컬',
};

const UserProfile = () => {
  return (
    <section className="w-full h-[260px] bg-gray-5 py-16 px-6 pad:px-[150px] dt:px-[360px] flex gap-8 justify-between">
      <div className="flex pad:flex-row ph:flex-col w-full justify-between items-start self-stretch">
        <h1 className="text-gary-90 pad:text-[64px] ph:text-[36px] font-semibold leading-[64px]">
          My Page
        </h1>
        <div className="flex justify-end items-end pad:self-stretch gap-2 font-semibold">
          <p className="text-gray-90 text-2xl">{dummyUser.name}</p>
          <div className="flex text-primary-50 text-[22px] gap-1">
            <p>{dummyUser.generation}기</p>
            <p>{dummyUser.session}</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={profileImg}
          alt="default-profile"
          width={174}
          height={174}
        />
      </div>
    </section>
  );
};

export default UserProfile;
