import { Box } from '@chakra-ui/react';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { MouseEvent } from 'react';

interface Props {
  onClick?: (e: MouseEvent) => void;
}

export const BrandButton = ({ onClick }: Props) => {
  const { t } = useTranslation();

  return (
    <Box
      as={Link}
      // @ts-expect-error: 'to' is valid when 'as' is Link
      to="/"
      css={{
        fontWeight: 'bold',
        fontSize: '1.3rem',
        color: 'accent.500',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
          color: 'accent.600',
          cursor: 'pointer',
        },
      }}
      onClick={onClick}
    >
      {t('menu.brand')}
    </Box>
  );
};
