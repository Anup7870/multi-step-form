import React, { useContext, useEffect } from "react";
import Context from "../Context"
export default function Contact() {
  const formData = useContext(Context)
  return (
    <div className='w-full h-full '>
      <div className='p px-10 py-3'>
        <div>
          <h1 className='f font-extrabold text-3xl'>Contact Detail</h1>
          <p className=' f font-bold text-xs text-gray-300'>
            Please provide your Contact detals
          </p>
        </div>
        <div className="flex flex-col gap-9 md:gap-2 lg:gap-2 mt-8">
          <h2 className='f font-medium text-xl '>Address :-</h2>
          <input
            type='text'
            class='py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='Adress line 1'
            value={formData.data.address1}
            onChange={(e)=>formData.setData({...formData.data,address1:e.target.value})}
          />
          <input
            type='text'
            class='py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='Adress line 2'
            value={formData.data.address2}
            onChange={(e)=>formData.setData({...formData.data,address2:e.target.value})}
          />
          <div className="flex gap-2">
          <input
            type='text'
            class='py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='Pin code'
            value={formData.data.pin}
            onChange={(e)=>formData.setData({...formData.data,pin:e.target.value})}
          />
          <input
            type='text'
            class='py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='City'
            value={formData.data.city}
            onChange={(e)=>formData.setData({...formData.data,city:e.target.value})}
          />
          </div>
          <input
            type='text'
            class='py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='State'
          />
        </div>
      </div>
    </div>
  );
}
