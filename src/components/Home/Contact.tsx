import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import Input from '@components/UI/Input/Input';

const variants: Variants = {
  inView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 24 },
  exit: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className='mb-32 flex flex-col items-start gap-y-4' id='contact'>
      <motion.h1
        className='font-neutralBold text-4xl'
        variants={variants}
        whileInView={'inView'}
        initial={'initial'}
        exit={'exit'}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Contact
      </motion.h1>
      <motion.div
        className='flex w-full flex-col items-center justify-center gap-y-4'
        variants={variants}
        whileInView={'inView'}
        initial={'initial'}
        exit={'exit'}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className='font-neutral text-base font-medium'>
          Send us a message
        </h2>
        <form className='flex w-full max-w-2xl flex-col gap-y-6'>
          <div className={clsx('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
            <Input type='text' placeholder='First Name' />
            <Input type='text' placeholder='Last Name' />
          </div>
          <div className={clsx('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
            <Input type='email' placeholder='Email' />
            <Input type='number' placeholder='Phone Number' />
          </div>
          <textarea
            cols={30}
            rows={10}
            placeholder='Message'
            className='rounded border border-slate-500/60 bg-custom-white-2 p-4 text-custom-black outline-none'
          />
          <button
            type='submit'
            className='mx-auto block w-fit rounded-md bg-custom-black px-16 py-2 font-semibold text-white shadow-md'
          >
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
}
