import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../app/hooks/useAuth';
import { Navbar } from '../components/Navbar';

interface AuthGuardProps {
  isPrivate?: boolean;
}

export function AuthGuard({ isPrivate = false }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return (
      <Navigate
        to={'/sign-in'}
        replace
      />
    );
  }

  if (signedIn && !isPrivate) {
    return (
      <Navigate
        to={'/'}
        replace
      />
    );
  }

  return (
    <>
      {signedIn && <Navbar />}
      <Outlet />
    </>
  );
}
