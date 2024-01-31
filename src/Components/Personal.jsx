import React, { useContext } from "react";
import Context from "../Context";
export default function Personal() {
  const formData = useContext(Context);
  return (
    <div className='w-full h-full '>
      <div className='p px-10 py-3'>
        <div>
          <h1 className='f font-extrabold text-3xl'>Personal Detail</h1>
          <p className=' f font-bold text-xs text-gray-300'>
            Please provide your personal detals
          </p>
        </div>
        <div class='flex flex-col gap-10 md:gap-2 lg:gap-2 mt-10'>
          <div>
            <label class='block text-sm font-medium mb-2 dark:text-white'>
              Name
            </label>
            <input
              type='text'
              value={formData.data.name}
              class=' py-3 outline-none px-4 block w-full border border-gray-300   rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='Enter your name'
              onChange={(e)=>formData.setData({...formData.data,name:e.target.value})}
            />
          </div>
          <div>
            <label
              for='input-label'
              class='block text-sm font-medium mb-2 dark:text-white'>
              Email
            </label>
            <input
              type='email'
              id='input-label'
              value={formData.data.email}
              class='py-3 border outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='you@site.com'
              onChange={(e)=>formData.setData({...formData.data,email:e.target.value})}
            />
          </div>
          <div>
            <label
              for='input-label'
              class='block text-sm font-medium mb-2 dark:text-white'>
              Phone
            </label>
            <input
              type='text'
              id='input-label'
              value={formData.data.phone}
              class='py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='9384724824'
              onChange={(e)=>formData.setData({...formData.data,phone:e.target.value})}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
