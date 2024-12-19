
import { assets } from '../assets/assets';

const Footer = () => {
    return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40">
        <div>
            <img src={assets.logo} alt="logo" className="w-32 mb-5" />
            <p className="w-full sm:w-3/4 text-gray-600 "> Lorem ipsum dolor, sit amet consectetur adipisicing elit.   labore inventore iure quae minus, consequuntur quisquam </p>
        </div>
        <div>
            <p className="mb-5 font-medium text-xl">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className="font-medium text-xl mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-434-657-2442</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
    </div>
    <div>
        <hr />
        <p className='text-center py-5 text-sm  '>Copyright 2024@ forever.com - All Right Reserved</p>
    </div>
    </div>
    )
}

export default Footer
