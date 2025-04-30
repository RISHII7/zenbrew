"use client"

import { useEffect } from 'react'

import Hero from '@/components/Hero'
import Menu from '@/components/Menu';
import About from '@/components/About';
import Explore from '@/components/Explore';
import Testimonials from '@/components/Testimonials';
import OpeningHours from '@/components/Opening Hours';

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
      <Testimonials />
      <OpeningHours />
      {/* Temporary Div */}
      <div className='h-[4000px]'>

      </div>
    </div>
  )
}

export default Home
