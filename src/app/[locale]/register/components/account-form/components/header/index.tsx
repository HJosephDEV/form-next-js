import styles from './styles.module.scss';

import BackButton from '../../../back-button';
import Title from '../../../title';

import useRegisterStore from '@/stores/register-store';

export default function Header(): JSX.Element {
  const { revealLanguageForm } = useRegisterStore();
  return (
    <header>
      <div className={styles.backButtonContainer}>
        <BackButton onClick={revealLanguageForm} />
      </div>
      <Title>Informações da conta</Title>
    </header>
  );
}
