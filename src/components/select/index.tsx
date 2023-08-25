import { useState } from 'react';
import styles from './styles.module.scss';
import OptionsList from './components/options-list';
import { optionProps } from './@types';

export default function Select(): JSX.Element {
  const list: optionProps[] = [
    { value: null, label: 'Selecione', disabled: false },
    { value: 1, label: '1', disabled: false }
  ];

  const [showOptionsList, setShowOptionsList] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<optionProps | null>(list[0]);

  const handleOptionsList = () => setShowOptionsList(!showOptionsList);

  const handleSelectOption = (option: optionProps) => {
    const { value, disabled } = option;
    if (disabled) return;

    if (value !== selectedOption?.value) {
      setSelectedOption(option);
      handleOptionsList();
      return;
    }

    setSelectedOption(list[0]);
    handleOptionsList();
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onClick={handleOptionsList}
      >
        <span
          className={`${styles.selectedOption} ${
            selectedOption?.value === null ? styles.placeholder : ''
          }`}
        >
          {selectedOption?.label}
        </span>
      </div>

      <OptionsList
        showOptionsList={showOptionsList}
        handleSelectOption={handleSelectOption}
        selectedOptionValue={selectedOption?.value || null}
        options={list}
      />
    </div>
  );
}
