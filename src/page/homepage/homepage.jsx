import HeroSection from "../../component/herosection"
import Featuresection from "../../component/featuresection/featuresection"
import WhyUs from "../../component/whyusSection/whyusSelection"
import Pricing from "../../component/pricingSection/pricingSection"
import Contact from "../../component/contactSection/contactSection"
import ReviewSection from "../../component/reviewSection/reviewSection"
import NavBar from "../../component/navBar/navBar"
import Tutorial from "../../component/turotial/tutorialsection"
import Appsection from "../../component/appsection/appsection"
const Homepage = () => {
    return (

        <div>
            <NavBar color='#369FE4' />
            <HeroSection />
            <WhyUs />
            <Tutorial />
            <Featuresection />
            <Appsection />
        </div>


    )
}

export default Homepage