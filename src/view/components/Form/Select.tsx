import { XCircle } from 'lucide-react';
import { ComponentProps, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

interface SelectProps extends ComponentProps<'select'> {
  name: string;
  error?: string;
  isInvalid?: boolean;
}

const selectVariants = tv({
  slots: {
    label:
      'pointer-events-none absolute left-[13px] top-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base dark:text-gray-500',
    select:
      'peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-primary-800 focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 dark:border-gray-900 dark:bg-black dark:text-gray-200 dark:ring-offset-black dark:focus:border-primary-300 dark:focus:ring-primary-300',
  },
  variants: {
    invalid: {
      true: {
        select: 'border-red-900 focus:border-red-900',
        label: 'text-red-900',
      },
    },
  },
});

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { placeholder, name, id, error, className, isInvalid, children, ...props },
    ref,
  ) => {
    const selectId = id ?? name;
    const { select, label } = selectVariants({
      invalid: isInvalid || Boolean(error),
    });

    return (
      <div className='relative'>
        <select
          {...props}
          ref={ref}
          name={name}
          id={selectId}
          placeholder=' '
          className={select({ className })}
        >
          {children}
        </select>

        <label
          htmlFor={selectId}
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

Select.displayName = 'Select';
