import ConfirmButton from './components/confirm-button';
import LanguageButtonsContainer from './components/language-buttons-container';
import styles from './styles.module.scss';
import Title from './components/title';

export default function LanguageForm(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title />
        <LanguageButtonsContainer />
        <ConfirmButton />
      </div>
    </div>
  );
}
