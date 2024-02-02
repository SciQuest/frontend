import React from 'react'

import SearchResults from '@/app/results/SearchResults'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import Filters from '@/components/Filters'
const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col justify-center items-center space-x-2'>
      <SearchBar/>
    
      <Filters/>
      </div>
      <SearchResults/>
    </div>
  )
}

export default page