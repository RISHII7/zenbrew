"use client"

import { useEffect } from 'react'

import Hero from '@/components/Hero'
import About from '@/components/About';
import Explore from '@/components/Explore';
import Menu from '@/components/Menu';

const Home = () => {
  // Add Locomotive Scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      <About />
      <Menu />
      {/* Temporary Div */}
      <div className='h-[4000px]'>

      </div>
    </div>
  )
}

export default Home
