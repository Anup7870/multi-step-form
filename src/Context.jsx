import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // const initialArray = Array(4).fill(false);
  const [routes ,setRoute] = useState([true,false,false,false]);
  // initialArray[0]= true;
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
    cardHolder:"",
    cardPin:"",
    expDate:""
  })
  return (
    <Context.Provider
      value={{data,setData,routes ,setRoute }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
