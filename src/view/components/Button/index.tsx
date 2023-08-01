import { ComponentProps } from 'react';
import { Spinner } from '../Spinner';
import { buttonClass, ButtonVariants } from './styles';

export interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  colorScheme,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={buttonClass({
        className,
        variant,
        colorScheme,
        disabled,
        size,
      })}
    >
      {!isLoading && children}
      {isLoading && <Spinner className='h-6 w-6' />}
    </button>
  );
}
