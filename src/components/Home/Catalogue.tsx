import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import Card from '@components/UI/Card/Card';

import { catalogueData } from '@utils/catalogueData';

const variants: Variants = {
  inView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 24 },
  exit: { opacity: 1, y: 0 },
};

export default function Catalogue() {
  return (
    <section className='flex flex-col items-start gap-y-4' id='catalogue'>
      <motion.h1
        className='font-neutralBold text-4xl'
        variants={variants}
        whileInView={'inView'}
        initial={'initial'}
        exit={'exit'}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Catalogue
      </motion.h1>
      <ul className='grid grid-cols-1 gap-[0.65rem] md:grid-cols-12 md:grid-rows-[7]'>
        {catalogueData.map((item, index) => (
          <motion.li
            key={item.id}
            className={clsx(
              index === 0 &&
                'md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-5',
              index === 1 &&
                'md:col-start-8 md:col-end-13 md:row-start-1 md:row-end-4',
              index === 2 &&
                'md:col-start-6 md:col-end-13 md:row-start-5 md:row-end-6',
              index === 3 &&
                'md:col-start-1 md:col-end-6 md:row-start-5 md:row-end-6'
            )}
            variants={variants}
            whileInView={'inView'}
            initial={'initial'}
            exit={'exit'}
            transition={{ duration: 0.7, delay: index * 0.5 }}
          >
            <Card
              name={item.name}
              description={item.description}
              price={item.price}
              src={item.image}
              alt={item.name}
              figureClassName='overflow-hidden w-full h-full rounded-xl'
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
