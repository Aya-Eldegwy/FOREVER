
import { useState } from "react"

const Login = () => {
    const [currentstate,setcurrentstate]=useState('Sign Up');
    const submithandler = async (event) =>{
        event.preventDefault();
    }
    return (
    <from  onSubmit={submithandler} className='flex flex-col items-center gap-4 w-90% sm:max-w-96 mx-auto mt-14 text-gray-800'>
        <div className="inline-flex items-center gap-2 mt-10 mb-3 ">
            <p className="text-3xl prata-regular">{currentstate}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        { currentstate === 'Login' ? '':  <input type="text" className="border border-gray-800 px-3 py-2 w-full" placeholder="Name" required />}
        <input type="email" className="border border-gray-800 px-3 py-2 w-full" placeholder="Email" required />
        <input type="password" className="border border-gray-800 px-3 py-2 w-full" placeholder="Password" required />
        <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password?</p>
        
        {
            currentstate === 'Login'
            ? <p onClick={()=> setcurrentstate('Sign Up')} className="cursor-pointer">Create accunt</p>
            : <p onClick={()=> setcurrentstate('Login')} className="cursor-pointer">Login Here</p>
        }
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentstate === 'Login'? 'Sign In':'Sign Up'}</button>
    </from>
    )
}

export default Login
