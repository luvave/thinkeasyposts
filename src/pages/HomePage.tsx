import { useTranslation } from 'react-i18next';
import { Heading, Container, Box, Stack } from '@chakra-ui/react';
import PostsList from '../components/Posts/PostsList.tsx';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Container maxW="4xl" py={10}>
      <Stack direction="column" gap={8}>
        <Heading
          as="h1"
          size="2xl"
          css={{ fontWeight: 800, color: 'text.primary', textAlign: 'center' }}
        >
          {t('home.title')}
        </Heading>
        <Box>
          <PostsList />
        </Box>
      </Stack>
    </Container>
  );
};
