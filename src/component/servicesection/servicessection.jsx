import './servicesection.scss'
import banner from '../../../assets/serviceBanner.png'
import Checkout from './checkoutsection.jsx/checkout'

const Servicesection = () => {
    return (
        <>
            <div className="banner">
                <div className="container serviceSection">
                    <div className="content">
                        <h4>Enjoy Our <span className='service'>Services</span></h4>

                    </div>
                    <div className="imge">
                        <img src={banner} alt='banner imgage' />
                    </div>
                </div>
            </div>
            <Checkout />
        </>
    )
}

export default Servicesection