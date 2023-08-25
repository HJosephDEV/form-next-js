import { ReactNode } from '@/@types';
import styles from './styles.module.scss';

export default function Feedback({ children }: ReactNode): JSX.Element {
  return <span className={styles.invalidFeedback}>{children}</span>;
}
