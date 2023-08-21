import { AccountFormField, RenderableLanguageButtonProps } from '@/app/[locale]/register/@types';

export type States = {
  languageButtons: RenderableLanguageButtonProps[];
  showLanguageForm: boolean;
  showAccountForm: boolean;
  showAccountInfos: boolean;
  backToLanguageForm: boolean;
  formFields: AccountFormField[];
};

export type Actions = {
  revealLanguageForm: () => void;
  revealAccountForm: () => void;
  revealAccountInfos: () => void;
  updateFields: (state: AccountFormField[]) => void;
  updateBackToLanguageForm: (state: boolean) => void;
  updateLanguageButtons: (state: RenderableLanguageButtonProps[]) => void;
};
