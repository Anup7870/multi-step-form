import React,{useContext} from "react";
import Context from "../Context";
export default function Payment() {
  const formData = useContext(Context);

  const handleChange = (e) => {
    formData.setData({ ...formData.data, [e.target.name]: e.target.value });
  }
  const filterNonNumeric = (inputValue) => {
    return inputValue.replace(/\D/g, "");
  };
  const handleCardNumberInput = (e) => {
    const filteredValue = filterNonNumeric(e.target.value);
    formData.setData({ ...formData.data, card: filteredValue });
  };
  const handlePin =(e)=>{
    const filteredValue = filterNonNumeric(e.target.value);
    if (filteredValue.length <= 4) {
      formData.setData({ ...formData.data, cardPin: filteredValue });
    }
    
  }
  return (
    <div className='w-full h-full '>
      <div className='p px-10 py-3'>
        <div>
          <h1 className='f font-extrabold text-3xl'>Payment Detail</h1>
          <p className=' f font-bold text-xs text-gray-300'>
            Please provide your Payment detals
          </p>
        </div>
        <div className='flex flex-col gap-9 md:gap-2 lg:gap-2 mt-8'>
          <h2 className='f font-medium text-xl '>Card Detail :-</h2>
          <div>
            <div class='relative'>
              <input
                type='text'
                id='hs-trailing-icon'
                name='card'
                class='py-3 border px-4 outline-none pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                placeholder='card no - xxxx-xxxx-xxxx-xxxx'
                onChange={handleCardNumberInput}
                value={formData.data.card}
              />
              <div class='absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4'>
                <svg
                  class='flex-shrink-0 h-4 w-4 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'>
                  <rect width='20' height='14' x='2' y='5' rx='2' />
                  <line x1='2' x2='22' y1='10' y2='10' />
                </svg>
              </div>
            </div>
          </div>
          <input
          name="cardHolder"
            type='text'
            class='py-3 border px-4 outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='Card holder name'
            value={formData.data.cardHolder}
            onChange={handleChange}
          />
          <div className='flex gap-2 mt-1 md:mt-2 lg:mt-2'>
            <input
            name="pin"
              type='text'
              class='py-3 border px-4 outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='Card pin'
              value={formData.data.cardPin}
              onChange={handlePin}
            />
            <input
            name="expDate"
              type='date'
              class='py-3 border px-4 outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='card expiry date'
              value={formData.data.expDate}
              onChange={handleChange}
            />
          </div>
          <input
              type='email'
              id='input-label'
              value={formData.data.email}
              class='py-3 border outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='you@site.com'
              readonly
              
            />
        </div>
      </div>
    </div>
  );
}


