import React from "react";
import design from "../assets/bg-sidebar-desktop.svg";
import design2 from "../assets/bg-sidebar-mobile.svg";
import { Link } from "react-router-dom";
export default function Sidenav() {
  return (
    <div
      style={{
        backgroundImage: `url(${design2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`w-full md:w-[30%] lg:w-[30%] h-[30%] md:h-full lg:h-full rounded-none bg-slate-400 md:rounded-xl p-4`}>
      <div className=' text-center font-bold text-xl h-auto md:h-[10%] text-white'>
        Registration
      </div>
      <section className='flex mt-10 md:mt-0 lg:mt-0 justify-around  w-full flex-row md:felx-col lg:flex-col h-full md:h-[70%]'>
        <Link to='/'>
          <div className='flex cursor-pointer gap-0 md:gap-2 md:items-center lg:items-center items-baseline p-0 md:p-2 lg:p-2'>
            <div className='rounded-full bg-white w-[30px] h-[30px] md:w-[20px] md:h-[20px] flex item-center justify-center'>
              1
            </div>
            <p className='hidden md:block lg:block text-gray-100'>Personal Details</p>
          </div>
        </Link>
        <Link to='/contact'>
          <div className='flex cursor-pointer gap-0 md:gap-2 md:items-center lg:items-center items-baseline p-0 md:p-2 lg:p-2'>
            <div className='rounded-full bg-white w-[30px] h-[30px] md:w-[20px] md:h-[20px] flex item-center justify-center '>
              2
            </div>
            <p className='hidden md:block lg:block text-gray-100'>Contact info</p>
          </div>
        </Link>
        <Link to='/payment'>
          <div className='flex cursor-pointer gap-0 md:gap-2 md:items-center lg:items-center items-baseline p-0 md:p-2 lg:p-2'>
            <div className='rounded-full bg-white w-[30px] h-[30px] md:w-[20px] md:h-[20px] flex item-center justify-center '>
              3
            </div>
            <p className='hidden md:block lg:block text-gray-100'>Payment Detail</p>
          </div>
        </Link>
        <Link to='/preview'>
          <div className='flex cursor-pointer gap-0 md:gap-2 md:items-center lg:items-center items-baseline p-0 md:p-2 lg:p-2'>
            <div className='rounded-full bg-white w-[30px] h-[30px] md:w-[20px] md:h-[20px] flex item-center justify-center'>
              4
            </div>
            <p className='hidden md:block lg:block text-gray-100'>Preview</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
