import { OptionsListComponentProps } from '../../@types';
import styles from './styles.module.scss';

import Option from './components/option';

export default function OptionsList({
  showOptionsList,
  handleSelectOption,
  selectedOptionValue,
  options
}: OptionsListComponentProps): JSX.Element {
  const renderableOptions: JSX.Element[] = options.map((option, i) => (
    <Option
      key={`option-${i}`}
      labelOption={option.label}
      disabledOption={option.disabled}
      eventOption={() => handleSelectOption(option)}
      selected={selectedOptionValue === option.value}
    />
  ));

  return (
    <ul
      className={styles.listOptions}
      style={{ display: showOptionsList ? 'flex' : 'none' }}
    >
      {renderableOptions}
    </ul>
  );
}
