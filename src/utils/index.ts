import { useTranslations } from 'next-intl';

export const normalizePhoneNumber = (value: String | undefined) => {
  if (!value || (value.length === 1 && isNaN(Number(value[0])))) return '';

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1');
};

export const isEmail = (email: string): boolean => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
  const validation = regex.test(email);
  return validation;
};

export const classnames = (...classes: Array<string | undefined | null | boolean>): string =>
  classes.filter(Boolean).join(' ');

export const useTranslationsHook = (namespace: string) => {
  const t = useTranslations(namespace);
  return (key: string) => (t(key).includes(`${namespace}.`) ? key : t(key));
};
