import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

export default function ScrollTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={clsx(
        scrollPosition > window.innerHeight ? '' : 'translate-y-[999px]',
        'fixed bottom-[5%] right-[5%] mx-auto w-fit rounded-3xl bg-custom-black px-2 py-2 opacity-80 duration-500',
        'hover:-translate-y-1 hover:opacity-100'
      )}
      onClick={scrollTopHandler}
      type='button'
    >
      <MdArrowUpward className={clsx('text-2xl text-custom-white-2')} />
    </button>
  );
}
