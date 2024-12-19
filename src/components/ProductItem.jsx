
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import {Link} from 'react-router-dom'

const ProductItem = ( {id,image,name,price}) => {
    const { currency }=useContext(ShopContext)
    return (
    <div>
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className="overflow-hidden">
        <img src={image[0]} alt="" className="hover:scale-110 transition ease-in-out" />
        <p className="pt-3 pb-3 text-sm">{name}</p>
        <p className="font-medium text-sm">{currency}{price}</p>
        </div>
        </Link>
    </div>
    )
}

export default ProductItem
