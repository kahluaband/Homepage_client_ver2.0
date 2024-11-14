import { Input } from '../ui/InputBox';
import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const AdminInputBox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, children, ...props }, ref) => {
    return (
      <div className="flex flex-col pad:flex-row gap-2">
        <div className="flex items-center w-[160px] h-[30px] pad:h-12">
          {children}
        </div>
        <input
          className={`flex h-12 w-full rounded-xl border border-gray-15 px-4 py-3 text-[16px] font-normal focus:outline-none focus:border-primary-40 focus:outline-[1px] ${className}`}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

export default AdminInputBox;
