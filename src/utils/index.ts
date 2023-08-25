export const normalizePhoneNumber = (value: String | undefined) => {
  if (!value) return '';

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1');
};

export const isEmail = (email: string): boolean => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$~/g;
  return regex.test(email);
};

export const classnames = (...classes: Array<string | undefined | null | boolean>): string =>
  classes.filter(Boolean).join(' ');
