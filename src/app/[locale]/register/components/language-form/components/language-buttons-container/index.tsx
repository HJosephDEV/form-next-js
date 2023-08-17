'use client';

import styles from './styles.module.scss';
import useLanguageButtons from './hooks/useLanguageButtons';

export default function LanguageButtonsContainer(): JSX.Element {
  const { renderableButtons } = useLanguageButtons();

  return <div className={styles.container}>{renderableButtons}</div>;
}
