import { ReactNode } from '@/@types';
import styles from './styles.module.scss';

export default function Label({ children }: ReactNode): JSX.Element {
  return <label className={styles.label}>{children}</label>;
}
