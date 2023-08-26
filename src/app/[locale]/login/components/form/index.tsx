import { useTranslationsHook } from '@/utils';
import styles from './styles.module.scss';

import Input from '@/components/input';
import ButtonComponent from '@/components/button';

export default function Form(): JSX.Element {
  const $t = useTranslationsHook('Login');

  return (
    <form className={styles.form}>
      <Input
        inputLabel={$t('UsernameOrEmail')}
        type={'text'}
      />
      <Input
        inputLabel={$t('Password')}
        isPasswordInput={true}
      />
      <ButtonComponent
        type={'button'}
        full={true}
      >
        {$t('Enter')}
      </ButtonComponent>
    </form>
  );
}
