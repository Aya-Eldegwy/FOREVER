

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => { 
    const {products,search ,showsearch}=useContext(ShopContext);
    const [showfilter,setshowfilter]=useState(false);
    const [productfilter,setproductfilter]=useState([]);
    const [category,setcategory]=useState([]);
    const [subcategory,setsubcategory]=useState([]);
    const [sorttype,setsorttype]=useState('relavent');
    // state category
    const togglecategory =(e)=>{
        if(category.includes(e.target.value)){
            setcategory(prev =>prev.filter(item => item !== e.target.value))
        } 
        else{
            setcategory(prev => [...prev,e.target.value])
        }
        }
        // state subcategory
    const togglesubcategory = (e)=>{
        if(subcategory.includes(e.target.value)){
            setsubcategory(prev => prev.filter(item => item !== e.target.value))
        }
        else{
            setsubcategory(prev => [...prev,e.target.value])
        }
    }
    // applyfilter
    const applyfilter = ()=>{
        let productscopy=products.slice();
        if(search && showsearch){
            productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length > 0){
            productscopy= productscopy.filter(item => category.includes(item.category));
        }
        if(subcategory.length > 0){
            productscopy= productscopy.filter(item => subcategory.includes(item.subCategory));
        }
        setproductfilter(productscopy);
    }
    // sortproduct
    const sortproduct= ()=>{
        let fpcopy= productfilter.slice();
        switch (sorttype){
            case 'low-high':
            setproductfilter(fpcopy.sort((a,b)=>(a.price - b.price)))
            break;
            case 'high-low':
            setproductfilter(fpcopy.sort((a,b)=>(b.price - a.price)))
            break;
            default:
                applyfilter();
                break;
        }
    }
        useEffect(()=>{
        applyfilter();
    },[category,subcategory,search,showsearch]);
    //  useeffect sorttype
    useEffect(()=>{
        sortproduct();
    },[sorttype])
    return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 pt-10 border-t">
        {/* filter options */}
        <div className="min-w-60">
        <p onClick={()=>{setshowfilter(!showfilter)}} className=" my-3 text-2xl  flex items-center gap-2 cursor-pointer">Filters
            <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showfilter?'rotate-180' :''}`} />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-4 mt-6 ${showfilter?'':'hidden'} sm:block `}>
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className="flex gap-1">
                    <input type="checkbox" className="w-3" value={'Men'} onChange={togglecategory}  />Men
                </p>
                <p className="flex gap-1">
                    <input type="checkbox" className="w-3" value={'Women'} onChange={togglecategory}  />Women
                </p>
                <p className="flex gap-1">
                    <input type="checkbox" className="w-3" value={'Kids'} onChange={togglecategory}  />Kids
                </p>
            </div>
        </div>
        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-4 my-6 ${showfilter?'':'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className="flex gap-1">
                    <input type="checkbox" className="w-3" value={'Topwear'} onChange={togglesubcategory} /> Topwear
                </p>
                <p className="flex gap-1">
                    <input type="checkbox" className="w-3" value={'Bottomwear'}  onChange={togglesubcategory}/>Bottomwear
                </p>
                <p className="flex gap-1">
                    <input type="checkbox" className="w-3" value={'Winterwear'} onChange={togglesubcategory} />Winterwear
                </p>
            </div>
        </div>
        </div>
        {/* ride side */}
        <div className="flex-1">
            <div className="flex  gap-2 flex-col sm:flex-row  sm:justify-between mb-5  sm:text-base lg:text-2xl">
                <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                <select onChange={(e)=> setsorttype(e.target.value)} className="  border-2 border-gray-300  px-2 text-sm " >
                    <option value="relavent">Sort by: Relavent</option>
                    <option value="low-high" >Srot by: Low to High</option>
                    <option value="high-low">Srot by: High to Low</option>
                </select>
            </div>
            {/* products map */}
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-4 gap-y-6">
                {productfilter.map(( item ,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
                ))}
            </div>
        </div>
    </div>
    )
};

export default Collection
