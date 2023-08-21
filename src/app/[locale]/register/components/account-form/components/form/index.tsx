import ButtonComponent from '@/components/button';
import useAccountForm from './hooks/useAccountForm';
import styles from './styles.module.scss';

export default function Form(): JSX.Element {
  const { renderableFields, handleNextButton } = useAccountForm();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>{renderableFields}</div>
      <ButtonComponent
        full={true}
        onClick={handleNextButton}
      >
        Próximo
      </ButtonComponent>
    </div>
  );
}
