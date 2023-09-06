import clsx from 'clsx';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id?: string;
}

export default function Input({ label, type, id, ...props }: IInputProps) {
  return (
    <div className='flex flex-col items-start gap-y-2'>
      <label
        htmlFor={id}
        className={clsx('text-xs font-normal text-custom-black', 'md:text-sm')}
      >
        {label}
      </label>
      <input
        type={type}
        {...props}
        id={id}
        className={clsx(
          'w-full border-b border-b-slate-500/60 p-2 text-custom-black outline-none',
          'placeholder:text-sm'
        )}
      />
    </div>
  );
}
