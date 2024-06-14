import React from "react";

import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart'
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown';

import DarkMode from "./DarkMode";




const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },

    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },

    {
        id: 3,
        name: "About",
        link: "/#about",
    },

    {
        id: 4,
        name: "Blogs",
        link: "/#blogs",
    },
]


const DropdownLinks = [
   {
    id: 1,
    name: "Trending products",
    link: "/#"
   }, 

   {
    id: 2,
    name: "Best selling",
    link: "/#"
   },

   {
    id: 3,
    name: "Top rated",
    link: "/#"
   } 
]

const Navbar = () => {
    return ( 
        <header className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* logo and links  */}
                    <div className="flex items-center gap-4">
                        <a className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"  href="#!">Eshop</a>


                        {/* menu */}
                        <div className="hidden lg:block">
                            <ul className="flex  items-center gap-4">
                                {
                                    MenuLinks.map((data, index) => 
                                            <li key={index}>
                                                <a className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 " href={data.link}>{data.name}</a>
                                            </li>    
                                    )
                                }
                                {/* Dropdown*/}
                                <li className="relative cursor-pointer group ">
                                    <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">Quick Links
                                        <span><FaCaretDown className="group-hover:rotate-180 duration-300"/></span>
                                    </a>
                                    
                                    {/* dropdown links */}
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                                        <ul className="space-y-2">
                                            {
                                                DropdownLinks.map((data, index) => 
                                                    <li key={index}>
                                                        <a className="text-gray-500 dark:hover:text-white duration-200 inline-block p-2 w-full hover:bg-primary/20 rounded-md" href={data.link}>{data.name}</a>
                                                    </li>
                                                )
                                            }
                                        </ul>

                                    </div>
                                    
                                    
                                </li>

                            </ul>
                        </div>

                    </div>
                    
                {/* navbar section  */}
                <div className="flex justify-between items-center gap-4">

                    {/* search bar */}
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="search" className="search-bar" />
                        <FiSearch  className="text-xl text-gray-600 group-hover:text-pretty group-hover:text-primary duration-200 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 "/>
                    </div>
                    
                    <button className="relative p-3">
                        <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400"/>
                        <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-white flex justify-center items-center text-xs ">
                            4
                        </div>
                    </button>

                    {/* dark mode toggle*/}
                    <div><DarkMode/></div>
                </div>
                    


                </div>
            </div>
        </header>
        
     );
}
 
export default Navbar;