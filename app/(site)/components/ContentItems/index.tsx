import { motion, useInView } from 'framer-motion';
import Items from './Items';
import { container, item } from '@/constants/animation';
import { useRef } from 'react';

const ContentItems = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div variants={container} initial='hidden' animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <motion.div variants={item}>
        <Items icon='film'>Смотрите фильмы и сериалы вместе на расстоянии</Items>
      </motion.div>
      <motion.div variants={item}>
        <Items icon='youtube'>Смотрите Youtube вместе на расстоянии</Items>
      </motion.div>
      <motion.div variants={item}>
        <Items icon='notebook'>Смотрите видео-файлы с вашего устройства</Items>
      </motion.div>
    </motion.div>
  );
};

export default ContentItems;
