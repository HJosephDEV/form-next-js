import styles from './styles.module.scss';

import BackButton from '../../../back-button';
import Title from '../../../title';

import useAccountFormHeader from './hooks';

export default function Header(): JSX.Element {
  const { handleBackButton, $t } = useAccountFormHeader();

  return (
    <header>
      <div className={styles.backButtonContainer}>
        <BackButton onClick={handleBackButton} />
      </div>
      <Title>{$t('AccountInformations')}</Title>
    </header>
  );
}
