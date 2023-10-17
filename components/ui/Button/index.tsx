import { PropsWithChildren, ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconsVariants } from '../Icon';

interface ButtonProps extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
  className?: string;
  icon?: IconsVariants;
}

const Button: React.FC<ButtonProps> = ({ className, children, icon, ...props }) => (
  <button
    className={twMerge(
      `w-full rounded-[8px] border-solid border-[#E0E29E] border-opacity-50 px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-[#E0E29E] font-bold hover:border-opacity-100 hover:opacity-75 transition`,
      className
    )}
    {...props}
  >
    {children}
    {icon}
  </button>
);

export default Button;
