import { Box, IconButton } from '@chakra-ui/react';
import { Drawer, Portal } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MenuButton } from './MenuButton';
import { menuItems } from './menuConfig';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BrandButton } from './BrandButton.tsx';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '1.5rem',
          py: '1rem',
          bg: 'brand.700',
        }}
      >
        <BrandButton />
        <IconButton
          aria-label={t('menu.openMenu')}
          variant="ghost"
          color="accent.500"
          fontSize="1.8rem"
          onClick={() => setOpen(true)}
        >
          <GiHamburgerMenu size={24} />
        </IconButton>
      </Box>
      <Drawer.Root open={open} onOpenChange={({ open }) => setOpen(open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="brand.700">
              <Drawer.Body>
                <Box css={{ display: 'flex', flexDirection: 'column', gap: '1rem', w: '100%' }}>
                  <Box css={{ py: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <BrandButton onClick={() => setOpen(false)} />
                  </Box>
                  {menuItems.map((item) => (
                    <MenuButton key={item.to} to={item.to} w="100%" onClick={() => setOpen(false)}>
                      {t(item.labelKey)}
                    </MenuButton>
                  ))}
                </Box>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};
