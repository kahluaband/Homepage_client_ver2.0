import { Banner } from '@/components/announcement/Banner';
import { List } from '@/components/announcement/List';

const page = () => {
  return (
    <div className="font-pretendard w-full flex-col mt-24">
      <Banner />
      <List />
    </div>
  );
};

export default page;
