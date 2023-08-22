import styles from '../styles.module.scss';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { RenderableLanguageButtonProps } from '@/app/[locale]/register/@types';

import LanguageButton from '../components/language-button';

import useRegisterStore from '@/stores/register-store';

export default function useLanguageButtons() {
  const router = useRouter();
  const t = useTranslations('Register');

  const languageinitialState: RenderableLanguageButtonProps[] = [
    {
      key: 'brazil',
      selected: true,
      locale: 'pt',
      imageSrc: '/assets/images/brazil.png',
      imageAlt: 'bandeira do Brasil',
      event: () => handleSelectedButton('brazil')
    },
    {
      key: 'eua',
      selected: false,
      locale: 'en',
      imageSrc: '/assets/images/eua.png',
      imageAlt: 'bandeira do EUA',
      event: () => handleSelectedButton('eua')
    }
  ];

  const handleSelectedButton = (paramButton: string) => {
    const index: number = languageinitialState.findIndex((button) => button.key === paramButton);
    if (languageinitialState[index].selected) return;

    languageinitialState[index].selected = true;

    languageinitialState.forEach((_, i) => {
      if (index === i) return;
      languageinitialState[i].selected = false;
    });

    useRegisterStore.getState().updateLanguageButtons(languageinitialState);
    router.push(`/${languageinitialState[index].locale}/register`);
  };

  useEffect(() => {
    !useRegisterStore.getState().languageButtons.length &&
      useRegisterStore.getState().updateLanguageButtons(languageinitialState);
  }, []);

  const renderableButtons: JSX.Element[] = useRegisterStore
    .getState()
    .languageButtons.map((value: RenderableLanguageButtonProps, i: number) => (
      <LanguageButton
        key={`button-${i}`}
        selected={value.selected}
        onClick={value.event}
      >
        <img
          src={value.imageSrc}
          alt={value.imageAlt}
          className={styles.countryIcon}
        />
      </LanguageButton>
    ));

  const revealAccountForm = () => {
    useRegisterStore.getState().revealAccountForm();
  };

  return {
    renderableButtons,
    revealAccountForm,
    t
  };
}
