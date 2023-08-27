import { useEffect } from 'react';
import { optionProps } from '@/components/select/@types';
import { AccountFormFields, SelectFieldsOptionsProps } from '@/app/[locale]/register/@types';
import { isEmail, normalizePhoneNumber, useTranslationsHook } from '@/utils';

import Input from '@/components/input';
import Select from '@/components/select';
import useRegisterStore from '@/stores/register-store';
import { useRouter } from 'next/navigation';

export default function useAccountForm() {
  const $t = useTranslationsHook('Register');
  const router = useRouter();
  const [
    formFields,
    updateFields,
    backToLanguageForm,
    revealLanguageForm,
    updateBackToLanguageForm
  ] = useRegisterStore((state) => [
    state.formFields,
    state.updateFields,
    state.backToLanguageForm,
    state.revealLanguageForm,
    state.updateBackToLanguageForm
  ]);

  const isRequired = (key: string, fields: AccountFormFields): boolean => {
    const value = fields[key].value;
    const state = typeof value === 'string' ? !!value.trim() : value?.value !== null;

    fields[key].state = state;
    fields[key].feedback = !state ? 'RequiredField' : '';
    return !state;
  };

  const isValidEmail = (key: string, fields: AccountFormFields): boolean => {
    const value = fields[key].value;
    if (typeof value !== 'string') return false;
    const state: boolean = isEmail(value);
    fields[key].state = state;
    fields[key].feedback = !state ? 'InvalidEmail' : '';
    return !state;
  };

  const isEqualPassword = (key: string, fields: AccountFormFields): boolean => {
    const state: boolean =
      (fields.retypePassword.value === fields.password.value && !!fields.password.value) ||
      !fields.password.value;

    fields[key].state = state;
    fields[key].feedback = !state ? 'PasswordNotSame' : '';
    return !state;
  };

  const isPhoneValid = (key: string, fields: AccountFormFields): boolean => {
    const value = fields[key].value;
    if (typeof value !== 'string') return false;

    const state: boolean = value.length === 15;
    fields[key].state = state;
    fields[key].feedback = !state ? 'IncompletePhone' : '';
    return !state;
  };

  const selectFieldsOptions: SelectFieldsOptionsProps = {
    gender: [
      { value: null, label: $t('Select'), disabled: true },
      { value: 0, label: $t('Female'), disabled: false },
      { value: 1, label: $t('Male'), disabled: false },
      { value: 2, label: $t('Other'), disabled: false }
    ]
  };

  const fieldsInitialState: AccountFormFields = {
    firstName: {
      label: 'FirstName',
      value: '',
      type: 'text',
      placeholder: 'TypeHere',
      state: true,
      feedback: '',
      mask: () => null,
      validations: [isRequired]
    },
    lastName: {
      label: 'LastName',
      value: '',
      type: 'text',
      placeholder: 'TypeHere',
      state: true,
      feedback: '',
      mask: () => null,
      validations: [isRequired]
    },
    username: {
      label: 'Username',
      value: '',
      type: 'text',
      placeholder: 'TypeHere',
      state: true,
      feedback: '',
      mask: () => null,
      validations: [isRequired]
    },
    phone: {
      label: 'Phone',
      value: '',
      type: 'text',
      placeholder: 'xx xxxxx - xxxx',
      state: true,
      feedback: '',
      mask: (value: string) => normalizePhoneNumber(value),
      validations: [isRequired, isPhoneValid]
    },
    email: {
      label: 'Email',
      value: '',
      type: 'text',
      placeholder: 'ExampleEmail',
      state: true,
      feedback: '',
      mask: () => null,
      validations: [isRequired, isValidEmail]
    },
    gender: {
      label: 'Gender',
      value: selectFieldsOptions.gender[0],
      state: true,
      type: 'text',
      placeholder: '',
      feedback: '',
      mask: () => null,
      validations: [isRequired]
    },
    password: {
      label: 'Password',
      value: '',
      type: 'password',
      placeholder: '********',
      state: true,
      feedback: '',
      mask: () => null,
      validations: [isRequired]
    },
    retypePassword: {
      label: 'RetypePassword',
      value: '',
      type: 'password',
      placeholder: '********',
      state: true,
      feedback: '',
      mask: () => null,
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
    let formatedValue: string | null = formFields[name].mask(stringValue);
    formFields[name].value = formatedValue === null ? stringValue : formatedValue;
    updateFields(formFields);
  };

  const handleSelectOnChange = (option: optionProps, name: string) => {
    formFields[name].value = option;
    updateFields(formFields);
  };

  const renderableFields: JSX.Element[] = Object.entries(formFields).map(
    ([key, value]: [key: string, value: any]) => {
      const ignoredTranslationList = ['phone', 'password', 'retypePassword'];
      return Object.keys(selectFieldsOptions).includes(key) ? (
        <Select
          key={key}
          name={key}
          label={$t(value.label)}
          options={selectFieldsOptions[key]}
          selectedOption={
            selectFieldsOptions[key].find((test) => test.value === value.value.value) || null
          }
          state={value.state}
          feedback={$t(value.feedback)}
          onOptionSelect={handleSelectOnChange}
        />
      ) : (
        <Input
          key={key}
          name={key}
          type={value.type}
          value={value.value}
          inputLabel={$t(value.label)}
          placeholder={
            !ignoredTranslationList.includes(key) ? $t(value.placeholder) : value.placeholder
          }
          feedback={$t(value.feedback)}
          state={value.state}
          onChange={handleInputOnChange}
        />
      );
    }
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

    if (!isValid) {
      updateFields(formFields);
      return;
    }

    router.push('/login');
  };

  return { renderableFields, handleNextButton, $t };
}
