import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';

export default function HomeTemplate(): JSX.Element {
  const t = useTranslations('Index');
  return <div>{t('title')}</div>;
}
