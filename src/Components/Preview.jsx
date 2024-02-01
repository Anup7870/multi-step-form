import React, { useContext } from "react";
import Context from "../Context";
export default function Preview() {
  const formData = useContext(Context);
  return (
    <div className='p px-10 py-3'>
      <div>
        <h1 className='f font-extrabold text-3xl'>Your Detail</h1>
        <p className=' f font-bold text-xs text-gray-300'>
          All the details you have entered
        </p>
      </div>
      < div class='flex flex-col gap-4 md:gap-1 lg:gap-1 mt-4'>
          <div>
            Name: <span className='font-bold'>{formData.data.name}</span>
          </div>
          <div>
            Email: <span className='font-bold'>{formData.data.email}</span>
          </div>
          <div>
            Phone: <span className='font-bold'>{formData.data.Phone}</span>
          </div>
          <h1>Address Detail</h1>
          <div className=''>
            Address: <span className='font-bold'>{formData.data.address1}</span>
          </div>
          <div className=''>
            Address: <span className='font-bold'>{formData.data.address2}</span>
          </div>
          <div className=''>
            State: <span className='font-bold'>{formData.data.state}</span>
          </div>
          <div className=''>
            City: <span className='font-bold'>{formData.data.city}</span>
          </div>
          <div>
            Pincode: <span className='font-bold'>{formData.data.pin}</span>
          </div>
        
      </div>
    </div>
  );
}
