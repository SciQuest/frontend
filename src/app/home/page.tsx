import React from 'react'
import { ProtectedComponent } from "@/lib/auth";
import AboutUs  from "@/app/home/AboutUs"
import Hero  from "@/app/home/Hero"
import Footer  from "@/app/home/Footer"
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
   <ProtectedComponent roles={["ADMIN", "MODERATOR", "USER"]}>
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Footer/>
    </div>
  </ProtectedComponent>
  )
}

export default Home