import { Banner } from '@/components/announcement/list/Banner';
import List from '@/components/announcement/list/List';

const page = () => {
  return (
    <div className="font-pretendard w-full flex-col mt-24">
      <Banner />
      <List />
    </div>
  );
};

export default page;
