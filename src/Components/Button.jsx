import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Button() {
  
  
  return (
    <div className='bg-white h-[10%] md:h-[15%] w-full flex items-center justify-around'>
      <button
        type='button'
        class='py-3 w-[15%]  px-4 flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-500 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
        Back
      </button>
      <button
        type='button'
        class='py-3  w-[15%] px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
        Next
      </button>
    </div>
  );
}
