import { SelectInputComponentProps } from '../../@types';
import { classnames } from '@/utils';
import styles from './styles.module.scss';
import { LuChevronDown } from 'react-icons/lu';

export default function SelectInput({
  selectedOption,
  handleOptionsList
}: SelectInputComponentProps): JSX.Element {
  return (
    <div
      className={styles.container}
      onClick={handleOptionsList}
    >
      <span
        className={classnames(
          styles.selectedOption,
          selectedOption?.value === null && styles.placeholder
        )}
      >
        {selectedOption?.label}
      </span>
      <LuChevronDown />
    </div>
  );
}
