import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';

import s from './Input.module.scss';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, disabled, ...props }) => {
  return <input className={clsx(s.input, className)} disabled={disabled} {...props} />;
};

export default Input;
