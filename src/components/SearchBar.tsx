"use client";
import React, { useRef, useState } from "react";



import { SlidersHorizontal } from "lucide-react";

// import AccordionRayon from "../../PagesAccordions/AccordionRayon";
const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilter] = useState({});
  const [selectedjours, setSelectedjours] = useState([]);
  const [selectedservices, setSelectedservices] = useState([]);
  const [data, setData] = useState(null);
  const [text, setText] = useState(null);

  //   const handleSearch = async  (e) => {
  //     e.preventDefault();
  //         if (selectedjours.length>0){
  //             filters.JourAccueil = selectedjours.join(',');

  //         }
  //         if (selectedservices.length>0) {
  //             filters.Services = selectedservices.join(',');
  //         }

  //         if(text){
  //           filters.SearchBarInput = text;
  //         }

  //         try{
  //             const response = await  axios.get('http://localhost:8080/search', {params:filters})

  //             const datas = response.data;
  //             setData(datas)
  //             localStorage.removeItem('search')
  //             localStorage.setItem('searchData',JSON.stringify(datas))

  //          }catch(error)  {
  //             console.log(error);
  //         };

  // };

  // useEffect(()=>{
  //   if(!(data ==null)){
  //   console.log(data)
  //   handleClick()
  //   }
  //  },[data])

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  // useEffect(() => {
  //   console.log(text);
  // }, [text]);

  // useEffect(() => {
  //   console.log(selectedjours);
  // }, [selectedjours]);

  // useEffect(() => {
  //   console.log(selectedservices);
  // }, [selectedservices]);

  // const handleInputChange = async (e) => {

  //   const  name  = e.name;
  //   const value = e.value;
  //   console.log(e.name,e.value)
  //   await setFilter({
  //     ...filters,
  //     [name]: value,
  //   });

  // }

  // function handleTextChange(event) {
  //   setText(event.target.value);
  // }

  // function StoreLatLon(name,value){
  //     setFilter((prev)=>{
  //    return{ ...prev,
  //     [name]: value,
  //   }})
  // }

  // const handleJoursChange = (selected) => {

  //   if(selected.length < selectedjours.length){

  //       setSelectedjours(selectedjours.filter((string)=>  {
  //           return selected.findIndex(item => item.value === string) !== -1
  //       }
  //       ))

  //   }else{
  //       setSelectedjours([...selectedjours,selected[selected.length-1].value]);

  //   }
  // };

  // const handleServicesChange = (selected) => {

  //   if(selected.length < selectedservices.length){

  //       setSelectedservices(selectedservices.filter((string)=>  {
  //           return selected.findIndex(item => item.value === string) !== -1
  //            }
  //       ))

  //   }else{
  //       setSelectedservices([...selectedservices,selected[selected.length-1].value]);

  //   }
  // };

  const menuRef = useRef();
  const inputRef = useRef();
  const formRef = useRef();

  return (
    <div className="  mt-1 mx-auto max-w-[900px] w-full flex flex-col justify-center text-center text-black p-4">
      <div className="SearchBar flex flex-col mt-4">
        {/* <form
                    className="flex justify-between items-center max-w-[700px] mx-auto w-full border border-[#ED6361] p-1
          rounded-xl text-white bg-[#63132f] ring ring-[#d84f4f] hover:scale-105 duration-75 pr-2"
                >
                    <div>
                        <input
                            onClick={() => setOpen(!open)}
                            ref={inputRef}
                            className="bg-transparent w-full font-[Inter] focus:outline-none pl-5"
                            type="text" 
                            placeholder="  Saisissez un lieu"
                        />
                    </div>

                     <div> 
                     <a href="/SearchResults">    <button className=" mr-1 p-3  border-[#ED6361] bg-transparent rounded-md hover:scale-105 duration-300 hover:bg-[#ED6361] hover:border-rose-950">
                         <AiOutlineSearch
                                size={20}
                                className="color:#5B112B text-2xl cursor-pointer"
                            /> 
                        </button></a>
                     
                    </div>   
                </form> */}

        <form className=" flex ld:flex-row flex-col justify-center   ">
          <div className="w-full ">
            <label
              // for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Rechercher
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0  flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                // onClick={() => setOpen(!open)}
                //  ref={inputRef}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm  focus:outline-none ring-2 ring-gray-500 rounded-xl text-black bg-[#c4c4c478] "
                placeholder="Search for title, author, keywords, plaintext.."
                // onChange={handleTextChange}
              />
              <div className="  absolute right-3 bottom-[8px] ">
                <button
                  type="submit"
                  className="text-black  bg-[#f8f7f7] ring-2 ring-gray-500 hover:scale-105 duration-300 hover:bg-blue-500 hover:ring-blue-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2   "
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* <div className="max-w-[100px] mx-auto  ld:ml-5 mt-[2px]">
            <AccordionRayon getDistance={handleInputChange} storeLatLon={StoreLatLon}/>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
