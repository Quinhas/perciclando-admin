import { Moon, Sun } from 'lucide-react';
import { useColorMode } from '../../../app/hooks/useColorMode';
import { Button, type ButtonProps } from '../Button';

export function ToggleColorModeButton(props: ButtonProps) {
  const { toggleColorMode } = useColorMode();
  return (
    <Button
      variant='ghost'
      colorScheme='gray'
      size='sm'
      {...props}
      type='button'
      onClick={toggleColorMode}
    >
      <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
