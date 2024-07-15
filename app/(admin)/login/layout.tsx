import AdminHeader from '@/components/admin/AdminHeader';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <AdminHeader />
      {children}
    </div>
  );
};

export default layout;
