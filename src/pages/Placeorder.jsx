
import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Placeorder = () => {
    const {navigate}=useContext(ShopContext);
    const [method,setmethod]=useState('cod');
    return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between pt-4 sm:pt-14 min-h-[80vh]  border-t">
        {/* left side */}
        <div className="flex flex-col gap-4 w-full sm:w-[480px] ">
            <div className="text-base sm:text-2xl my-3">
                <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
            </div>
            <div className="flex gap-3">
                <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full " type="text" placeholder="First name" />
                <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full " type="text" placeholder="Last name" />
            </div>
            <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full" type="email" placeholder="Email address"  />
            <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full" type="text" placeholder="Street" />
            <div className="flex gap-3">
                <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full" type="text" placeholder="City" />
                <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full" type="text" placeholder="State" />
            </div>
            <div className="flex gap-3">
                <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full" type="number" placeholder="Zipcode" />
                <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full" type="text" placeholder="Country" />
            </div>
            <input className="border border-gray-300 px-3.5 py-1.5 rounded w-full" type="number" placeholder="Phone" />
        </div>
        {/* right side */}
        <div className="mt-8">
            <div className="mt-8 sm:min-w-80">
                <CartTotal/>
            </div>
            <div className="mt-12">
                <Title text1={'PAYMENT'} text2={'METHOD'}/>
                {/* ------ pytment method---------- */}
                <div className="flex flex-col lg:flex-row gap-3">
                    <div onClick={()=>setmethod('stripe')} className="flex items-center gap-3 p-2 px-3 border  cursor-pointer">
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ?'bg-green-400':''}`}></p>
                        <img src={assets.stripe_logo} className="mx-4 h-5" alt="" />
                    </div>
                    <div   onClick={()=>setmethod('razorpay')} className="flex items-center gap-3 p-2 px-3 border  cursor-pointer">
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ?'bg-green-400':''}`}></p>
                        <img src={assets.razorpay_logo} className="mx-4 h-5" alt="" />
                    </div>
                    <div  onClick={()=>setmethod('cod')} className="flex items-center gap-3 p-2 px-3 border  cursor-pointer">
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ?'bg-green-400':''}`}></p>
                        <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                    </div>
                </div>
                <div className="w-full text-end mt-8">
                    <button onClick={()=> navigate('/orders')} className="bg-black text-white px-16 py-3 rounded cursor-pointer">PLACE ORDER</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Placeorder
