import { XCircle } from 'lucide-react';
import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

interface CheckboxProps {
  name: string;
  error?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const checkboxVariants = tv({
  base: 'h-4 w-4 rounded border-primary-500 bg-transparent text-primary-500 ring-offset-white transition-all checked:bg-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-primary-600 dark:ring-offset-black dark:checked:bg-primary-600 ',
  variants: {
    invalid: {
      true: 'border-red-500 text-red-900 checked:bg-red-900 focus:ring-red-900',
    },
  },
});

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;
    return (
      <div className='relative'>
        <div className='flex flex-row items-center gap-2'>
          <input
            {...props}
            ref={ref}
            name={name}
            id={inputId}
            type='checkbox'
            className={checkboxVariants({
              className,
              invalid: Boolean(error),
            })}
          />
          <label
            htmlFor={name}
            className='cursor-pointer text-sm text-gray-700'
          >
            {children}
          </label>
        </div>

        {error && (
          <div className='my-2 flex items-center gap-2 text-red-900'>
            <XCircle />
            <span className='text-xs'>{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
