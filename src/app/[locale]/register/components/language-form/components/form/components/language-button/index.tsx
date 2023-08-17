import { LanguageButtonComponentProps } from '@/app/[locale]/register/@types';
import styles from './styles.module.scss';

export default function LanguageButton({
  children,
  selected,
  ...rest
}: LanguageButtonComponentProps): JSX.Element {
  return (
    <button
      className={`${styles.container} ${selected ? styles.selected : ''}`}
      {...rest}
    >
      {children}
    </button>
  );
}
