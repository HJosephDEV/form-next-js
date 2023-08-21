import { StateCreator, create } from 'zustand';
import { States, Actions } from './@types';

const states: States = {
  languageButtons: [],
  formFields: [],
  showLanguageForm: true,
  showAccountForm: false,
  showAccountInfos: false,
  backToLanguageForm: false
};

const actions: StateCreator<States & Actions, [], [], Actions> = (set) => ({
  updateBackToLanguageForm: (state) => set({ backToLanguageForm: state }),
  updateLanguageButtons: (state) => set({ languageButtons: state }),
  revealLanguageForm: () =>
    set({ showLanguageForm: true, showAccountForm: false, showAccountInfos: false }),
  revealAccountForm: () =>
    set({ showLanguageForm: false, showAccountForm: true, showAccountInfos: false }),
  revealAccountInfos: () =>
    set({ showLanguageForm: false, showAccountForm: false, showAccountInfos: true }),
  updateFields: (state) => set({ formFields: state })
});

export const useRegisterStore = create<States & Actions>((...args) => ({
  ...states,
  ...actions(...args)
}));

export default useRegisterStore;
