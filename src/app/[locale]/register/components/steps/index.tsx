import useRegisterStore from '@/stores/register-store';
import styles from './styles.module.scss';

export default function Steps(): JSX.Element {
  const { showLanguageForm, showAccountForm, showAccountInfos } = useRegisterStore();
  return (
    <section className={styles.wrapperSteps}>
      <div className={styles.stepsContainer}>
        <div className={`${styles.circle} ${showLanguageForm ? styles.active : ''}`} />
        <div className={styles.line} />
        <div className={`${styles.circle} ${showAccountForm ? styles.active : ''}`} />
        <div className={styles.line} />
        <div className={`${styles.circle} ${showAccountInfos ? styles.active : ''}`} />
      </div>
    </section>
  );
}
