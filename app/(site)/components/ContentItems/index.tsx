import Items from './Items';

const items = [
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

const ContentItems = () => {
  return items.map(item => <Items key={item.icon} {...item} />);
};

export default ContentItems;