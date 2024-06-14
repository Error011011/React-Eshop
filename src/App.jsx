import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';

import headphone from './assets/hero/headphone.png';
import watch from './assets/category/smartwatch.png'
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css'


const App = () => {

  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bases",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur",
    bgColor: "#f42c37"
  }

  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy hours",
    date: "10 Jan to 28 Jan",
    image: watch,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur",
    bgColor: "#2dcc6f"
  }

  useEffect(() => {
    Aos.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    )
    Aos.refresh();
  }, [])

  return <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden '>
    <Navbar/>
    <Hero />
    <Category/>
    <Services/>
    <Banner data={BannerData}/>
    <Products/>
    <Banner data={BannerData2}/>
    <Blogs/>
    <Partners/>
    <Footer/>


  </div>
    
}

export default App