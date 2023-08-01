import { XCircle } from 'lucide-react';
import { ComponentProps, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
  isInvalid?: boolean;
}

const inputVariants = tv({
  slots: {
    label:
      'pointer-events-none absolute left-[13px] top-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base dark:text-gray-500',
    input:
      'peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-primary-800 focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 dark:border-gray-900 dark:bg-black dark:text-gray-200 dark:ring-offset-black dark:focus:border-primary-300 dark:focus:ring-primary-300',
  },
  variants: {
    invalid: {
      true: {
        input: 'border-red-900 focus:border-red-900',
        label: 'text-red-900',
      },
    },
  },
});

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, isInvalid, ...props }, ref) => {
    const inputId = id ?? name;
    const { input, label } = inputVariants({
      invalid: isInvalid || Boolean(error),
    });

    return (
      <div className='relative'>
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          placeholder=' '
          className={input({ className })}
        />

        <label
          htmlFor={inputId}
          className={label()}
        >
          {placeholder}
        </label>

        {error && (
          <div className='my-1 flex items-center gap-2 text-red-900'>
            <XCircle />
            <span className='text-xs'>{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
