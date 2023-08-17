'use client';

import Input from '@/components/input';
import styles from './styles.module.scss';
import ButtonComponent from '@/components/button';
import { useTranslations } from 'next-intl';

export default function Form(): JSX.Element {
  const t = useTranslations('Login');

  return (
    <form className={styles.form}>
      <Input
        inputLabel={t('UsernameOrEmail')}
        type={'text'}
      />
      <Input
        inputLabel={t('Password')}
        isPasswordInput={true}
      />
      <ButtonComponent type={'button'}>{t('Enter')}</ButtonComponent>
    </form>
  );
}
