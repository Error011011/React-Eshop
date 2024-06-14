import React from 'react'
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow"
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const Footer = () => {

    const FooterLinks = [
        {
            title: "Home",
            link: "/#"
        },

        {
            title: "About",
            link: "/#"
        },

        {
            title: "Contact",
            link: "/#"
        },

        {
            title: "Blog",
            link: "/#"
        },
    ]

  return (
    <section className='dark:bg-gray-950 py-8'>
        <div className="container">   
            <div className="grid md:grid-cols-4 pb-20 pt-5">

                 {/* company details */}
                <div className="px-4">
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                        <p className='text-gray-600 lg:pr-24 pt-3 dark:text-white/70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam accusamus .</p>
                        <p className='text-gray-600 mt-4'>Made with 💖 by The Coding Journey</p>
                        <a href="#" className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit our YouTube channel</a>
                </div>

             
                {/* footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-5'>

                    <div className='px-4'>
                        <h1 className='mb-4 text-xl font-semibold sm:text-left'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((item, index) => <li key={index}><a className='text-gray-600 hover:text-black duration-300 dark:hover:text-white' href={item.link}>{item.title}</a> </li>)
                            }
                        </ul>
                    </div>

                    <div className='px-4'>
                        <h1 className='mb-4 text-xl font-semibold sm:text-left'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((item, index) => <li key={index}><a className='text-gray-600 hover:text-black duration-300 dark:hover:text-white' href={item.link}>{item.title}</a> </li>)
                            }
                        </ul>
                    </div>

                </div>

                {/* adress */}
                <div className='px-4 col-span-2 sm:col-auto space-y-4'>
                    <h1 className='mb-4 text-xl font-semibold sm:text-left'>Address</h1>
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow/>
                        <p>Noida , Uttar Pradesh</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaMobileAlt/>
                        <p>+91 1234567890</p>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <a href="#"><FaInstagram className='text-3xl hover:text-primary duration-200' /></a>
                        <a href="#"><FaFacebook className='text-3xl hover:text-primary duration-200' /></a>
                        <a href="#"> <FaLinkedin className='text-3xl hover:text-primary duration-200' /></a>
                       
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Footer