'use client';

import ButtonComponent from '@/components/button';
import useLanguageButtons from './hooks/useLanguageButtons';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

export default function Form(): JSX.Element {
  const { renderableButtons } = useLanguageButtons();
  const t = useTranslations('Register');

  return (
    <div>
      <div className={styles.buttonsContainer}>{renderableButtons}</div>
      <ButtonComponent
        full={true}
        type={'button'}
      >
        {t('Confirm')}
      </ButtonComponent>
    </div>
  );
}
