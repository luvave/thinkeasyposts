import { Box, Spacer } from '@chakra-ui/react';
import { MenuButton } from './MenuButton.tsx';
import { menuItems } from './menuConfig';
import { useTranslation } from 'react-i18next';
import { BrandButton } from './BrandButton.tsx';

export const DesktopMenu = () => {
  const { t } = useTranslation();
  return (
    <Box
      css={{
        display: 'flex',
        width: '100%',
        height: '64px',
        bg: 'brand.700',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.32)',
        px: '2rem',
        zIndex: 10,
        borderBottom: '1px solid',
        borderColor: 'brand.800',
        alignItems: 'center',
      }}
    >
      <BrandButton />
      <Spacer />
      <Box>
        {menuItems.map((item) => (
          <MenuButton key={item.to} to={item.to}>
            {t(item.labelKey)}
          </MenuButton>
        ))}
      </Box>
    </Box>
  );
};
