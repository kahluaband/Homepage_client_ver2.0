'use client';

import Header from '@/components/admin/Header';
import MessageTable from '@/components/admin/message/MessageTable';

const MessagePage = () => {
  return (
    <div className="w-full h-auto min-h-[calc(100vh-390px)] flex flex-col mt-16 text-black font-pretendard items-center">
      <Header />
      <MessageTable />
    </div>
  );
};

export default MessagePage;
