import { BackButtonProps } from './@types';
import styles from './styles.module.scss';
import { LuUndo2 } from 'react-icons/lu';

export default function BackButton({ ...rest }: BackButtonProps): JSX.Element {
  return (
    <button
      className={styles.button}
      {...rest}
    >
      <LuUndo2 />
      <span>Voltar</span>
    </button>
  );
}
