import { ReactNode } from '@/@types';
import styles from './styles.module.scss';

export default function Title({ children }: ReactNode): JSX.Element {
  return <h1 className={styles.title}>{children}</h1>;
}
