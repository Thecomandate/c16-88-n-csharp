// MyContextProvider.js
import React, { createContext, useEffect, useState } from "react";
// Crea el contexto
const MyContext = createContext();

// Proveedor del contexto
export const MyContextProvider = ({ children }) => {
  const [setp, setStep] = useState(0);
  const [products, setProducts] = useState([]);
  const contextValue = {
    setp,
    setStep,
    products,
    setProducts,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Exporta el contexto para que otros componentes puedan consumirlo
export default MyContext;
