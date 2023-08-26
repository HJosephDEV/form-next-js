import { BackButtonProps } from './@types';
import { useTranslationsHook } from '@/utils';
import styles from './styles.module.scss';

import { LuUndo2 } from 'react-icons/lu';

export default function BackButton({ ...rest }: BackButtonProps): JSX.Element {
  const $t = useTranslationsHook('Register');

  return (
    <button
      className={styles.button}
      {...rest}
    >
      <LuUndo2 />
      <span>{$t('Back')}</span>
    </button>
  );
}
