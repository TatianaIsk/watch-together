import { IconsVariants } from '@/components/ui/Icon';
import Items from './Items';

export type ItemType = {
  icon: IconsVariants;
  text: string;
};

const items: ItemType[] = [
  {
    icon: 'film',
    text: 'Смотрите фильмы и сериалы вместе на расстоянии',
  },
  {
    icon: 'youtube',
    text: 'Смотрите Youtube вместе на расстоянии',
  },
  {
    icon: 'notebook',
    text: 'Смотрите видео-файлы с вашего устройства',
  },
];

const ContentItems = () => items.map(item => <Items key={item.icon} {...item} />);

export default ContentItems;
