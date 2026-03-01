import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div>404 - {t('notFoundPage.notFound')}</div>;
};
