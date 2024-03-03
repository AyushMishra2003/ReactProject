import React from 'react'

const Letter = () => {
  return (
    <div className='border border-black w-[100vw] p-[1.5rem] flex flex-col items-center gap-[1rem] bg-[#d4d5d8c6]'>
      <p className='text-center text-[1.5rem] text-[#3373e2]'>Join Our Newsletter</p>
      <p className='w-[18rem] text-center sm:w-[34rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, omnis?</p>
      <div className='relative'>
        <input className='border border-black rounded-[1rem] p-[0.3rem] px-[2rem] sm:px-[9rem]' type="text" placeholder='' />
        <button className='border border-black p-[0.3rem] px-[1rem] text-white rounded-[2rem] bg-[#47B2E4]  absolute right-[0rem] top-[0.1rem] w-fit border-none'>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Letter
