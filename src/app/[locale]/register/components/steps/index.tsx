import styles from './styles.module.scss';

export default function Steps(): JSX.Element {
  return (
    <section className={styles.wrapperSteps}>
      <div className={styles.stepsContainer}>
        <div className={`${styles.circle} ${styles.active}`} />
        <div className={styles.line} />
        <div className={styles.circle} />
        <div className={styles.line} />
        <div className={styles.circle} />
      </div>
    </section>
  );
}
