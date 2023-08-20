import styles from './styles.module.scss';

import { ReactNode } from '@/@types';

export default function Title({ children }: ReactNode): JSX.Element {
  return <h1 className={styles.title}>{children}</h1>;
}
