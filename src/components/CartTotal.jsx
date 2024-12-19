import  { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {currency,delivery,getcartamount}=useContext(ShopContext);
    return (
    <div className='w-full'>
        <div className="text-3xl">
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
        <div className="flex flex-col gap-2 mt-2 text-xs">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency}{getcartamount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping Free</p>
                <p>{delivery}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Total</p>
                <p>{currency}{getcartamount() === 0 ? 0 : getcartamount() + delivery}</p>
            </div>
        </div>
    
    </div>
    )
}

export default CartTotal
