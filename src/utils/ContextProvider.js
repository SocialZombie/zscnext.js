import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [walletModalvisibility, setModalvisibility] = useState(false);

  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };

  return (
    <ModalContext.Provider
      value={{
        walletModalHandle,
        walletModalvisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
