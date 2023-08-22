import { EventHandler, useEffect } from 'react';

import { AccountFormField, AccountFormFields } from '@/app/[locale]/register/@types';

import Input from '@/components/input';
import useRegisterStore from '@/stores/register-store';

export default function useAccountForm() {
  const isRequired = (key: string): boolean => {
    const state: boolean = !!useRegisterStore.getState().formFields[key].value;
    useRegisterStore.getState().formFields[key].state = state;
    useRegisterStore.getState().formFields[key].feedback = !state ? 'Campo obrigatório' : '';
    return !state;
  };

  const fieldsInitialState: AccountFormFields = {
    firstName: {
      label: 'Nome',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: [isRequired]
    },
    lastName: {
      label: 'Sobrenome',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: [isRequired]
    },
    userName: {
      label: 'Nome de usuário',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: [isRequired]
    },
    phone: {
      label: 'Telefone',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: [isRequired]
    },
    email: {
      label: 'E-mail',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: [isRequired]
    },
    gender: {
      label: 'Gênero',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: [isRequired]
    },
    password: {
      label: 'Senha',
      value: '',
      type: 'password',
      state: true,
      feedback: '',
      validations: [isRequired]
    },
    retypePassword: {
      label: 'Repita a senha',
      value: '',
      type: 'password',
      state: true,
      feedback: '',
      validations: [isRequired]
    }
  };

  useEffect(() => {
    !Object.keys(useRegisterStore.getState().formFields).length &&
      useRegisterStore.getState().updateFields(fieldsInitialState);
  }, []);

  useEffect(() => {
    if (!useRegisterStore.getState().backToLanguageForm) return;

    useRegisterStore.getState().updateFields(useRegisterStore.getState().formFields);
    useRegisterStore.getState().revealLanguageForm();
    useRegisterStore.getState().updateBackToLanguageForm(false);
  }, [useRegisterStore.getState().backToLanguageForm]);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    useRegisterStore.getState().formFields[name].value = value;
  };

  const renderableFields: JSX.Element[] = Object.entries(
    useRegisterStore.getState().formFields
  ).map(([key, value]: [key: string, value: AccountFormField]) => (
    <Input
      key={key}
      name={key}
      type={value.type}
      defaultValue={value.value}
      inputLabel={value.label}
      feedback={value.feedback}
      state={value.state}
      onChange={handleInputOnChange}
    />
  ));

  const handleValidations = () => {
    let isValid = true;

    for (const [key, value] of Object.entries(useRegisterStore.getState().formFields)) {
      for (const validation of value.validations) {
        const containError: boolean = validation(key);
        if (containError) {
          isValid = false;
          break;
        }
      }
    }

    return isValid;
  };

  const handleNextButton = () => {
    const isValid = handleValidations();
    useRegisterStore.getState().updateFields(useRegisterStore.getState().formFields);

    isValid && useRegisterStore.getState().revealAccountInfos();
  };

  return { renderableFields, handleNextButton };
}
