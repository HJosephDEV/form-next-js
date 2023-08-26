import { AccountFormFields, RenderableLanguageButtonProps } from '@/app/[locale]/register/@types';

export type States = {
  languageButtons: RenderableLanguageButtonProps[];
  showLanguageForm: boolean;
  showAccountForm: boolean;
  backToLanguageForm: boolean;
  formFields: AccountFormFields;
};

export type Actions = {
  revealLanguageForm: () => void;
  revealAccountForm: () => void;
  updateFields: (state: AccountFormFields) => void;
  updateBackToLanguageForm: (state: boolean) => void;
  updateLanguageButtons: (state: RenderableLanguageButtonProps[]) => void;
};
