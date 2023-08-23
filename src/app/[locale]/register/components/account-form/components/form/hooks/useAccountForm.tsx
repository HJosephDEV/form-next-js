import { useEffect, useState } from 'react';
import { AccountFormField, AccountFormFields } from '@/app/[locale]/register/@types';

import Input from '@/components/input';
import useRegisterStore from '@/stores/register-store';
import { isEmail, normalizePhoneNumber } from '@/utils';

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
    const state: boolean = !!fields[key].value.trim();
    fields[key].state = state;
    fields[key].feedback = !state ? 'Campo obrigatório' : '';
    return !state;
  };

  const isValidEmail = (key: string, fields: AccountFormFields): boolean => {
    const state: boolean = isEmail(fields[key].value);
    fields[key].state = state;
    fields[key].feedback = !state ? 'E-mail inválido' : '';
    return !state;
  };

  const isEqualPassword = (key: string, fields: AccountFormFields): boolean => {
    const state: boolean =
      (fields.retypePassword.value === fields.password.value && !!fields.password.value) ||
      !fields.password.value;

    fields[key].state = state;
    fields[key].feedback = !state ? 'As senhas não são iguais' : '';
    return !state;
  };

  const isPhoneValid = (key: string, fields: AccountFormFields): boolean => {
    const state: boolean = fields[key].value.length === 15;
    fields[key].state = state;
    fields[key].feedback = !state ? 'Telefone incompleto' : '';
    return !state;
  };

  const fieldsInitialState: AccountFormFields = {
    firstName: {
      label: 'Nome',
      value: '',
      type: 'text',
      placeholder: 'Digite aqui',
      state: true,
      feedback: '',
      mask: () => '',
      validations: [isRequired]
    },
    lastName: {
      label: 'Sobrenome',
      value: '',
      type: 'text',
      placeholder: 'Digite aqui',
      state: true,
      feedback: '',
      mask: () => '',
      validations: [isRequired]
    },
    userName: {
      label: 'Nome de usuário',
      value: '',
      type: 'text',
      placeholder: 'Digite aqui',
      state: true,
      feedback: '',
      mask: () => '',
      validations: [isRequired]
    },
    phone: {
      label: 'Telefone',
      value: '',
      type: 'text',
      placeholder: 'xx xxxxx - xxxx',
      state: true,
      feedback: '',
      mask: (value: string) => normalizePhoneNumber(value),
      validations: [isRequired, isPhoneValid]
    },
    email: {
      label: 'E-mail',
      value: '',
      type: 'text',
      placeholder: 'john@example.com',
      state: true,
      feedback: '',
      mask: () => '',
      validations: [isRequired, isValidEmail]
    },
    gender: {
      label: 'Gênero',
      value: '',
      type: 'text',
      placeholder: '',
      state: true,
      feedback: '',
      mask: () => '',
      validations: [isRequired]
    },
    password: {
      label: 'Senha',
      value: '',
      type: 'password',
      placeholder: '********',
      state: true,
      feedback: '',
      mask: () => '',
      validations: [isRequired]
    },
    retypePassword: {
      label: 'Repita a senha',
      value: '',
      type: 'password',
      placeholder: '********',
      state: true,
      feedback: '',
      mask: () => '',
      validations: [isRequired, isEqualPassword]
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
    const stringValue: string = value.trim().length ? value : '';
    let formatedValue: string = formFields[name].mask(stringValue);
    formFields[name].value = formatedValue || stringValue;
    updateFields(formFields);
  };

  const renderableFields: JSX.Element[] = Object.entries(formFields).map(
    ([key, value]: [key: string, value: AccountFormField]) => (
      <Input
        key={key}
        name={key}
        type={value.type}
        value={value.value}
        inputLabel={value.label}
        placeholder={value.placeholder}
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
