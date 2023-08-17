import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }: { locale: string }) => ({
  messages: (await import(`./translations/${locale}.json`)).default
}));
