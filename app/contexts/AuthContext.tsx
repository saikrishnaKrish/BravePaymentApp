import React, { createContext, useState, ReactNode } from 'react';
import { signup, login } from '../api/auth';

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<string>;
  logout: () => void;
  signup: (username: string, email: string, password: string) => Promise<string>;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  login: async () => '',
  logout: () => {},
  signup: async () => '',
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (username: string, password: string) => {
    try {
      const message = await login(username, password);
      setUser({ username, email: 'user@example.com' });
      return message;
    } catch (error) {
      throw error;
    }
  };

  const handleSignup = async (username: string, email: string, password: string) => {
    try {
      const message = await signup(username, email, password);
      setUser({ username, email });
      return message;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout, signup: handleSignup }}>
      {children}
    </AuthContext.Provider>
  );
};
