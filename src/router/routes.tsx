import { createRootRouteWithContext, createRoute } from '@tanstack/react-router';
import { AppLayout } from '../components/AppLayout';
import { HomePage } from '../pages/HomePage';
import { CreatePostPage } from '../pages/CreatePostPage';
import { PostDetailPage } from '../pages/PostDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { authLoader } from './authLoader';
import type { AuthContextType } from '../context/AuthContext';
import { ErrorPage } from '../pages/ErrorPage';

export interface RouterContexts {
  auth: AuthContextType;
}

export const rootRoute = createRootRouteWithContext<RouterContexts>()({
  component: AppLayout,
  errorComponent: ErrorPage,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

export const createPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/create',
  beforeLoad: authLoader,
  component: CreatePostPage,
});

export const postDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/post/$postId',
  component: PostDetailPage,
});

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});
