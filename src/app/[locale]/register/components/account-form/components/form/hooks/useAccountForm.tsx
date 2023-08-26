import { useEffect } from 'react';
import { optionProps } from '@/components/select/@types';
import { AccountFormFields, SelectFieldsOptionsProps } from '@/app/[locale]/register/@types';
import { isEmail, normalizePhoneNumber } from '@/utils';

import Input from '@/components/input';
import Select from '@/components/select';
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
    const value = fields[key].value;
    const state = typeof value === 'string' ? !!value.trim() : value?.value !== null;

    fields[key].state = state;
    fields[key].feedback = !state ? 'Campo obrigatório' : '';
    return !state;
  };

  const isValidEmail = (key: string, fields: AccountFormFields): boolean => {
    const value = fields[key].value;
    if (typeof value !== 'string') return false;
    const state: boolean = isEmail(value);
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
    const value = fields[key].value;
    if (typeof value !== 'string') return false;

    const state: boolean = value.length === 15;
    fields[key].state = state;
    fields[key].feedback = !state ? 'Telefone incompleto' : '';
    return !state;
  };

  const selectFieldsOptions: SelectFieldsOptionsProps = {
    gender: [
      { value: null, label: 'Selecione', disabled: true },
      { value: 0, label: 'Homem', disabled: false },
      { value: 1, label: 'Mulher', disabled: false },
      { value: 2, label: 'Outro', disabled: false }
    ]
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
    username: {
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
      value: selectFieldsOptions.gender[0],
      state: true,
      type: 'text',
      placeholder: 'john@example.com',
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

    if (!(name in formFields)) return;
    const stringValue: string = value.trim().length ? value : '';
    let formatedValue: string = formFields[name].mask(stringValue);
    formFields[name].value = formatedValue || stringValue;
    updateFields(formFields);
  };

  const handleSelectOnChange = (option: optionProps, name: string) => {
    formFields[name].value = option;
    updateFields(formFields);
  };

  const renderableFields: JSX.Element[] = Object.entries(formFields).map(
    ([key, value]: [key: string, value: any]) =>
      Object.keys(selectFieldsOptions).includes(key) ? (
        <Select
          key={key}
          name={key}
          label={value.label}
          options={selectFieldsOptions[key]}
          selectedOption={value.value}
          state={value.state}
          feedback={value.feedback}
          onOptionSelect={handleSelectOnChange}
        />
      ) : (
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
