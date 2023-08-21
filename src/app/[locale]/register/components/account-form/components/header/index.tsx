import styles from './styles.module.scss';

import BackButton from '../../../back-button';
import Title from '../../../title';

import useAccountFormHeader from './hooks';

export default function Header(): JSX.Element {
  const { handleBackButton } = useAccountFormHeader();

  return (
    <header>
      <div className={styles.backButtonContainer}>
        <BackButton onClick={handleBackButton} />
      </div>
      <Title>Informações da conta</Title>
    </header>
  );
}
