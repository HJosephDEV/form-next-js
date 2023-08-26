'use client';

import { ButtonComponentProps } from './@types';
import { classnames } from '@/utils';
import styles from './styles.module.scss';

export default function ButtonComponent({
  children,
  full,
  ...rest
}: ButtonComponentProps): JSX.Element {
  return (
    <button
      className={classnames(styles.button, full && styles.full)}
      {...rest}
    >
      {children}
    </button>
  );
}
