import { StateCreator, create } from 'zustand';
import { States, Actions } from './@types';

const states: States = {
  showLanguageForm: true
};

const actions: StateCreator<States & Actions, [], [], Actions> = (set, get, u) => ({
  updateLanguageForm: (state) => set({ showLanguageForm: state })
});

export const useRegisterStore = create<States & Actions>((...args) => ({
  ...states,
  ...actions(...args)
}));
