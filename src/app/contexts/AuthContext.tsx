import { useQuery } from '@tanstack/react-query';
import { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { SplashScreen } from '../../view/components/SplashScreen';
import { localStorageKeys } from '../config/env';
import { User } from '../entities/User';
import { usersService } from '../services/usersService';

interface SignInProps {
  accessToken: string;
}

interface AuthContextValue {
  signedIn: boolean;
  user?: User | null;
  signIn(props: SignInProps): void;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess, remove, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signIn = useCallback(({ accessToken }: SignInProps) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove();

    setSignedIn(false);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      signOut();
      toast.error('Session expired.');
    }
  }, [isError, signOut]);

  return (
    <AuthContext.Provider
      value={{ signedIn: isSuccess && signedIn, signIn, signOut, user: data }}
    >
      <SplashScreen isShowing={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
