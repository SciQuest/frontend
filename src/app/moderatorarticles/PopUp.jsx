import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai';

function PopUp(props) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        {/* <button onClick={props.closePopup} className="text-gray-700 hover:text-gray-900 absolute top-2 right-2">
          Close
        </button> */}
         <button onClick={props.closePopup} className=" bg-[#f30202] p-2 sm:p-0 absolute top-2 right-2 rounded-md font-medium text-center my-2  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-[#ff4a4a] " title="Fermer">
          < AiFillCloseCircle size={20} className=' text-center text-white  cursor-pointer  xs:mx-2 xs:my-2 md:mx-3 md:my-3' />
        </button>
        {props.content}
      </div>
    </div>
  );
}

export default PopUp;
