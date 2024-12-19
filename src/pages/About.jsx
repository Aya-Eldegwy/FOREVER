

import { assets } from "../assets/assets";

import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
    return (
    <div>
        <div className="text-xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className=" my-10 flex flex-col md:flex-row gap-16">
            <img src={assets.about_img} alt="about-us image" className="w-full md:w-[450px]" />
            <div className="flex flex-col justify-center gap-4 text-gray-600 md:w-2/4">
            <p>Forever was born out of a passion for innovation a desire to revolution the way people shop online. our journey began with a simple idea: to provide a platform </p>
            <p>since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Our mission at Forever is to empower customers with chico, convenience ,and confidence . we're dedicated to providing shopping experience that exceds</p>
            </div>
        </div>
        <div className="text-xl py-4">
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className="flex flex-col md:flex-row gap-4 text-sm mb-20">
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  ">
                <b>Quality Assurance</b>
                <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  ">
                <b>Convenience:</b>
                <p className="text-gray-600">With our user-friendly interface and hassle-free odrering process. shopping has never been easier</p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  ">
                <b> Exceptional Customer:</b>
                <p className="text-gray-600">Our of dedicated professionals is here to assist you the way , ensuring</p>
            </div>
        </div>
        
        <NewsLetterBox/>
    </div>
    )
}

export default About
