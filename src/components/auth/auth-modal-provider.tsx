'use client';

import { createContext, useContext, useState } from 'react';
import { AuthModal } from './auth-modal';
import type { ReactNode } from 'react';

interface AuthModalContextType {
  isOpen: boolean;
  openModal: (tab?: 'signin' | 'signup') => void;
  closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {}
});

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
}

interface AuthModalProviderProps {
  children: ReactNode;
}

export function AuthModalProvider({ children }: AuthModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState<'signin' | 'signup'>('signin');

  const openModal = (tab: 'signin' | 'signup' = 'signin') => {
    setDefaultTab(tab);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <AuthModal isOpen={isOpen} onClose={closeModal} defaultTab={defaultTab} />
    </AuthModalContext.Provider>
  );
}
