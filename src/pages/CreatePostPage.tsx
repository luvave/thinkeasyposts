
import { useTranslation } from 'react-i18next';

export const CreatePostPage = () => {
  const { t } = useTranslation();
  return <div>{t('createPost')}</div>;
};
