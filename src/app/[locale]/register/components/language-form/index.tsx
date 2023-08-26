import { useTranslationsHook } from '@/utils';
import styles from './styles.module.scss';

import Title from './components/title';
import Form from './components/form';

export default function LanguageForm(): JSX.Element {
  const $t = useTranslationsHook('Register');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title>{$t('SelectALanguage')}</Title>
        <Form />
      </div>
    </div>
  );
}
