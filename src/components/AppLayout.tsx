import { Outlet } from '@tanstack/react-router';
import { DesktopMenu } from './Menu/DesktopMenu.tsx';
import { MobileMenu } from './Menu/MobileMenu';
import { PageContainer } from './PageContainer';
import { Box } from '@chakra-ui/react';

export const AppLayout = () => {
  return (
    <Box
      css={{
        minHeight: '100vh',
        bg: 'brand.500',
        color: 'text.primary',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <Box display={{ base: 'none', md: 'block' }}>
        <DesktopMenu />
      </Box>
      <MobileMenu />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Box>
  );
};
