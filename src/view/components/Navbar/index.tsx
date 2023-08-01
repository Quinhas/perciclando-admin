import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../app/hooks/useAuth';
import { Button } from '../Button';
import { LogoIcon } from '../LogoIcon';
import { ToggleColorModeButton } from '../ToggleColorModeButton';

export function Navbar() {
  const { signOut } = useAuth();
  return (
    <div className='flex max-h-16 items-center justify-between p-2 sm:px-4'>
      <Link
        className='flex items-center gap-2 text-base text-black transition-all dark:text-white'
        to='/'
      >
        <Button
          variant='ghost'
          size='sm'
        >
          <LogoIcon className='h-[1.5rem] text-black transition-colors dark:text-white' />
        </Button>
      </Link>
      <div className='flex items-center gap-2'>
        <ToggleColorModeButton />
        <Button
          variant='ghost'
          colorScheme='gray'
          size='sm'
          onClick={signOut}
        >
          <LogOut className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
