import styles from './styles.module.scss';
import Title from './components/title';
import Form from './components/form';

export default function LanguageForm(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title />
        <Form />
      </div>
    </div>
  );
}
