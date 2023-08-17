'use client';

import { ButtonComponentProps } from './@types';
import styles from './styles.module.scss';

export default function ButtonComponent({ children, ...rest }: ButtonComponentProps): JSX.Element {
  return (
    <button
      className={styles.button}
      {...rest}
    >
      {children}
    </button>
  );
}
