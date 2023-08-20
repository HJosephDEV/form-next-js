import { StateCreator, create } from 'zustand';
import { States, Actions } from './@types';

const states: States = {
  showLanguageForm: true,
  showAccountForm: false,
  showAccountInfos: false
};

const actions: StateCreator<States & Actions, [], [], Actions> = (set) => ({
  revealLanguageForm: () =>
    set({ showLanguageForm: false, showAccountForm: false, showAccountInfos: false }),
  revealAccountForm: () =>
    set({ showLanguageForm: false, showAccountForm: true, showAccountInfos: false }),
  revealAccountInfos: () =>
    set({ showLanguageForm: false, showAccountForm: false, showAccountInfos: true })
});

export const useRegisterStore = create<States & Actions>((...args) => ({
  ...states,
  ...actions(...args)
}));

export default useRegisterStore;
