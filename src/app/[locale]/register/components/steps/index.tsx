import { classnames } from '@/utils';
import styles from './styles.module.scss';
import useRegisterStore from '@/stores/register-store';

export default function Steps(): JSX.Element {
  const [showLanguageForm, showAccountForm] = useRegisterStore((state) => [
    state.showLanguageForm,
    state.showAccountForm
  ]);

  return (
    <section className={styles.wrapperSteps}>
      <div className={styles.stepsContainer}>
        <div className={classnames(styles.circle, showLanguageForm && styles.active)} />
        <div className={styles.line} />
        <div className={classnames(styles.circle, showAccountForm && styles.active)} />
      </div>
    </section>
  );
}
