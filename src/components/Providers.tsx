import { ThemeProvider } from 'next-themes';
import AuthProvider from './auth-provider';

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <>{children}</>
      </ThemeProvider>
    </AuthProvider>
  );
}
