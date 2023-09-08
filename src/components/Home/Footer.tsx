import clsx from 'clsx';

import Logo from '@components/UI/Svg/Logo';

export default function Footer() {
  return (
    <footer className='bg-custom-black py-8'>
      <section
        className={clsx(
          'layout grid grid-cols-1 gap-y-8 pb-12',
          'md:grid-cols-12 md:px-6 md:pb-16'
        )}
      >
        <Logo
          className='col-start-1 col-end-2 w-14 text-custom-white-2'
          fill='currentColor'
        />
        <div
          className={clsx(
            'flex flex-col gap-y-3 text-custom-white-2',
            'md:col-start-4 md:col-end-6',
            'lg:col-start-6 lg:col-end-7'
          )}
        >
          <h1 className='font-neutralBold'>Menu</h1>
          <div className='flex flex-col gap-y-1 text-sm'>
            <a href='#'>About Us</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>
        <div
          className={clsx(
            'flex flex-col gap-y-3 text-custom-white-2',
            'md:col-start-6 md:col-end-10',
            'lg:col-start-8 lg:col-end-11'
          )}
        >
          <h1 className='font-neutralBold'>Having Question?</h1>
          <div className='flex flex-col gap-y-1 text-sm'>
            <a href='#'>Return & Refund Policy</a>
            <a href='#'>Help & FAQs</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Term Of Service</a>
          </div>
        </div>
        <div
          className={clsx(
            'flex w-fit flex-col gap-y-3 text-custom-white-2',
            'md:col-start-10 md:col-end-13',
            'lg:col-start-11 lg:col-end-13'
          )}
        >
          <h1 className='font-neutralBold'>Get In Touch</h1>
          <div className='flex flex-col gap-y-1 text-sm'>
            <a href='#'>About Us</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>
      </section>
      <p className='w-full text-center text-custom-white-2'>
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}
