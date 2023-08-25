export type optionProps = {
  value: null | string | number;
  label: string;
  disabled: boolean;
};

export type OptionsListComponentProps = {
  options: optionProps[];
  showOptionsList: boolean;
  selectedOptionValue: null | string | number;
  handleSelectOption: (option: any) => void;
};

export type OptionComponentProps = {
  selected: boolean;
  labelOption: string;
  disabledOption: boolean;
  eventOption: () => void;
};
