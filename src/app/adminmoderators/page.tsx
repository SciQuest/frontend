"use client";
// ./src/app/admin/page.tsx
// @ts-nocheck
// use client

import { AiFillDelete ,AiFillEdit } from 'react-icons/ai';
import PopUp from "./PopUp";
import { useState } from 'react';
import Link from "next/link";


export default function AdminPage() {
    const [showPopup, setShowPopup] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const openPopup = () => {
        setShowPopup(true);
      };
    
      const closePopup = () => {
        setShowPopup(false);
        
      };
 
  
  return (
    
   <div className='flex h-screen'> 
   <div className=' bg-blue-500 items-center justify-center   w-1/5'> 
   <p className=" text-center text-3xl text-white font-semibold pt-[40%] pb-5  "> Benghanem Abderaouf </p>
   <p className=" text-center text-xl text-blue-500 font-semibold py-5  bg-white  "> List of moderators  </p>
   <p className=" text-center text-xl text-white font-semibold  py-5 "> <a href="adminarticles">List of articles </a> </p>
   </div>
 
<div className="relative overflow-x-auto w-4/5 px-2 bg-gray-50  shadow-md sm:rounded-lg">
<p className=" text-center text-4xl  py-12  font-extrabold text-blue-500   mb-2 "> List of moderators </p>
{showButton && ( <button onClick={() => { openPopup();   }}
    className=" bg-blue-500 justify-self-end  rounded-md my-2 mx-2 font-medium text-center hover:scale-105 duration-75 hover:bg-blue-600" title="Ajouter">
         <p className='cursor-pointer text-white   mx-2 my-2  '> + Add </p>
        </button> )}
        {showPopup && <PopUp content={<>
            <div className='bg-black'>jqfjsqfhqhf</div>
         </>}
           closePopup={closePopup} />}


      
       
  
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-blue-500  dark:text-gray-400">
        <thead className=" text- text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=" bg-blue-500">
              
                <th scope="col" className=" text-white px-8 py-3">
                    First Name
                </th>
                <th scope="col" className="text-white px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="text-white px-6 py-3">
                    Email
                </th>
                <th scope="col" className="text-white px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                <th scope="row" className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white">
                 
                    <div className="ps-3">
                        <div className="text-base font-semibold">Neil </div>
                        
                    </div>  
                </th>
                <td className="px-6 py-4 text-blue-500 whitespace-nowrap text-base font-semibold">
                      Sims
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center text-blue-500 whitespace-nowrap text-base font-semibold">
                       neil.sims@ddd.com
                    </div>
                </td>
                <td className="px-6 py-4">     
  
  {showButton && (       <button   onClick={() => { openPopup();   }}
    className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600" title="Modifier">
 < AiFillEdit size={15} className=' text-center text-white cursor-pointer  mx-2 my-2' />
        </button> )}
        {showPopup && <PopUp content={<>
            <div className='bg-black'>jqfjsqfhqhf</div>
         </>}
           closePopup={closePopup} />}

       

        <button 
    className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600" title="Supprimer">
 < AiFillDelete size={15} className=' text-center text-white cursor-pointer  mx-2 my-2' />
        </button>
             
                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <th scope="row" className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white">
                 
                    <div className="ps-3">
                        <div className="text-base font-semibold">Neil </div>
                        
                    </div>  
                </th>
                <td className="px-6 py-4 text-blue-500 whitespace-nowrap text-base font-semibold">
                      Sims
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center text-blue-500 whitespace-nowrap text-base font-semibold">
                       neil.sims@ddd.com
                    </div>
                </td>
                <td className="px-6 py-4">     
  
  {showButton && (       <button   onClick={() => { openPopup();   }}
    className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600" title="Modifier">
 < AiFillEdit size={15} className=' text-center text-white cursor-pointer  mx-2 my-2' />
        </button> )}
        {showPopup && <PopUp content={<>
            <div className='bg-black'>jqfjsqfhqhf</div>
         </>}
           closePopup={closePopup} />}

       

        <button 
    className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600" title="Supprimer">
 < AiFillDelete size={15} className=' text-center text-white cursor-pointer  mx-2 my-2' />
        </button>
             
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <th scope="row" className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white">
                 
                    <div className="ps-3">
                        <div className="text-base font-semibold">Neil </div>
                        
                    </div>  
                </th>
                <td className="px-6 py-4 text-blue-500 whitespace-nowrap text-base font-semibold">
                      Sims
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center text-blue-500 whitespace-nowrap text-base font-semibold">
                       neil.sims@ddd.com
                    </div>
                </td>
                <td className="px-6 py-4">     
  
  {showButton && (       <button   onClick={() => { openPopup();   }}
    className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600" title="Modifier">
 < AiFillEdit size={15} className=' text-center text-white cursor-pointer  mx-2 my-2' />
        </button> )}
        {showPopup && <PopUp content={<>
            <div className='bg-black'>jqfjsqfhqhf</div>
         </>}
           closePopup={closePopup} />}

       

        <button 
    className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600" title="Supprimer">
 < AiFillDelete size={15} className=' text-center text-white cursor-pointer  mx-2 my-2' />
        </button>
             
                </td>
            </tr>
           
            
           
        </tbody>
    </table>
</div>
</div> 
   
  );
}
