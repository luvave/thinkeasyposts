import { useTranslation } from 'react-i18next';
import { Heading } from '@chakra-ui/react';

export const HomePage = () => {
  const { t } = useTranslation();
  return <Heading>{t('home.title')}</Heading>;
};
