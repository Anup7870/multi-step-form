import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data,setData] = useState({
    name:"",
    email:"",
    phone:"",
    address1:"",
    address2:"",
    pin:"",
    city:"",
    state:"",
    card:"",
    cardname:"",
    expDate:""
  })
  return (
    <Context.Provider
      value={{data,setData }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
