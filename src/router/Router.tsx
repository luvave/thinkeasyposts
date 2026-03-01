import {
  createPostRoute,
  homeRoute,
  loginRoute,
  notFoundRoute,
  postDetailRoute,
  rootRoute,
  signUpRoute,
} from './routes.tsx';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { AuthContextType, useAuth } from '../context/AuthContext.tsx';

export interface RouterContexts {
  auth: AuthContextType;
}

const routeTree = rootRoute.addChildren([
  homeRoute,
  createPostRoute,
  postDetailRoute,
  notFoundRoute,
  loginRoute,
  signUpRoute,
]);

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
};
