import { optionProps } from '@/components/select/@types';

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

export type AccountFormInputField = {
  label: string;
  value: string | optionProps | null;
  type: string;
  placeholder: string;
  state: boolean;
  feedback: string;
  mask: (value: string) => string | null;
  validations: Function[];
};

export type AccountFormFields = {
  [key: string]: AccountFormInputField;
};

export type SelectFieldsOptionsProps = {
  [key: string]: optionProps[];
};
