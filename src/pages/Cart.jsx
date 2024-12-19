
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {products,currency,cartitems,updatacartitems,navigate}= useContext(ShopContext);
    const [cartdata,setcartdata]= useState([]);


    useEffect(()=>{
        const tempdata = [];
        for(const items in cartitems){
            for(const item in cartitems[items]){
                if(cartitems[items][item] > 0){
                    tempdata.push({
                        _id: items,
                        size: item,
                        quantity: cartitems[items][item]
                    })
                    
                }
            }
        }
        setcartdata(tempdata);
    },[cartitems])
    return (
    <div className="border-t pt-14">
        <div className="text-3xl  mb-3">
            <Title text1={'YOUR'} text2={'CART'}/>
        </div>

        < div>
        {
        cartdata.map((item,index)=> {
            console.log(cartdata)
            const prodductData= products.find(product => product._id === item._id);

            return(
            <div key={index}  className="py-4 border-t border-b  text-gray-700 grid grid-cols-[3fr_auto_auto] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-6">
                <div className="flex items-start gap-5">
                    <img src={prodductData.image[0]} alt="" className="w-16 sm:w-20" />
                    <div>
                    <p className="text-xs sm:text-lg font-medium">{prodductData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                        <p>{currency}{prodductData.price}</p>
                        <p className="px-1 sm:px-3 sm:py-1 border bg-slate-100">{item.size}</p>
                    </div>
                    </div>
                </div> 
                <input onChange={(e)=> e.target.value === ''|| e.target.value === '0'? null : updatacartitems(item._id,item.size,Number(e.target.value))} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=> updatacartitems(item._id,item.size,0)} src={assets.bin_icon} alt="" className="  w-4 cursor-pointer" />
                
            </div>
            )
        })}
        </div>
        <div className=" flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
                <CartTotal/>
                <div className="w-full text-end">
                    <button onClick={()=> navigate('/placeorder')} className="bg-black text-white px-8 py-3 my-8">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    
    </div>
    )
}

export default Cart
