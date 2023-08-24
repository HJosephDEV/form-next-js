export type optionProps = {
  value: null | string | number;
  label: string;
  disabled: boolean;
};

export type OptionsListComponentProps = {
  showOptionsList: boolean;
  options: optionProps[];
  handleSelectOption: (option: any) => void;
};

export type OptionComponentProps = {
  labelOption: string;
  disabledOption: boolean;
  eventOption: () => void;
};
