import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
  useMemo,
} from 'react';
import {
  authControllerLogin,
  authControllerSignup,
  authControllerRefreshToken,
} from '../generated/auth';
import type { LoginInput } from '../generated/types';
import type { SignupInput } from '../generated/types';
import { useLocalStorage } from '../hooks/useLocalStorage.ts';
import { isTokenValid } from '../utils/auth.ts';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (input: LoginInput) => Promise<void>;
  signup: (input: SignupInput) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>('accessToken', null);
  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>('refreshToken', null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (
      !accessToken ||
      !isTokenValid(accessToken) ||
      !refreshToken ||
      !isTokenValid(refreshToken)
    ) {
      logout();
    }
  }, [accessToken]);

  const REFRESH_TOKEN_TIME_IN_MS = 5 * 60 * 1000;
  useEffect(() => {
    if (!refreshToken) return;
    const interval = setInterval(async () => {
      try {
        const res = await authControllerRefreshToken({ token: refreshToken });
        setAccessToken(res.access_token);
        setIsAuthenticated(true);
      } catch {
        logout();
      }
    }, REFRESH_TOKEN_TIME_IN_MS);
    return () => clearInterval(interval);
  }, [refreshToken]);

  const login = useCallback(async (input: LoginInput) => {
    const res = await authControllerLogin(input);
    setAccessToken(res.accessToken);
    setRefreshToken(res.refreshToken);
    setIsAuthenticated(true);
  }, []);

  const signup = useCallback(async (input: SignupInput) => {
    const res = await authControllerSignup(input);
    setAccessToken(res.accessToken);
    setRefreshToken(res.refreshToken);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setAccessToken(null);
    setRefreshToken(null);
    setIsAuthenticated(false);
  }, []);

  const value: AuthContextType = useMemo(
    () => ({
      isAuthenticated,
      login,
      signup,
      logout,
    }),
    [isAuthenticated, login, signup, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth must be used within an AuthProvider');
  }
  return context;
};
