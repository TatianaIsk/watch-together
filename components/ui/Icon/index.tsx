import clsx from 'clsx';

import s from './Icon.module.scss';

export type IconsVariants = 'film' | 'youtube' | 'notebook' | 'cateye' | 'github' | 'telegram';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return <div className={clsx(s.icon, s[name], className)}></div>;
};

export default Icon;
