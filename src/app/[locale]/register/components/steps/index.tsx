import useRegisterStore from '@/stores/register-store';
import styles from './styles.module.scss';

export default function Steps(): JSX.Element {
  return (
    <section className={styles.wrapperSteps}>
      <div className={styles.stepsContainer}>
        <div
          className={`${styles.circle} ${
            useRegisterStore.getState().showLanguageForm ? styles.active : ''
          }`}
        />
        <div className={styles.line} />
        <div
          className={`${styles.circle} ${
            useRegisterStore.getState().showAccountForm ? styles.active : ''
          }`}
        />
      </div>
    </section>
  );
}
