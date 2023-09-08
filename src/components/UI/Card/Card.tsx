import Image, { IImageProps } from '../Image/Image';

interface ICardProps extends IImageProps {
  children?: React.ReactNode;
  name: string;
  description: string;
  price: number;
}

export default function Card({
  src,
  alt,
  name,
  description,
  price,
  ...props
}: ICardProps) {
  return (
    <section className='flex flex-col items-start gap-y-2'>
      <Image src={src} alt={alt} {...props} />
      <div className='flex flex-col gap-y-1'>
        <div className='flex flex-row items-center gap-x-8'>
          <h3 className='font-neutral text-sm font-bold text-custom-black'>
            {name}
          </h3>
          <p className='text-sm'>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(price)}
          </p>
        </div>
        <p className='w-48 text-sm'>{description}.</p>
      </div>
    </section>
  );
}
