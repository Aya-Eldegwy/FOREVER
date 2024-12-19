
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
    const {productid}= useParams();
    const {products,currency,addtocart}=useContext(ShopContext);
    const [productdata,setproductdata]=useState('');
    const [image,setimage]=useState([]);
    const [size,setsize]=useState('');
    const fetchproductdata= async () =>{
        products.map(item =>{
            if(item._id === productid){
                setproductdata(item);
                setimage(item.image[0]);
                return null;
            }
        })
    };
    useEffect(()=>{
        fetchproductdata();
    },[productid,products])
    return productdata ? (
    <div className=" border-t-2 pt-10 transition-opacity  ease-in duration-500 opacity-100">
        <div className=" flex gap-12  flex-col  sm:flex-row  sm:gap-12">
            {/* product image */}
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row  ">
                <div className=" flex sm:flex-col  overflow-x-auto  sm:overflow-y-auto justify-between  sm:justify-normal sm:w-[18.7%] w-full ">
                    {productdata.image.map((item,index) => (
                        <img onClick={()=> setimage(item)} src={item} key={index} alt="image" className="w-[24%] sm:w-full cursor-pointer mb-3 flex-shrink-0" />
                    ))}
                </div>
                <div className="w-full sm:w-[80%]">
                    <img src={image} alt="image" className="w-full h-auto" />
                </div> 
            </div>
            {/* ----- product info ------ */}
            <div className="flex-1">
                <h1 className="font-medium text-2xl mt-2">{productdata.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <img src={assets.star_icon} alt="star" className="w-3 5" />
                    <img src={assets.star_icon} alt="star" className="w-3 5" />
                    <img src={assets.star_icon} alt="star" className="w-3 5" />
                    <img src={assets.star_icon} alt="star" className="w-3 5" />
                    <img src={assets.star_dull_icon} alt="star-dull" className="w-3 5" />
                    <p className="pl-2 font-medium">(122)</p>
                </div>
                <p className="font-medium text-3xl mt-5 ">{currency}{productdata.price}</p>
                <p className="mt-5 text-gray-500 w-4/5">{productdata.description}</p>
                <div className="flex flex-col gap-4 my-8">
                    <p className="font-medium">Select Size</p>
                    <div className="flex gap-2">
                    {productdata.sizes.map((item,index)=>(
                        <button onClick={()=>setsize(item)} className={` border px-4 py-2 bg-gray-100 ${size === item ? 'border-orange-500':''}`} key={index}>{item}</button>
                    ))}
                    </div>
                </div>
                <button onClick={()=> addtocart(productdata._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700  ">ADD TO CART</button>
                <hr className="my-8 sm:w-4/5"/>
                <div className="text-sm text-gray-500 mt-3 flex flex-col gap-1">
                    <p> 100% Original product.</p>
                    <p> Cash on delivery is available on this product.</p>
                    <p> Easy return and exchange policy within 7 days.</p>
                </div>
            </div>
        </div>
        {/* description adn reviwe */}
        <div className="mt-20">
            <div className="flex gap-1">
                <p className="border px-5 py-3 text-sm ">Description</p>
                <p className="border px-5 py-3 text-sm ">Reviews (122)</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 mt-2">
                <p className="md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt illum neque, est ab aperiam. Sint odio numquam, tempore harum exercitationem voluptate quibusdam unde esse ullam! Laborum sunt facere iusto!</p>
                <p className="md:w-4/5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, provident ad quis animi incidunt, eligendi quas quam enim nam ipsum sit repudiandae optio velit id maiores suscipit similique cum hic!</p>
            </div>
        </div>
        <RelatedProducts category={productdata.category} subCategory={productdata.subCategory}/>
    </div>
    ): <div className="opacity-0"></div>
}

export default Product
