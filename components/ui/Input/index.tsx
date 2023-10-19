import { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, disabled, ...props }) => {
  return (
    <input
      className={clsx(
        `flex  w-full  rounded-md  bg-[#1E1241] border-[#ffffff] border-2 px-3.5  py-3.5  text-[16px]  file:border-0  file:bg-transparent  file:text-sm  file:font-medium  placeholder:text-neutral-400  disabled:cursor-not-allowed  disabled:opacity-50 focus:outline-none mt-8`,
        disabled && 'opacity-75',
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
