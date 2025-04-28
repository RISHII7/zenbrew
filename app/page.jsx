"use client"

import Hero from '@/components/Hero'
import { useEffect } from 'react'

const Home = () => {
  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      {/* Temporary Div */}
      <div className='h-[4000px]'>

      </div>
    </div>
  )
}

export default Home
