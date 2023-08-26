'use client';

import { InputProps } from './@types';
import styles from './styles.module.scss';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { useState } from 'react';
import { classnames } from '@/utils';

export default function Input({
  inputLabel,
  inputClass,
  isPasswordInput,
  state,
  feedback,
  ...rest
}: InputProps): JSX.Element {
  const [isEyeOn, setEyeOn] = useState<boolean>(false);
  const type: string = isEyeOn ? 'text' : 'password';

  const handleEyeFlag = () => setEyeOn(!isEyeOn);

  return (
    <div className={classnames(styles.container, inputClass || '')}>
      <label className={styles.label}>{inputLabel}</label>

      <div
        className={classnames(
          styles.inputContainer,
          state === false && styles.isInvalid,
          isPasswordInput && styles.noRightBorderRadius
        )}
      >
        <input
          type={type}
          {...rest}
        />

        {isPasswordInput && (
          <button
            className={styles.eyeContainer}
            onClick={handleEyeFlag}
            type='button'
          >
            {isEyeOn && <LuEye />}
            {!isEyeOn && <LuEyeOff />}
          </button>
        )}
      </div>
      {state === false && !!feedback && <span className={styles.stateFeedback}>{feedback}</span>}
    </div>
  );
}
