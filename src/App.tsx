import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './router/Router.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme.ts';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n.ts';

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider value={system}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ChakraProvider>
    </I18nextProvider>
  );
};

export default App;
