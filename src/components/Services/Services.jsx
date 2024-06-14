import React from 'react'

import { FaCarSide } from "@react-icons/all-files/fa/FaCarSide";
import { FaHeadphones } from "@react-icons/all-files/fa/FaHeadphones";
import { FaWallet } from "@react-icons/all-files/fa/FaWallet";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";

const Services = () => {


    const  ServiceData = [
        {
            id: 1,
            icon: <FaCarSide className='text-4xl md:text-5xl text-primary'/>,
            title: "Free Shipping",
            description: "Free shipping on all order",
        },

        {
            id: 2,
            icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
            title: "Safe Money",
            description: "30 Days Money Back",
        },
        
        {
            id: 3,
            icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
            title: "Secure Payment",
            description: "All Payment Secure",
        },

        {
            id: 4,
            icon: <FaHeadphones className='text-4xl md:text-5xl text-primary'/>,
            title: "Online Supoort 24/7",
            description: "Technical Support 24/7",
        },
        
    ]
  return (
    <section className='py-14 md:py-20'>
        <div className="container justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                    ServiceData.map((data) => 
                        <div className='flex flex-col sm:flex-row gap-4 items-center'>
                            {data.icon}
                            <div>
                                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-400 text-sm'>{data.description}</p>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    </section>
  )
}

export default Services