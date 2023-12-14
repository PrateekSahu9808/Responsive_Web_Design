import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' bg-[#2699fb] p-4'>
        <div className='max-w-[1240] md:flex justify-between py-[50px] '>
            <div className=' mx-auto m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
            <span className='text-white'>Sign up to our newsletter and stay up to date</span>
            </div>
            <div className='mx-auto m-2'>
                <input type="text" className='md:w-full p-3 mr-2 text-slate-800 rounded-[5px] mb-2' placeholder='Email'/>
                <button className='bg-black text-white p-3 rounded'>Get Started</button>
                <br />
                <p className='text-white'>
                    we care bout protection of your data .Read our <br/> <a href="" className='text-black'>Privacy Policy</a> 
                </p>
            </div>
           
        </div>
    </div>
  )
}

export default NewsLetter