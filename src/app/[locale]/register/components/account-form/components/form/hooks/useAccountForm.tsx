import { useEffect, useState } from 'react';
import { AccountFormField, AccountFormFields } from '@/app/[locale]/register/@types';

import Input from '@/components/input';
import useRegisterStore from '@/stores/register-store';

export default function useAccountForm() {
  const [
    formFields,
    updateFields,
    backToLanguageForm,
    revealLanguageForm,
    updateBackToLanguageForm,
    revealAccountInfos
  ] = useRegisterStore((state) => [
    state.formFields,
    state.updateFields,
    state.backToLanguageForm,
    state.revealLanguageForm,
    state.updateBackToLanguageForm,
    state.revealAccountInfos
  ]);

  const isRequired = (key: string, fields: AccountFormFields): boolean => {
    const state: boolean = !!fields[key].value;
    fields[key].state = state;
    fields[key].feedback = !state ? 'Campo obrigatório' : '';
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
    !Object.keys(formFields).length && updateFields(fieldsInitialState);
  }, []);

  useEffect(() => {
    if (!backToLanguageForm) return;

    updateFields(formFields);
    revealLanguageForm();
    updateBackToLanguageForm(false);
  }, [backToLanguageForm]);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formFields[name].value = value;
    updateFields(formFields);
  };

  const renderableFields: JSX.Element[] = Object.entries(formFields).map(
    ([key, value]: [key: string, value: AccountFormField]) => (
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
    )
  );

  const handleValidations = () => {
    let isValid = true;

    for (const [key, value] of Object.entries(formFields)) {
      for (const validation of value.validations) {
        const containError: boolean = validation(key, formFields);
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
    updateFields(formFields);
    isValid && revealAccountInfos();
  };

  return { renderableFields, handleNextButton };
}
