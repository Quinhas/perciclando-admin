import { Outlet } from 'react-router-dom';
import { LogoIcon } from '../components/LogoIcon';
import { ToggleColorModeButton } from '../components/ToggleColorModeButton';

export function AuthLayout() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-10 p-8 lg:p-0'>
      <div className='absolute right-4 top-4'>
        <ToggleColorModeButton />
      </div>
      <LogoIcon className='h-6 text-gray-500' />
      <div className='w-full max-w-[504px]'>
        <Outlet />
      </div>
      <p className='select-none tracking-[-0.5px] text-gray-500'>Perciclando</p>
    </div>
  );
}
