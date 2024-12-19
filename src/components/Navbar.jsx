
import  { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink,Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const {setshowsearch,getcartcount}=useContext(ShopContext);
    const [visible,setvisible]=useState(false);
    return (
    <div className='flex items-center justify-between py-4 font-medium'>
        <Link to='/'> <img src={assets.logo} className=' w-24 sm:w-36' alt="logo" /></Link>
        <ul className='hidden sm:flex text-sm gap-5 text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-3/4 h-[1.5px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                <p>COLLECTION</p>
                <hr className='w-3/4 h-[1.5px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap- '>
                <p>ABOUT</p>
                <hr className='w-3/4 h-[1.5px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=> setshowsearch(true)} src={assets.search_icon} alt="" className=" w-4 sm:w-5 cursor-pointer" />
            <div className="group relative">
                <Link to='/login'><img src={assets.profile_icon} alt="logo-profile" className=" w-4 sm:w-5 cursor-pointer" /></Link>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="w-36 py-3 px-4 rounded flex flex-col gap-2 bg-slate-100 text-gray-500">
                        <p className='cursor-pointer hover:text-black'>My Profile </p>
                        <p className='cursor-pointer hover:text-black'>Orders </p>
                        <p className='cursor-pointer hover:text-black'> Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="cart logo" className=" w-4 min-w-4" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center text-[8px] leading-4 aspect-square bg-black text-white rounded-full'>{getcartcount()}</p>
            </Link>
            <img onClick={()=>{setvisible(true)}} src={assets.menu_icon} alt="menu logo" className=" w-5 cursor-pointer sm:hidden" />
        </div>
        {/* navbar for small divces */}
        <div className={` absolute top-0 left-0 bottom-0 bg-white overflow-hidden transition-all ${visible?'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>{setvisible(false)}} className="flex items-center gap-2 p-3 cursor-pointer">
                    <img src={assets.dropdown_icon} alt="dropdown logo" className="h-4 rotate-180" />
                    <p>Black</p>
                </div>
                <NavLink to='/' onClick={()=>{setvisible(false)}} className='py-3 pl-6 border'>
                HOME
                </NavLink>
                <NavLink to='/collection' onClick={()=>{setvisible(false)}} className='py-3 pl-6 border'>
                COLLECTION
                </NavLink>
                <NavLink to='/about' onClick={()=>{setvisible(false)}} className='py-3 pl-6 border'>
                ABOUT
                </NavLink>
                <NavLink to='/contact' onClick={()=>{setvisible(false)}} className='py-3 pl-6 border'>
                CONTACT</NavLink>
            </div>
        </div>
    </div>
    )
}

export default Navbar
