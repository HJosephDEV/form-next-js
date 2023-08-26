import Link from 'next/link';
import { useTranslationsHook } from '@/utils';
import styles from './styles.module.scss';

export default function RegisterLink(): JSX.Element {
  const $t = useTranslationsHook('Login');

  return (
    <Link
      href='/register'
      className={styles.container}
    >
      <span className={styles.text}>
        {$t('DontHaveAccount')}
        <b className={styles.bold}>{$t('Register')}</b>
      </span>
    </Link>
  );
}
