import { Transition } from '@headlessui/react';
import { LogoIcon } from '../LogoIcon';
import { Spinner } from '../Spinner';

interface SplashScreenProps {
  isShowing?: boolean;
}

export function SplashScreen({ isShowing }: SplashScreenProps) {
  return (
    <Transition
      show={isShowing}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='fixed left-0 top-0 grid h-full w-full place-items-center bg-zinc-50 dark:bg-zinc-950'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-col items-center gap-2'>
            <LogoIcon className='h-10 text-black dark:text-white' />
            <p className='select-none tracking-[-0.5px] text-gray-500'>
              Perciclando
            </p>
          </div>
          <Spinner className='fill-white text-primary-700 dark:text-primary-300' />
        </div>
      </div>
    </Transition>
  );
}
