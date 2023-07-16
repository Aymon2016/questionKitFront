import HeroSection from "../../component/herosection"
import Featuresection from "../../component/featuresection/featuresection"
import WhyUs from "../../component/whyusSection/whyusSelection"
import Pricing from "../../component/pricingSection/pricingSection"
import Contact from "../../component/contactSection/contactSection"
import ReviewSection from "../../component/reviewSection/reviewSection"
import NavBar from "../../component/navBar/navBar"
const Homepage = () => {
    return (

        <div>
            <NavBar color='#0063A4' />
            <HeroSection />
            <WhyUs />
            <Featuresection />
            <ReviewSection />
        </div>


    )
}

export default Homepage