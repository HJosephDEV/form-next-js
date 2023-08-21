import useRegisterStore from '@/stores/register-store';

export default function useAccountFormHeader() {
  const { updateBackToLanguageForm } = useRegisterStore();

  const handleBackButton = () => updateBackToLanguageForm(true);

  return { handleBackButton };
}
