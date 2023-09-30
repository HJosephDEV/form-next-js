import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import { RenderableLanguageButtonProps } from '@/app/[locale]/register/@types';
import { useTranslationsHook } from '@/utils';
import styles from '../styles.module.scss';

import LanguageButton from '../components/language-button';
import useRegisterStore from '@/stores/register-store';
import Image from 'next/image';

export default function useLanguageButtons() {
  const $t = useTranslationsHook('Register');
  const [updateLanguageButtons, languageButtons, revealAccountForm] = useRegisterStore((state) => [
    state.updateLanguageButtons,
    state.languageButtons,
    state.revealAccountForm
  ]);
  const router = useRouter();
  const locale = useLocale();

  const languageinitialState: RenderableLanguageButtonProps[] = [
    {
      key: 'brazil',
      selected: locale === 'pt',
      locale: 'pt',
      imageSrc: '/assets/images/brazil.png',
      imageAlt: 'bandeira do Brasil',
      event: () => handleSelectedButton('brazil')
    },
    {
      key: 'eua',
      selected: locale === 'en',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderableButtons: JSX.Element[] = useRegisterStore
    .getState()
    .languageButtons.map((value: RenderableLanguageButtonProps, i: number) => (
      <LanguageButton
        key={`button-${i}`}
        selected={value.selected}
        onClick={value.event}
      >
        <Image
          src={value.imageSrc}
          alt={value.imageAlt}
          width={50}
          height={30}
          className={styles.countryIcon}
        />
      </LanguageButton>
    ));

  return {
    renderableButtons,
    revealAccountForm,
    $t
  };
}
