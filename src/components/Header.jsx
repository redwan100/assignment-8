import React from 'react'

const Header = () => {
  return (
    <div className='py-4 w-full'>
      <div className='flex justify-between container mx-auto w-[90%]'>
        <h1 className='sm:text-2xl font-semibold'>Programming Cafe</h1>
        <img className='w-[3rem] h-[3rem] object-cover rounded-full block' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="author" />
      </div>
      <hr className='bg-rose-300 w-[90%] mx-auto my-5'/>
    </div>
  );
}

export default Header