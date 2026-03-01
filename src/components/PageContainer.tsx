import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const PageContainer = ({ children }: Props) => {
  return (
    <Box
      css={{
        padding: '2.5rem 2rem 2rem 2rem',
        color: 'text.primary',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};
