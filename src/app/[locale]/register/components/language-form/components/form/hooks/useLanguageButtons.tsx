import styles from '../styles.module.scss';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  RenderableLanguageButtonProps,
  RenderableLanguageButtonsProp
} from '@/app/[locale]/register/@types';

import LanguageButton from '../components/language-button';

import useRegisterStore from '@/stores/register-store';

export default function useLanguageButtons() {
  const router = useRouter();
  const t = useTranslations('Register');
  const { revealAccountForm } = useRegisterStore();

  const [buttons, setButtons] = useState<RenderableLanguageButtonsProp>({
    brazil: {
      selected: false,
      locale: 'pt',
      imageSrc: '/assets/images/brazil.png',
      imageAlt: 'bandeira do Brasil',
      event: () => handleSelectedButton('brazil')
    },
    eua: {
      selected: false,
      locale: 'en',
      imageSrc: '/assets/images/eua.png',
      imageAlt: 'bandeira do EUA',
      event: () => handleSelectedButton('eua')
    }
  });

  const handleSelectedButton = (paramButton: string) => {
    if (buttons[paramButton].selected) return;

    buttons[paramButton].selected = true;

    for (let button in buttons) {
      if (button === paramButton) continue;
      buttons[button].selected = false;
    }

    router.push(`/${buttons[paramButton].locale}/register`);
    setButtons({ ...buttons });
  };

  const renderableButtons: JSX.Element[] = Object.values(buttons).map(
    (value: RenderableLanguageButtonProps, i: number) => (
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
    )
  );

  return {
    renderableButtons,
    revealAccountForm,
    t
  };
}
