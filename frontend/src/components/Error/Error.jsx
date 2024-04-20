import React from 'react'

export const Error = ({errMessage}) => {
  return <div className='flex items-center justify-center w-full h0='>
    <h3 className="text-headingColor text=[20px] leading-[30px] font-semibold">
        {errMessage}
    </h3>
  </div>
}
export default Error; 