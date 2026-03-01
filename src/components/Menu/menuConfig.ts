import type { LinkProps } from '@tanstack/react-router';

export interface MenuItem {
  to: LinkProps['to'];
  labelKey: string;
}

export const menuItems: MenuItem[] = [
  {
    to: '/login',
    labelKey: 'menu.signup',
  },
  {
    to: '/signup',
    labelKey: 'menu.login',
  },
];
