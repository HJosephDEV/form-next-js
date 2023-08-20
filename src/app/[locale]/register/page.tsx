'use client';

import AccountForm from './components/account-form';
import AccountInfos from './components/account-infos';
import Footer from './components/footer';
import LanguageForm from './components/language-form';
import Steps from './components/steps';
import styles from './styles.module.scss';
import useRegisterStore from '@/stores/register-store';

export default function RegisterPage(): JSX.Element {
  const { showLanguageForm, showAccountForm, showAccountInfos } = useRegisterStore();

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Steps />
        <div className={styles.content}>
          {showLanguageForm && <LanguageForm />}
          {showAccountForm && <AccountForm />}
          {showAccountInfos && <AccountInfos />}
          <Footer />
        </div>
      </div>
    </div>
  );
}
