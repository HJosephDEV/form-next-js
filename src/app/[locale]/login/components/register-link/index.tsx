import Link from 'next/link';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export default function RegisterLink(): JSX.Element {
  const t = useTranslations('Login');

  return (
    <Link
      href='/register'
      className={styles.container}
    >
      <span className={styles.text}>
        {t('DontHaveAccount')}
        <b className={styles.bold}>{t('Register')}</b>
      </span>
    </Link>
  );
}
