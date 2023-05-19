import { IExtension } from '@/components/Extension/types';
import { create } from 'zustand';

type ExtensionState = {
  extensions: IExtension[]
};

type ExtensionActions = {
  addExtension: (ext: IExtension) => void;
  removeExtensionAt: (index: number) => void;
  clearExtensions: () => void;
};

const initState: ExtensionState = {
  extensions: [],
}

const useExtensionsStore = create<ExtensionState & ExtensionActions>()((set, get) => ({
  ...initState,
  addExtension: (ext: IExtension) => {
    const currentExtensions = get().extensions;
    set({ extensions: [...currentExtensions, ext] })
  },
  removeExtensionAt: (index) => {
    const currentExtensions = get().extensions;
    currentExtensions.splice(index, 1)
    set({ extensions: currentExtensions })
  },
  clearExtensions: () => set({ extensions: [] }),
}));

export default useExtensionsStore;