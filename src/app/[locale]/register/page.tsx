import AccountForm from './components/account-form';
import Footer from './components/footer';
import LanguageForm from './components/language-form';
import Steps from './components/steps';
import styles from './styles.module.scss';

export default function RegisterPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Steps />
        <div className={styles.content}>
          {/* <LanguageForm /> */}
          <AccountForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}
