import './feature.scss'
import examReviw from '../../../assets/examReview.png'
import Mentorship from '../../../assets/mentorShip.png'
import liveClass from '../../../assets/liveClass.png'
import community from '../../../assets/community.png'

const FeatureSection = () => {
    return (
        <div className="container">
            <div className="featurecontainer" id='container'>
                <div className="heading">
                    <h4>Features Include</h4>
                </div>
                <div className="featurebody">
                    <div className="row">
                        <div className="col-md-6 cards ">
                            <img src={examReviw} alt='imge' />
                            <h4>Exam Reviews</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus, tempora laboriosam officia ducimus ipsum facilis nihil blanditiis consequatur aut sint veniam in eos aliquam eligendi deserunt impedit, cum ratione?</p>
                        </div>
                        <div className="col-md-6 cards">
                            <img src={Mentorship} alt='imge' />
                            <h4>Mentorship</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus, tempora laboriosam officia ducimus ipsum facilis nihil blanditiis consequatur aut sint veniam in eos aliquam eligendi deserunt impedit, cum ratione?</p>
                        </div>
                    </div>
                </div>
                <div className="featurebody">
                    <div className="row">
                        <div className="col-md-6 cards ">
                            <img src={liveClass} alt='imge' />
                            <h4>Live Class</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus, tempora laboriosam officia ducimus ipsum facilis nihil blanditiis consequatur aut sint veniam in eos aliquam eligendi deserunt impedit, cum ratione?</p>
                        </div>
                        <div className="col-md-6 cards">
                            <img src={community} alt='imge' />
                            <h4>Strong Community</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem temporibus, tempora laboriosam officia ducimus ipsum facilis nihil blanditiis consequatur aut sint veniam in eos aliquam eligendi deserunt impedit, cum ratione?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection