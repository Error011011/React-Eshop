import React from 'react'
import Button from '../Shared/Button'

import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Image4 from '../../assets/category/gaming.png'
import Image5 from '../../assets/category/vr.png'
import Image6 from '../../assets/category/speaker.png'

const Category = () => {
  return (
    <section className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
           
                    {/* first col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex flex-col items-start gap-1 justify-center'>
                        <p className='text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold '>With</p>
                        <p className=' mb-2 text-4xl xl:text-5xl font-bold opacity-20'>Earphone</p>
                        <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                        <img className='w-[320px] h-[320px] absolute bottom-0 ' src={Image1} alt="image" />
                    </div>
               
                {/* second col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex flex-col items-start gap-1 justify-center'>
                        <p className='text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold '>With</p>
                        <p className=' mb-2 text-4xl xl:text-5xl font-bold opacity-40'>Gadget</p>
                        <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandYellow"}/>
                        <img className='w-[320px]  absolute -right-10 top-[20px] lg:top-[40px] ' src={Image2} alt="image" />
                </div>

                {/* third col */}
                <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex flex-col items-start gap-1 justify-center'>
                        <p className='text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold '>With</p>
                        <p className=' mb-2 text-4xl xl:text-5xl font-bold opacity-40'>Laptop</p>
                        <Button text="Browse" bgColor={"bg-white"} textColor={"text-primary"}/>
                        <img className='w-[250px]  absolute top-1/2  -translate-y-1/2 -right-0  ' src={Image3} alt="image" />
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* first span-2 col */}
                    <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex flex-col items-start gap-1 justify-center'>
                            <p className='text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold '>With</p>
                            <p className=' mb-2 text-4xl xl:text-5xl font-bold opacity-40'>Gaming</p>
                            <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                            <img className='w-[250px]  absolute top-1/2  -translate-y-1/2 -right-0  ' src={Image4} alt="image" />
                    </div>
                
                    {/* second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen text-white rounded-3xl relative h-[320px] flex flex-col items-start gap-1 justify-center'>
                        <p className='text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold '>With</p>
                        <p className=' mb-2 text-4xl xl:text-5xl font-bold opacity-20'>VR</p>
                        <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandGreen"}/>
                        <img className='w-[300px] h-[300px] absolute bottom-0 right-0 ' src={Image5} alt="image" />
                    </div>
             
                {/* third col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex flex-col items-start gap-1 justify-center'>
                        <p className='text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold '>With</p>
                        <p className=' mb-2 text-4xl xl:text-5xl font-bold opacity-40'>Gadget</p>
                        <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandBlue"}/>
                        <img className='w-[200px] absolute bottom-0 right-0' src={Image6} alt="image" />
                </div>
          

                

            </div>
            

        </div>
    </section>
  )
}

export default Category