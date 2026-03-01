import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './router/Router.tsx';

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
