import styles from './styles.module.scss';

import { OptionComponentProps } from '@/components/select/@types';

import { classnames } from '@/utils';

export default function Option({
  selected,
  labelOption,
  disabledOption,
  eventOption
}: OptionComponentProps): JSX.Element {
  const OPTION_CLASS = classnames(
    styles.option,
    disabledOption && styles.disabledOption,
    selected && styles.selected
  );
  return (
    <div
      className={OPTION_CLASS}
      onClick={eventOption}
    >
      {labelOption}
    </div>
  );
}
