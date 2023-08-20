import ButtonComponent from '@/components/button';
import useLanguageButtons from './hooks/useLanguageButtons';
import styles from './styles.module.scss';

export default function Form(): JSX.Element {
  const { renderableButtons, revealAccountForm, t } = useLanguageButtons();

  return (
    <div>
      <div className={styles.buttonsContainer}>{renderableButtons}</div>
      <ButtonComponent
        full={true}
        type={'button'}
        onClick={revealAccountForm}
      >
        {t('Confirm')}
      </ButtonComponent>
    </div>
  );
}
