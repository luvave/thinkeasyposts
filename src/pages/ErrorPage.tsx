import { ErrorComponentProps } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const ErrorPage = ({ error }: ErrorComponentProps) => {
  const { t } = useTranslation();

  let message = t('errorPage.defaultErr');
  if (error instanceof Error) message = error.message;
  else if (typeof error === 'string') message = error;

  return (
    <div style={{ padding: 32, textAlign: 'center' }}>
      <h1>{t('errorPage.somethingWentWrong')}</h1>
      <pre style={{ color: 'red', marginTop: 16 }}>{message}</pre>
    </div>
  );
};
