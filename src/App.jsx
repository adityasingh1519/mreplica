import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './assets/Navbar'
import CarouselFade from './assets/CarouselFade'
import Navs from './assets/Navs'
import Home from './assets/Home'
import Footer from './assets/footer';
import Load from './assets/Load';
import Portfolio from './assets/Portfolio';




function App() {

const [isVisible, setIsVisible] = useState(true);

 

  useEffect (() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 100;

      if (scrollHeight > triggerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);



  return (
    <>
    

    <div>
      {isLoading ? <Load /> : <>

      {!isVisible &&  <Navbar/>}

      
   
   <CarouselFade/>    
   
   {isVisible && <ComponentToHide />}

   
   <Home/>
   <Footer/>


       
        
   <Portfolio/>
      
      
      
      
      
      </>}
    </div>

   

    </>
  )
}

function ComponentToHide() {
  return <Navs/>
}

export default App
