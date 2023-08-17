export type InputProps = {
  inputLabel: string;
  inputClass?: string;
  isPasswordInput?: boolean;
  state?: boolean;
  feedback?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
