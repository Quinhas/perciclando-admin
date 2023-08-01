import { VariantProps, tv } from 'tailwind-variants';

export const buttonClass = tv({
  base: 'flex w-full items-center justify-center rounded-lg px-6 text-center font-semibold transition-all',
  variants: {
    colorScheme: {
      primary: '',
      gray: '',
      blue: '',
      red: '',
      green: '',
    },
    variant: {
      solid: '',
      outline: '',
      ghost: '',
      link: '',
    },
    disabled: {
      true: 'pointer-events-none cursor-not-allowed opacity-50',
    },
    size: {
      sm: 'h-10 px-3',
      md: 'h-12 px-6',
      lg: 'h-14 px-8',
      xl: 'h-16 px-10',
    },
  },
  compoundVariants: [
    {
      colorScheme: 'primary',
      variant: 'solid',
      className:
        'bg-primary-500 text-gray-50 hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-300 dark:text-gray-950 dark:hover:bg-primary-400 dark:active:bg-primary-500',
    },
    {
      colorScheme: 'primary',
      variant: 'outline',
      className:
        'border border-primary-500 bg-transparent text-primary-500 hover:border-primary-600 hover:bg-primary-500/10 hover:text-primary-600 active:border-primary-700 active:bg-primary-500/20 active:text-primary-700 dark:border-primary-300 dark:text-primary-300 dark:hover:border-primary-400 dark:hover:bg-primary-300/10 dark:hover:text-primary-400 dark:active:border-primary-500 dark:active:bg-primary-300/20 dark:active:text-primary-500',
    },
    {
      colorScheme: 'primary',
      variant: 'ghost',
      className:
        'text-center text-primary-500 hover:bg-primary-500/10 hover:text-primary-600 active:bg-primary-500/20 active:text-primary-700 dark:text-primary-300  dark:hover:bg-primary-300/10 dark:hover:text-primary-400 dark:active:bg-primary-300/20 dark:active:text-primary-500',
    },
    {
      colorScheme: 'primary',
      variant: 'link',
      className:
        'inline-flex h-auto p-0 text-center text-primary-500 hover:text-primary-600 active:text-primary-700 dark:text-primary-300 dark:hover:text-primary-400 dark:active:text-primary-700',
    },
    {
      colorScheme: 'gray',
      variant: 'solid',
      className:
        'bg-gray-500 text-gray-50 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-300 dark:text-gray-950 dark:hover:bg-gray-400 dark:active:bg-gray-500',
    },
    {
      colorScheme: 'gray',
      variant: 'outline',
      className:
        'border border-gray-500 bg-transparent text-gray-500 hover:border-gray-600 hover:bg-gray-500/10 hover:text-gray-600 active:border-gray-700 active:bg-gray-500/20 active:text-gray-700 dark:border-gray-300 dark:text-gray-300 dark:hover:border-gray-400 dark:hover:bg-gray-300/10 dark:hover:text-gray-400 dark:active:border-gray-500 dark:active:bg-gray-300/20 dark:active:text-gray-500',
    },
    {
      colorScheme: 'gray',
      variant: 'ghost',
      className:
        'text-center text-gray-500 hover:bg-gray-500/10 hover:text-gray-600 active:bg-gray-500/20 active:text-gray-700 dark:text-gray-300  dark:hover:bg-gray-300/10 dark:hover:text-gray-400 dark:active:bg-gray-300/20 dark:active:text-gray-500',
    },
    {
      colorScheme: 'gray',
      variant: 'link',
      className:
        'inline-flex h-auto p-0 text-center text-gray-500 hover:text-gray-600 active:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 dark:active:text-gray-700',
    },
    {
      colorScheme: 'blue',
      variant: 'solid',
      className:
        'bg-blue-500 text-blue-50 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-300 dark:text-blue-950 dark:hover:bg-blue-400 dark:active:bg-blue-500',
    },
    {
      colorScheme: 'blue',
      variant: 'outline',
      className:
        'border border-blue-500 bg-transparent text-blue-500 hover:border-blue-600 hover:bg-blue-500/10 hover:text-blue-600 active:border-blue-700 active:bg-blue-500/20 active:text-blue-700 dark:border-blue-300 dark:text-blue-300 dark:hover:border-blue-400 dark:hover:bg-blue-300/10 dark:hover:text-blue-400 dark:active:border-blue-500 dark:active:bg-blue-300/20 dark:active:text-blue-500',
    },
    {
      colorScheme: 'blue',
      variant: 'ghost',
      className:
        'text-center text-blue-500 hover:bg-blue-500/10 hover:text-blue-600 active:bg-blue-500/20 active:text-blue-700 dark:text-blue-300  dark:hover:bg-blue-300/10 dark:hover:text-blue-400 dark:active:bg-blue-300/20 dark:active:text-blue-500',
    },
    {
      colorScheme: 'blue',
      variant: 'link',
      className:
        'inline-flex h-auto p-0 text-center text-blue-500 hover:text-blue-600 active:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400 dark:active:text-blue-700',
    },
    {
      colorScheme: 'red',
      variant: 'solid',
      className:
        'bg-red-500 text-red-50 hover:bg-red-600 active:bg-red-700 dark:bg-red-300 dark:text-red-950 dark:hover:bg-red-400 dark:active:bg-red-500',
    },
    {
      colorScheme: 'red',
      variant: 'outline',
      className:
        'border border-red-500 bg-transparent text-red-500 hover:border-red-600 hover:bg-red-500/10 hover:text-red-600 active:border-red-700 active:bg-red-500/20 active:text-red-700 dark:border-red-300 dark:text-red-300 dark:hover:border-red-400 dark:hover:bg-red-300/10 dark:hover:text-red-400 dark:active:border-red-500 dark:active:bg-red-300/20 dark:active:text-red-500',
    },
    {
      colorScheme: 'red',
      variant: 'ghost',
      className:
        'text-center text-red-500 hover:bg-red-500/10 hover:text-red-600 active:bg-red-500/20 active:text-red-700 dark:text-red-300  dark:hover:bg-red-300/10 dark:hover:text-red-400 dark:active:bg-red-300/20 dark:active:text-red-500',
    },
    {
      colorScheme: 'red',
      variant: 'link',
      className:
        'inline-flex h-auto p-0 text-center text-red-500 hover:text-red-600 active:text-red-700 dark:text-red-300 dark:hover:text-red-400 dark:active:text-red-700',
    },
    {
      colorScheme: 'green',
      variant: 'solid',
      className:
        'bg-green-500 text-green-50 hover:bg-green-600 active:bg-green-700 dark:bg-green-300 dark:text-green-950 dark:hover:bg-green-400 dark:active:bg-green-500',
    },
    {
      colorScheme: 'green',
      variant: 'outline',
      className:
        'border border-green-500 bg-transparent text-green-500 hover:border-green-600 hover:bg-green-500/10 hover:text-green-600 active:border-green-700 active:bg-green-500/20 active:text-green-700 dark:border-green-300 dark:text-green-300 dark:hover:border-green-400 dark:hover:bg-green-300/10 dark:hover:text-green-400 dark:active:border-green-500 dark:active:bg-green-300/20 dark:active:text-green-500',
    },
    {
      colorScheme: 'green',
      variant: 'ghost',
      className:
        'text-center text-green-500 hover:bg-green-500/10 hover:text-green-600 active:bg-green-500/20 active:text-green-700 dark:text-green-300  dark:hover:bg-green-300/10 dark:hover:text-green-400 dark:active:bg-green-300/20 dark:active:text-green-500',
    },
    {
      colorScheme: 'green',
      variant: 'link',
      className:
        'inline-flex h-auto p-0 text-center text-green-500 hover:text-green-600 active:text-green-700 dark:text-green-300 dark:hover:text-green-400 dark:active:text-green-700',
    },
    {
      variant: 'solid',
      disabled: true,
      className:
        'bg-gray-500 text-gray-600 dark:bg-gray-300 dark:text-gray-500',
    },
    {
      variant: 'outline',
      disabled: true,
      className:
        'border-gray-500 text-gray-600 dark:border-gray-300 dark:text-gray-500',
    },
    {
      variant: 'ghost',
      disabled: true,
      className: 'text-gray-500 dark:text-gray-300',
    },
    {
      variant: 'link',
      disabled: true,
      className: 'text-gray-500 dark:text-gray-300',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
});

export type ButtonVariants = VariantProps<typeof buttonClass>;
