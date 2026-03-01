import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './router/Router.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme.ts';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider value={system}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </I18nextProvider>
  );
};

export default App;
