import * as React from 'react';

export interface CancelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CancelButton = React.forwardRef<HTMLButtonElement, CancelButtonProps>(
  (props, ref) => {
    const { className, type, ...rest } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={`flex h-[59px] w-full pad:w-[180px] rounded-b-3xl pad:rounded-xl justify-center pad:px-14 py-4 font-normal leading-6 text-[18px] text-gray-0 bg-danger-40 ${className}`}
      >
        {props.children}
      </button>
    );
  }
);

CancelButton.displayName = 'CancelButton';

export { CancelButton };
