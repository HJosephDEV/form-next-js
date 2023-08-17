export type LanguageButtonComponentProps = {
  children: React.ReactNode;
  selected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type RenderableLanguageButtonProps = {
  selected: boolean;
  locale: string;
  imageSrc: string;
  imageAlt: string;
  event: () => void;
};

export type RenderableLanguageButtonsProp = {
  [key: string]: RenderableLanguageButtonProps;
  brazil: RenderableLanguageButtonProps;
  eua: RenderableLanguageButtonProps;
};
