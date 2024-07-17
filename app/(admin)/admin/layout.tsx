import AdminHeader from '@/components/admin/AdminHeader';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};

export default layout;
