import React from "react";
import Button from "../Components/Button";
import { Routes,Route } from "react-router-dom";
import Personal from "../Components/Personal";
import Contact from "../Components/Contact";
import Payment from "../Components/Payment";
export default function Forms() {
  return (
    <div className='w-[100%] bg-gray-200 h-[70%] md:h-full lg:h-full relative flex flex-col items-center justify-center '>
      <form className='rounded-xl realtive bg-white h-[80%] w-[90%] md:w-[96%] lg:w-full md:h-[90%] lg z-10 relative md:top-0 lg:top-0 -top-32 '>
        <Routes>
          <Route path="/" element={<Personal/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/preview" element={<p>preview</p>}/>
        </Routes>
      </form>
      <Button />
    </div>
  );
}
