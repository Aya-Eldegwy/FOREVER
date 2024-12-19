
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Orders = () => {
    const {products,currency}=useContext(ShopContext);
    return (
    <div className="border-t pt-14 ">
        <div className="text-2xl  ">
            <Title text1={'MY'} text2={'order'}/>
        </div>
        <div>
            {
                products.slice(5,12).map((item,index)=>(
                    <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                        <div className="flex items-start gap-6 text-sm">
                            <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
                            <div>
                                <p className="font-medium sm:text-base">{item.name}</p>
                                <div className="flex items-center gap-1.5 sm:gap-3 text-center sm:text-start w-full  mt-2 sm:text-base text-gray-600">
                                    <p className="md:text-lg text-gray-800">{currency}{item.price}</p>
                                    <p>Quantity: 1</p>
                                    <p>Size M</p>
                                </div>
                                <p className="mt-2">Data: <span className="text-gray-400">16, Dec, 2024</span></p>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-between">
                        <div className="flex items-center gap-2">
                            <p className="min-w-2 h-2 bg-green-500 border rounded-3xl"></p>
                            <p className="text-sm md:text-base">Ready to ship</p>
                        </div>
                        <button className="border px-5 py-2 rounded-sm">Track Order</button>
                        </div>
                    </div>
                )
            )
            }
        </div>
    
    </div>
    )
}

export default Orders
