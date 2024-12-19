import  { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import { useLocation } from 'react-router-dom';


const SearchBar = () => {
    const {search,setsearch,showsearch,setshowsearch} = useContext(ShopContext)
    const location= useLocation();
    const [visible,setvisible]=useState(false)
    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setvisible(true)
        }
        else{
            setvisible(false)
        }
    },[location])
    return showsearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
        <div className="inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 text-sm w-3/4 sm:w-1/2 rounded-full">
        <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='Search' className="flex-1 cursor-pointer outline-none bg-inherit" />
        <img src={assets.search_icon} alt="search-icon" className="w-5" />
        </div>
        <img src={assets.cross_icon} alt="cross-icon" className="inline w-3 cursor-pointer" onClick={()=> setshowsearch(false)} />
    </div>
    ):null;
}

export default SearchBar
