import React from 'react'

const Banner = ({data}) => {
  return (
    <section className='py-12 min-h-[550px] flex justify-center items-center'>
        <div style={ {backgroundColor: data.bgColor} } className="container  rounded-3xl"> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white">

                <div className='p-6 sm:p-8'>
                  <p data-aos="fade-up" className='text-sm'>{data.discount}</p>
                  <h data-aos="zoom-out" className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h>
                  <p data-aos="fade-up" className='text-sm'>{data.date}</p>
                </div>
                <div data-aos="zoom-in" className='h-full flex items-center '>
                  <img src={data.image} alt="banner-image" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover ' />
                </div>
                <div data-aos="slide-right" className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                  <p data-aos="fade-up" className='font-bold text-xl'>{data.title2}</p>
                  <p data-aos="zoom-out" className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                  <p  data-aos="fade-up"className='text-sm tracking-wide  leading-5'>{data.title4}</p>
                  <button style={{color: data.bgColor}} className=" bg-white py-2 px-4 max-w-[120px] rounded-full"> Shop now</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Banner