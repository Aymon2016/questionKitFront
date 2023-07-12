import "./whyUs.scss"
import Card from "../shared/card/Card"

const WhyUs = () => {
    return (
        <div className="container">
            <div className="featurecontainer" id='container'>
                <div className="heading">
                    <h1>Why Us</h1>
                </div>
                <div className="featurebody">
                    <Card title='24 hours Services' />
                    <Card title='Smart Randomized Question' />

                </div>
            </div>
        </div>
    )
}

export default WhyUs