import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const Blogs = () => {

    const BlogData = [
        {
            title: "How to choose perfect smartwatch",
            subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
            published: "Jan 20, 2024 by Dilshad",
            image: Img1
        },

        {
            title: "How to choose perfect gadget",
            subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
            published: "Jan 20, 2024 by Satya",
            image: Img2
        },

        {
            title: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
            subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
            published: "Jan 20, 2024 by Sabir",
            image: Img3
        },
    ]
  return (
    <section className='pb-24'>
        <div className="container">
            {/* header titles */}
            <Heading title="Recent News" subtitle="Explore Our Blogs"/>

            {/* Blog section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {
                    BlogData.map((item) => 
                        <div className='bg-white dark:bg-gray-900'>
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={item.image} alt="blog-image" />
                            </div>

                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{item.published}</p>
                                <p className='font-bold line-clamp-1'>{item.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{item.subtitle}</p>
                            </div>
                        </div>
                    
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Blogs