import React, { createContext } from "react";

export const UIContext = createContext({
  alertModalOpen: false,
  promptModalOpen: false,
  updatePromptModalOpen: (value: boolean) => {},
  updateAlertModalOpen: (value: boolean) => {},
});

interface UIContextProviderProps {
  children: React.ReactNode;
}

const UIContextProvider: React.FC<UIContextProviderProps> = ({ children }) => {
  const [alertModalOpen, setAlertModalOpen] = React.useState(false);
  const [promptModalOpen, setPromptModalOpen] = React.useState(false);

  const updatePromptModalOpen = (value: boolean) => {
    setPromptModalOpen(value);
  };

  const updateAlertModalOpen = (value: boolean) => {
    setAlertModalOpen(value);
  };

  const value = {
    alertModalOpen,
    promptModalOpen,
    updateAlertModalOpen,
    updatePromptModalOpen,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
export default UIContextProvider;
