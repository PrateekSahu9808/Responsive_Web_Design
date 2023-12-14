import React from 'react'
import laptop from '../assets/img/laptop.jpg'
const Expert = () => {
  return (
    <div className='max-w-[1240px] p-2 my-10 mx-auto   md:grid  grid-cols-2'>
        <div className=' md:w-[80%]  col-span-1 text-center '>
            <img src={laptop} alt="" className='inline'/>
        </div>
        <div className='   col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df90] font-bold my-2 '>LEARN FROM EXPERT</h1>
            <p className='my-2 text-justify'>Machine learning is an ongoing trend nowadays. You can train the machine to behave or make an action depending on the condition. It is used when we need to take a decision by studying previous historical data and take appropriate action. The system will learn as you give more and more data as input.
               </p>
               <button className='bg-black text-white p-3 rounded inline w-[30%]'>Get Started</button>
        </div>
    </div>
  )
}

export default Expert