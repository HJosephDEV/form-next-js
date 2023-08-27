'use client';

import { Suspense } from 'react';
import AccountForm from './components/account-form';
import Footer from './components/footer';
import LanguageForm from './components/language-form';
import Steps from './components/steps';
import styles from './styles.module.scss';
import useRegisterStore from '@/stores/register-store';

export default function RegisterPage(): JSX.Element {
  const [showLanguageForm, showAccountForm] = useRegisterStore((state) => [
    state.showLanguageForm,
    state.showAccountForm
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Steps />
        <div className={styles.content}>
          <Suspense fallback={<div>aaa</div>}>{showLanguageForm && <LanguageForm />}</Suspense>
          {showAccountForm && <AccountForm />}
          <Footer />
        </div>
      </div>
    </div>
  );
}
