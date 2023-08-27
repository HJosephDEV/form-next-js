import Image from 'next/image';
import Form from './components/form';
import RegisterLink from './components/register-link';
import Title from './components/title';
import styles from './styles.module.scss';

export default function LoginPage(): JSX.Element {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.cardContainer}>
        <Image
          src={'/assets/images/background-card-login.jpg'}
          alt='imagem do container'
          className={styles.containerBackgroundImage}
        />

        <div className={styles.childrenContainer}>
          <div className={styles.container}>
            <Title />
            <Form />
            <RegisterLink />
          </div>

          <div className={styles.bottomBar} />
        </div>
      </div>
    </div>
  );
}
