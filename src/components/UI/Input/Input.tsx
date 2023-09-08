import clsx from 'clsx';
import { PiEyeBold, PiEyeSlashBold } from 'react-icons/pi';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  id?: string;
  isPassword?: boolean;
  isPasswordView?: boolean;
  onPasswordView?: () => void;
}

export default function Input({
  label,
  type,
  id,
  isPassword,
  isPasswordView,
  onPasswordView,
  ...props
}: IInputProps) {
  return (
    <div className='flex flex-col items-start gap-y-2'>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'text-xs font-normal text-custom-black',
            'md:text-sm'
          )}
        >
          {label}
        </label>
      )}
      <div className='flex w-full flex-row items-center justify-between border-b border-b-slate-500/60 bg-custom-white-2'>
        <input
          type={isPasswordView ? 'text' : type}
          {...props}
          id={id}
          className={clsx(
            'w-full bg-custom-white-2 p-2 text-custom-black outline-none',
            'placeholder:text-sm'
          )}
        />
        {isPassword && (
          <button onClick={onPasswordView} type='button'>
            {isPasswordView ? (
              <PiEyeBold className='h-5 w-5 text-custom-black' />
            ) : (
              <PiEyeSlashBold className='h-5 w-5 text-custom-black' />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
