
import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [latestproduct,setlatestproduct]=useState([]);
    useEffect(()=>{
        setlatestproduct(products.slice(4,14));
    },[])
    return (
    <div className='my-10'>
        <div className="text-center text-1xl sm:text-3xl py-3">
        <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
        <p className="w-3/4 mx-auto text-gray-700 text-xs sm:text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum sunt aperiam delectus praesentium
        </p>
        </div>
        {/* productitem */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 justify-center">
            {latestproduct.map((item ,index) =>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))}
        </div>
    </div>
    );
}

export default LatestCollection;
