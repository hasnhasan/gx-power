'use client';
import React, { useEffect } from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

import i18n from 'i18next';

i18n.init({
  resources: {
    en: { translation: require('../../locales/en.json') },
    tr: { translation: require('../../locales/tr.json') },
  },
  lng: localStorage.getItem("lang") || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default function Providers({
  session,
  children
}: {
  session: SessionProviderProps['session'];
  children: React.ReactNode;
}) {


  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <SessionProvider session={session}>{children}</SessionProvider>
      </ThemeProvider>
    </>
  );
}
