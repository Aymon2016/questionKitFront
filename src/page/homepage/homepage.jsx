import HeroSection from "../../component/herosection"
import Featuresection from "../../component/featuresection/featuresection"
import WhyUs from "../../component/whyusSection/whyusSelection"
import Pricing from "../../component/pricingSection/pricingSection"
import Contact from "../../component/contactSection/contactSection"
import ReviewSection from "../../component/reviewSection/reviewSection"
const Homepage = () => {
    return (

        <div>
            <HeroSection />
            <Featuresection />
            <WhyUs />
            <Pricing />
            <ReviewSection />
            <Contact />

        </div>


    )
}

export default Homepage