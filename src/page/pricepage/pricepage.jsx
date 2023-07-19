import Pricing from "../../component/pricingSection/pricingSection"
import NavBar from "../../component/navBar/navBar"


const Pricepage = () => {
    return (
        <div style={{
            backgroundColor: '#FCBA4D'
        }}>
            <NavBar color='#369FE4' />
            <div className="heading">
                <h1 style={{ textAlign: 'center', marginTop: "20px" }}>Price</h1>
            </div>
            <Pricing />
        </div>
    )
}

export default Pricepage