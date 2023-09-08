import clsx from 'clsx';
import { motion, MotionProps } from 'framer-motion';

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  imageClassName?: string;
  figureClassName?: string;
  onMotion?: MotionProps;
}

export default function Image({
  src,
  alt,
  imageClassName,
  figureClassName,
  onMotion,
  ...props
}: IImageProps) {
  return (
    <motion.figure {...onMotion} className={clsx(figureClassName, 'w-full')}>
      <img
        src={src}
        alt={alt}
        {...props}
        className={imageClassName}
        loading='lazy'
      />
    </motion.figure>
  );
}
