
import {  createContext,  useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export  const ShopContext = createContext();

const ShopContextProvider= (props)=>{
    const currency='$';
    const delivery=10;
    const [search,setsearch]=useState('');
    const [showsearch,setshowsearch]=useState(false);
    const [cartitems,setcartitems]=useState({});
    const navigate=useNavigate();


    const addtocart= async (itemid,size)=>{
        let cartdata= structuredClone(cartitems);
        if(!size){
            toast.error('Selcet Product Size')
        }
        if(cartdata[itemid]){
            if(cartdata[itemid][size]){
                cartdata[itemid][size]+=1
            }
            else{
                cartdata[itemid][size]=1
            }
        }
        else{
            cartdata[itemid] ={};
            cartdata[itemid][size]=1;
        }
        setcartitems(cartdata)
    }
    // delet cartitems
    const updatacartitems = async (itemid,size,quantity)=>{
        let cartdata =structuredClone(cartitems);
        cartdata[itemid][size]=quantity;
        setcartitems(cartdata);
    }
    // getcartcount
    const getcartcount = ()=>{
        let totlecount= 0;
        for(const items in cartitems){
            for(const item in cartitems[items]){
                try {
                    if (cartitems[items][item] > 0){
                        totlecount += cartitems[items][item];
                    }
                } catch (error){

                }
            }
        }
        return totlecount;
    }
    
    // carttotal
    const getcartamount=()=>{
        let totalamount=0;
        for(const items in cartitems){
            let cartinfo=products.find(product=> product._id === items);
            for( const item in cartitems[items]){
                try {
                    if(cartitems[items][item] >0){
                        totalamount+= cartinfo.price * cartitems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalamount
    }
    const value={
        products,currency,delivery,search,cartitems,setcartitems,
        showsearch,setsearch,setshowsearch,addtocart,getcartcount,updatacartitems,getcartamount,navigate,
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );

}
export default ShopContextProvider