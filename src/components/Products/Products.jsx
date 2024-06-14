import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from '../../assets/product/p-1.jpg'
import Button from '../Shared/Button'

const Products = () => {

    const  ProductsData = [
        {
            id: 1,
            image: Img1,
            title: "Boat Headphone",
            price: "120",
            aosDelay: 0
        },

        {
            id: 2,
            image: Img1,
            title: "Boat Headphone",
            price: "120",
            aosDelay: 0
        },

        {
            id: 3,
            image: Img1,
            title: "Boat Headphone",
            price: "120",
            aosDelay: 0
        },

        {
            id: 4,
            image: Img1,
            title: "Boat Headphone",
            price: "120",
            aosDelay: 0
        },
    ]

  return (
    <section>
        <div className="container">
            {/* header titles */}
            <Heading title="Our Products" subtitle="Explore Our Products"/>
            {/* cards row */}
            <div className="mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                    {
                         ProductsData.map((item) => 
                            <div data-aos="fade-up" data-aos-delay="300" className='relative group' key={item.id}>
                                <div>
                                    <img src={item.image} alt="card-image" className='h-[180px] w-[260px] object-cover rounded-md'/>
                                </div>

                                {/* hover button*/}
                                <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                                    <Button text={"Add to cart"} bgColor={"bg-primary"} textColor={"text-white"}/>
                                </div>

                                <div className='leading-7'>
                                    <h2 className='font-bold'>{item.title}</h2>
                                    <span className='font-semibold'>${item.price}</span>
                                </div>
                            </div>
                            
                         )
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products