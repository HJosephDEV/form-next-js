import styles from './styles.module.scss';

import { OptionComponentProps } from '@/components/select/@types';

export default function Option({
  labelOption,
  disabledOption,
  eventOption
}: OptionComponentProps): JSX.Element {
  return (
    <div
      className={`${styles.option} ${disabledOption ? styles.disabledOption : ''}`}
      onClick={eventOption}
    >
      {labelOption}
    </div>
  );
}
