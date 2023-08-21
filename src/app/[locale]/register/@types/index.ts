export type LanguageButtonComponentProps = {
  children: React.ReactNode;
  selected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type RenderableLanguageButtonProps = {
  key: string;
  selected: boolean;
  locale: string;
  imageSrc: string;
  imageAlt: string;
  event: () => void;
};

export type AccountFormFieldValidations = {
  isRequired?: () => {};
};

export type AccountFormField = {
  key: string;
  label: string;
  value: string | number;
  type: string;
  state: boolean;
  feedback: string;
  validations: AccountFormFieldValidations;
};
