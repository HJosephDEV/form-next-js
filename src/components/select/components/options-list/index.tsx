import { OptionsListComponentProps } from '../../@types';
import Option from './components/option';
import styles from './styles.module.scss';

export default function OptionsList({
  showOptionsList,
  options,
  handleSelectOption
}: OptionsListComponentProps): JSX.Element {
  const renderableOptions: JSX.Element[] = options.map((option, i) => (
    <Option
      key={`option-${i}`}
      labelOption={option.label}
      disabledOption={option.disabled}
      eventOption={() => handleSelectOption(option)}
    />
  ));

  return (
    <div
      className={styles.listOptions}
      style={{ display: showOptionsList ? 'flex' : 'none' }}
    >
      {renderableOptions}
    </div>
  );
}
