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
                        <div className="col-md-6 left">
                            <img src={vector1} alt="vector img" />
                        </div>
                        <div className="col-md-6 right">
                            <h4>Create custom question</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima necessitatibus veritatis nisi dignissimos, perspiciatis explicabo consectetur beatae libero vero aspernatur tempora consequuntur maxime quia debitis soluta sed excepturi vel?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 right">
                            <h4>24 hours Services</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima necessitatibus veritatis nisi dignissimos, perspiciatis explicabo consectetur beatae libero vero aspernatur tempora consequuntur maxime quia debitis soluta sed excepturi vel?</p>
                        </div>
                        <div className="col-md-6 left">
                            <img src={vector2} alt="vector img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WhyUs