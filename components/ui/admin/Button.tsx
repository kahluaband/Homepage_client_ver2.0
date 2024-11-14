import React from 'react';

interface AdminButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AdminButton = React.forwardRef<HTMLButtonElement, AdminButtonProps>(
  (props, ref) => {
    const { type, ...rest } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className="w-full pad:w-[282px] h-[60px] bg-gray-10 rounded-[12px] text-gray-0 text-[18px] font-normal flex items-center justify-center"
      >
        {props.children}
      </button>
    );
  }
);

export default AdminButton;
