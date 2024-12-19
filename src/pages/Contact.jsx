

import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const Contact = () => {
    return (
    <div>
        <div className="text-center text-2xl pt-10 border-t">
            <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-24">
            <img src={assets.contact_img} alt="image" className="w-full md:max-w-[480px]" />
            <div className="flex flex-col justify-center items-start gap-6">
                <p className="font-semibold text-xl text-gray-600">Our Store</p>
                <p>54709 willms station <br /> sutite 350, washington, USA</p>
                <p className="text-gray-500"></p>
                <p className="text-gray-500">Tel: (417) 5545-0455 <br /> Email: admin@forever.com</p>
                <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
                <p className="text-gray-500">Learn more about teams and job openings.</p>
                <button className="border  border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
            </div>
        </div>
        <NewsLetterBox/>
    
    </div>
    )
}

export default Contact
