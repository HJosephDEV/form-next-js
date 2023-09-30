import styles from './styles.module.scss';

import useAccountForm from './hooks/useAccountForm';
import ButtonComponent from '@/components/button';

export default function Form(): JSX.Element {
  const { renderableFields, handleNextButton, $t } = useAccountForm();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>{renderableFields}</div>
      <ButtonComponent
        full={true}
        onClick={handleNextButton}
      >
        {$t('Next')}
      </ButtonComponent>
    </div>
  );
}
