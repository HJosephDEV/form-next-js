export type States = {
  showLanguageForm: boolean;
  showAccountForm: boolean;
  showAccountInfos: boolean;
};

export type Actions = {
  revealLanguageForm: () => void;
  revealAccountForm: () => void;
  revealAccountInfos: () => void;
};
