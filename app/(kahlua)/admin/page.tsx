'use client';
import AdminPageButton from '@/components/admin/adminPageButton';

const LEFT_COLUMN_ITEMS = [
  { name: '공연 예매 현황', url: '/admin/ticketing' },
  { name: '공연 생성하기', url: '/admin/performanceInfo' },
];

const RIGHT_COLUMN_ITEMS = [
  { name: '지원 현황', url: '/admin/applicant' },
  { name: '문자 전송', url: '/admin/message' },
  { name: '지원서 정보 관리', url: '/admin/recruitingInfo' },
  { name: '깔루아 멤버 정보 관리', url: '/admin/member' },
];

// 모바일 전용 순서
const MOBILE_ITEMS = [
  LEFT_COLUMN_ITEMS[0],
  RIGHT_COLUMN_ITEMS[0],
  RIGHT_COLUMN_ITEMS[1],
  LEFT_COLUMN_ITEMS[1],
  ...RIGHT_COLUMN_ITEMS.slice(2),
];

const page = () => {
  return (
    <div className="w-full h-auto min-h-[calc(100vh-390px)] flex flex-col mt-16 text-black font-pretendard items-center">
      {/* 헤더 영역 */}
      <Header />

      {/* PC 레이아웃 (≥1500px) */}
      <div className="hidden min-[1500px]:grid grid-cols-2 gap-10 w-full pad:w-[786px] dt:w-[1200px] mt-6 pad:mt-10">
        <div className="flex flex-col gap-7">
          {LEFT_COLUMN_ITEMS.map(({ name, url }) => (
            <AdminPageButton key={name} name={name} url={url} />
          ))}
        </div>
        <div className="flex flex-col gap-7">
          {RIGHT_COLUMN_ITEMS.map(({ name, url }) => (
            <AdminPageButton key={name} name={name} url={url} />
          ))}
        </div>
      </div>

      {/* 모바일 레이아웃 (<1500px) */}
      <div className="flex flex-col min-[1500px]:hidden w-full pad:px-6 ph:px-4 pad:w-[786px] gap-7 mt-6 pad:mt-10">
        {MOBILE_ITEMS.map(({ name, url }) => (
          <AdminPageButton key={name} name={name} url={url} />
        ))}
      </div>
    </div>
  );
};

const Header = () => (
  <div className="w-full h-[148px] pad:h-[260px] bg-gray-5 py-8 pad:py-16 flex flex-col justify-center items-center px-4">
    <div className="w-full pad:w-[786px] dt:w-[1200px] h-full flex flex-col gap-6">
      <p className="text-[36px] pad:text-[64px] font-semibold leading-none">
        Admin
      </p>
      <p className="text-[16px] pad:text-[24px] font-semibold">
        KAHLUA Admin Page
      </p>
    </div>
  </div>
);

export default page;
