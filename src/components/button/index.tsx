'use client';

import { ButtonComponentProps } from './@types';
import styles from './styles.module.scss';

export default function ButtonComponent({
  children,
  full,
  ...rest
}: ButtonComponentProps): JSX.Element {
  return (
    <button
      className={`
        ${styles.button} 
        ${full ? styles.full : ''}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
