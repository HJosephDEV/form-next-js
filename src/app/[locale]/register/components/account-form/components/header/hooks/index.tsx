import { useTranslationsHook } from '@/utils';
import useRegisterStore from '@/stores/register-store';

export default function useAccountFormHeader() {
  const $t = useTranslationsHook('Register');
  const [updateBackToLanguageForm] = useRegisterStore((state) => [state.updateBackToLanguageForm]);

  const handleBackButton = () => updateBackToLanguageForm(true);

  return { handleBackButton, $t };
}
