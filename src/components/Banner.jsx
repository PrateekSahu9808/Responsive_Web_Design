import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
     <div className='max-w-[1240px] mx-auto text-center my-[100px] '>
        <div className='text-xl md:text-3xl font-bold mb-4 md:p-[24px]'>
            Learn with us
        </div>
        <h2 className='text-white font-bold text-3xl  md:text-[80px] md:p[24px] '>Grow with us</h2>
        <div className='text-[20px] md:text-[50px] md:p-[24px] text-white font-bold '>Learn   
        <Typed className='p-2'
                    strings={['web Development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                    
                /> </div>
                <button className='bg-black text-white p-3 rounded'>Get Started</button>
     </div>
    </div>
  )
}

export default Banner