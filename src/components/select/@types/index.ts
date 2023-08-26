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

export type SelectInputComponentProps = {
  selectedOption: optionProps | null;
  handleOptionsList: () => void;
};

export type SelectComponentProps = {
  label: string;
  name: string;
  options: optionProps[];
  selectedOption: optionProps | null;
  state?: boolean;
  feedback?: string;
  onOptionSelect: (option: optionProps, name: string) => void;
};
