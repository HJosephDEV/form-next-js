import { useEffect } from 'react';

import { AccountFormField } from '@/app/[locale]/register/@types';

import Input from '@/components/input';
import useRegisterStore from '@/stores/register-store';

export default function useAccountForm() {
  const {
    revealLanguageForm,
    revealAccountInfos,
    updateFields,
    backToLanguageForm,
    updateBackToLanguageForm,
    formFields
  } = useRegisterStore();

  const FieldsInitialState: AccountFormField[] = [
    {
      key: 'firstName',
      label: 'Nome',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: {}
    },
    {
      key: 'lastName',
      label: 'Sobrenome',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: {}
    },
    {
      key: 'userName',
      label: 'Nome de usuário',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: {}
    },
    {
      key: 'phone',
      label: 'Telefone',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: {}
    },
    {
      key: 'email',
      label: 'E-mail',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: {}
    },
    {
      key: 'gender',
      label: 'Gênero',
      value: '',
      type: 'text',
      state: true,
      feedback: '',
      validations: {}
    },
    {
      key: 'password',
      label: 'Senha',
      value: '',
      type: 'password',
      state: true,
      feedback: '',
      validations: {}
    },
    {
      key: 'retypePassword',
      label: 'Repita a senha',
      value: '',
      type: 'password',
      state: true,
      feedback: '',
      validations: {}
    }
  ];

  useEffect(() => {
    !formFields.length && updateFields(FieldsInitialState);
  }, []);

  useEffect(() => {
    if (!backToLanguageForm) return;

    updateFields(formFields);
    revealLanguageForm();
    updateBackToLanguageForm(false);
  }, [backToLanguageForm]);

  const handleInputOnChange = (value: string | number, key: string) => {
    const index: number = formFields.findIndex((field) => field.key === key);
    formFields[index].value = value;
  };

  const renderableFields: JSX.Element[] = formFields.map((field: AccountFormField) => (
    <Input
      key={field.key}
      type={field.type}
      defaultValue={field.value}
      inputLabel={field.label}
      feedback={field.feedback}
      state={field.state}
      onChange={({ target }) => handleInputOnChange(target.value, field.key)}
    />
  ));

  const handleNextButton = () => {
    updateFields(formFields);
    revealAccountInfos();
  };

  return { renderableFields, handleNextButton };
}
