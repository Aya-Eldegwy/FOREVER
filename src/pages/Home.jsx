
import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPPolicy from "../components/OurPPolicy"

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPPolicy/>
            <NewsLetterBox/>
        </div>
    )
}

export default Home
