import { StateCreator, create } from 'zustand';
import { States, Actions } from './@types';

const states: States = {
  languageButtons: [],
  formFields: {},
  showLanguageForm: true,
  showAccountForm: false,
  showAccountInfos: false,
  backToLanguageForm: false
};

const actions: StateCreator<States & Actions, [], [], Actions> = (set) => ({
  updateFields: (state) => set(() => ({ formFields: state })),
  updateLanguageButtons: (state) => set(() => ({ languageButtons: state })),
  updateBackToLanguageForm: (state) => set(() => ({ backToLanguageForm: state })),
  revealLanguageForm: () =>
    set(() => ({ showLanguageForm: true, showAccountForm: false, showAccountInfos: false })),
  revealAccountForm: () =>
    set(() => ({ showLanguageForm: false, showAccountForm: true, showAccountInfos: false })),
  revealAccountInfos: () =>
    set(() => ({ showLanguageForm: false, showAccountForm: false, showAccountInfos: true }))
});

export default create<States & Actions>((...args) => ({
  ...states,
  ...actions(...args)
}));
