import { OptionComponentProps } from '@/components/select/@types';
import { classnames } from '@/utils';
import styles from './styles.module.scss';

export default function Option({
  selected,
  labelOption,
  disabledOption,
  eventOption
}: OptionComponentProps): JSX.Element {
  return (
    <li
      className={classnames(
        styles.option,
        disabledOption && styles.disabledOption,
        selected && styles.selected
      )}
      onClick={eventOption}
    >
      {labelOption}
    </li>
  );
}
