import "./whyUs.scss"
import vector1 from '../../../assets/vector1.png'
import vector2 from '../../../assets/vector2.png'

const WhyUs = () => {
    return (
        <div className="container">
            <div className="featurecontainer" id='container'>
                <div className="heading">
                    <h1>Why Choose Us ?</h1>
                </div>
                <div className="featurebody">
                    <div className="row">
                        <div className="col-sm-6 left">
                            <img src={vector1} alt="vector img" />
                        </div>
                        <div className="col-sm-6 right">
                            <h4>Create custom question</h4>
                            <p>Our web app's custom question feature enables users to create personalized queries,    tailoring their information retrieval to specific criteria and parameters.
                                With the ability to create custom questions, users can obtain precise and relevant results, empowering them to extract valuable insights and make informed decisions</p>
                        </div>
                    </div>
                    <div className="row underRow">
                        <div className="col-sm-6 right upper">
                            <h4>24 hours Services</h4>
                            <p>Experience round-the-clock service with our web app. Whether it's day or night, our platform is available to assist you at any hour. Unlock the convenience of accessing personalized queries and valuable insights whenever you need them, ensuring uninterrupted productivity and support</p>
                        </div>
                        <div className="col-sm-6 left under">
                            <img src={vector2} alt="vector img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WhyUs