import './checkout.scss'
import service1 from '../../../../assets/service1.png'

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="container">
                <h4>Checkout our <span className='service'>Services</span></h4>
                <div className="services">
                    <div className="row">
                        <div className="col-sm-6 ">
                            <div className="card">
                                <img src={service1} alt='imge' />
                                <div className='cardfooter'>
                                    <p>Create question</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <img src={service1} alt='imge' />
                                <div className='cardfooter'>
                                    <p>Watch Tutorial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <img src={service1} alt='imge' />
                                <div className='cardfooter'>
                                    <p>Give online Exam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <img src={service1} alt='imge' />
                                <div className='cardfooter'>
                                    <p>Read Books</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout