import styles from '../styles.module.scss';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { RenderableLanguageButtonProps } from '@/app/[locale]/register/@types';

import LanguageButton from '../components/language-button';

import useRegisterStore from '@/stores/register-store';

export default function useLanguageButtons() {
  const [updateLanguageButtons, languageButtons, revealAccountForm] = useRegisterStore((state) => [
    state.updateLanguageButtons,
    state.languageButtons,
    state.revealAccountForm
  ]);
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
    const index: number = useRegisterStore
      .getState()
      .languageButtons.findIndex((button) => button.key === paramButton);
    if (useRegisterStore.getState().languageButtons[index].selected) return;

    useRegisterStore.getState().languageButtons[index].selected = true;

    useRegisterStore.getState().languageButtons.forEach((_, i) => {
      if (index === i) return;
      useRegisterStore.getState().languageButtons[i].selected = false;
    });

    updateLanguageButtons(useRegisterStore.getState().languageButtons);
    router.push(`/${useRegisterStore.getState().languageButtons[index].locale}/register`);
  };

  useEffect(() => {
    !languageButtons.length && updateLanguageButtons(languageinitialState);
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

  return {
    renderableButtons,
    revealAccountForm,
    t
  };
}
