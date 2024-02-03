
// ./src/app/admin/page.tsx
// @ts-nocheck
// use client


import PopUp from "./PopUp";
import Link from "next/link";


export default function AdminPage() {
 
  
  return (
    
   <div className='flex h-screen'> 
   <div className=' bg-blue-500 items-center justify-center   w-1/5'> 
   <p className=" text-center text-3xl text-white font-semibold pt-[40%] pb-5  "> Benghanem Abderaouf </p>
   <p className=" text-center text-xl text-white font-semibold py-5    "> <a href="adminmoderators">List of moderators </a> </p>
   <p className=" text-center text-xl text-blue-500 font-semibold  py-5 bg-white "> List of articles </p>


   </div>
 
<div className="relative overflow-x-auto w-4/5 px-2 bg-gray-100  shadow-md sm:rounded-lg">
<p className=" text-center text-4xl  py-12  font-extrabold text-blue-500   mb-2 "> List of articles </p>

<div className=' flex mx-auto my-2 items-center justify-center'>
<label class=" mb-2 text-sm font-bold mx-2 text-blue-500 " for="file_input">Upload PDF</label>
<input class=" text-blue-500 px-2 py-4 border border-gray-300 rounded-lg cursor-pointer bg-blue-100  focus:outline-none  " id="file_input" type="file"/>
</div>
        

  <div className='flex items-center justify-center'>
 
    <table className="w-3/5 border-collapse items-center text-sm text-left rtl:text-right text-gray-500 border border-blue-500  dark:text-gray-400">
        <thead className=" text- text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=" bg-blue-500">
              
                <th scope="col" className=" text-white px-8 py-3">
                    Article's Name
                </th>
                <th scope="col" className="text-white px-6 py-3">
                    Author 
                </th>
              
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                <th scope="row" className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white">
                 
                    <div className="ps-3">
                        <div className="text-base font-semibold">How to become a TOP G </div>
                        
                    </div>  
                </th>
                <td className="px-6 py-4  cursor-pointer  text-blue-500 whitespace-nowrap text-base font-semibold">
                      XXX YYY
                </td>
               
              
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <th scope="row" className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white">
                 
                    <div className="ps-3">
                        <div className="text-base font-semibold">A systematic approach </div>
                        
                    </div>  
                </th>
                <td className="px-6 py-4  cursor-pointer  text-blue-500 whitespace-nowrap text-base font-semibold">
                      XXX YYY
                </td>
               
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <th scope="row" className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white">
                 
                    <div className="ps-3">
                        <div className="text-base font-semibold">Earth Life </div>
                        
                    </div>  
                </th>
                <td className="px-6 py-4  cursor-pointer  text-blue-500 whitespace-nowrap text-base font-semibold">
                      XXX YYY
                </td>
               
            </tr>
           
            
           
        </tbody>
    </table>
    </div>
</div>
</div> 
   
  );
}
