import React from 'react'




const AboutUS = () => {
  return (
    <>
      <div>
    {/*<div className="flex justify-end ">
        <img src={kid} alt="/" className=""></img>
  </div> */}
      <div className=" my-10 w-full   ">
        <h1 className=' text-4xl font-extralight text-center mb-10'>What is SciQuest</h1>
          {/********************************************************************************************************************* */}
        <div className=" max-w-[800px] lg:max-w-[1100px] mx-auto md:grid  md:gap-10 grid-cols-1 lg:grid-cols-3    flex flex-wrap">
        
         

          <div className=" w-full hover:ring-blue-500 ring ring-gray-500 shadow-xl flex flex-col p-4 my-4 mx-2 rounded-3xl hover:bg-blue-500 hover:text-white md:hover:scale-105 duration-300">
     
            <h2 className="text-2xl font-bold text-center py-8">
           Our Team
            </h2>
            <p className="text-center text-base py-4 mx-2 ld:mx-8 font-medium ">
            Our team is comprised of experienced developers and experts in information technology. Together, we form a multidisciplinary force committed to pushing the boundaries of access to scientific knowledge. Through collaboration and expertise, we strive to create innovative solutions that empower and advance the pursuit of scientific understanding
            </p>
          </div>
          {/********************************************************************************************************************* */}
          <div className=" w-full hover:ring-blue-500 ring ring-gray-500 shadow-xl flex flex-col  p-2 xl:p-4 my-4 mx-2 rounded-3xl hover:bg-blue-500 hover:text-white md:hover:scale-105 duration-300 ">
            
            <h2 className="text-2xl font-bold text-center py-8">
                Our Mission
            </h2>
            <p className="text-center text-base py-4 mx-4 font-medium ">
            Our mission is to simplify the search for scientific articles by providing a competent search engine equipped with multiple advanced filters. We are determined to support the scientific community by facilitating the discovery, sharing, and access to scientific knowledge.
           

            </p>
            
          </div>
          <div className=" w-full hover:ring-blue-500 ring ring-gray-500 shadow-xl flex flex-col p-4  my-4 mx-2 rounded-3xl hover:bg-blue-500 hover:text-white md:hover:scale-105 duration-300">
          
            <h2 className="text-2xl font-bold text-center py-8">
            Our Commitment
            </h2>
            <p className="text-center text-base py-4  mx-2 ld:mx-8 font-medium ">
            We are committed to facilitating access to a comprehensive and up-to-date database, contributing to the acceleration of global scientific progress. 
        Our dedication extends to excellence. Our team works tirelessly to ensure the reliability, relevance, and speed of our search engine.
            </p>
          </div>
        

        </div>
        
      </div>
    </div>
    </>
  )
}

export default AboutUS