'use client';
import { ActiveThemeProvider } from '../active-theme';
import { UserProvider } from '@/lib/supabase/user-context';
import { AuthModalProvider } from '../auth/auth-modal-provider';
import type { ReactNode } from 'react';

export default function Providers({
  activeThemeValue,
  children
}: {
  activeThemeValue: string;
  children: ReactNode;
}) {
  return (
    <>
      <ActiveThemeProvider initialTheme={activeThemeValue}>
        <UserProvider>
          <AuthModalProvider>{children}</AuthModalProvider>
        </UserProvider>
      </ActiveThemeProvider>
    </>
  );
}
