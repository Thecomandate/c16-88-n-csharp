// MyContextProvider.js
import React, { createContext, useState } from 'react';

// Crea el contexto
const MyContext = createContext();

// Proveedor del contexto
export const MyContextProvider = ({ children }) => {
  const [setp, setStep] = useState(0);
  const contextValue = {
    setp,
    setStep,
  };


  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

// Exporta el contexto para que otros componentes puedan consumirlo
export default MyContext;
