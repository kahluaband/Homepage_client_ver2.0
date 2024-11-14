import AdminInputBox from '@/components/admin/AdminInputBox';
import Banner from '@/components/ui/Banner';

const page = () => {
  return (
    <div className="font-pretendard mx-auto w-full pad:w-[786px] dt:w-[1200px] h-auto flex flex-col">
      <Banner>공연 정보 수정</Banner>
      <AdminInputBox
        className=""
        type="text"
        value={'performance'}
        placeholder="예) 홍길동"
      >
        공연 제목
      </AdminInputBox>
    </div>
  );
};

export default page;
