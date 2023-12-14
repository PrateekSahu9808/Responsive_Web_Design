import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px] px-2'>
        <div className='md:grid grid-cols-3 gap-3 max-w-[1240px] mx-auto'>
            <div className='shadow-xl  h-[500px]  my-4 hover:scale-105 duration-500 border border-purple-600'></div>
            <div className='shadow-xl  h-[500px] my-4  bg-slate-100 hover:scale-105 duration-500 border border-yellow-200'></div>
            <div className='shadow-xl  h-[500px] my-4  hover:scale-105 duration-500 border border-red-200'></div>
        </div>

    </div>
  )
}

export default Plans