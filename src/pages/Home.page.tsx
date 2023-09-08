import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';

import About from '@components/Home/About';
import Catalogue from '@components/Home/Catalogue';
import Contact from '@components/Home/Contact';
import Hero from '@components/Home/Hero';

const variants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: 0 },
};

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.05,
          smoothWheel: true,
        },
      });
    })();
  }, []);

  return (
    <motion.section
      className='col-start-1 col-end-13 flex flex-col gap-y-14'
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Hero />
      <About />
      <Catalogue />
      <Contact />
    </motion.section>
  );
}
