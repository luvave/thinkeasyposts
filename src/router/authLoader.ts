import { RouterContexts } from './Router.tsx';

interface Props {
  context: RouterContexts;
}

export const authLoader = ({ context }: Props) => {
  if (!context.auth.isAuthenticated) {
    throw new Error('Not authenticated');
  }
};
