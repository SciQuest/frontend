import React from 'react'
import FavoritesArticles from './FavoritesArticles'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <h1 className='text-center text-2xl md:text-3xl font-extralight my-5'> Your Saved Articles </h1>
        <FavoritesArticles/>
        </div>
    </div>
  )
}

export default page