import './feature.scss'
import examReviw from '../../../assets/examReview.png'
import Mentorship from '../../../assets/mentorShip.png'
import liveClass from '../../../assets/liveClass.png'
import community from '../../../assets/community.png'

const FeatureSection = ({ background }) => {
    return (
        <div className="featuresection" style={{ backgroundColor: `${background}` }}>
            <div className="container">
                <div className="featurecontainer" id='container'>
                    <div className="heading">
                        <h4>Features Include</h4>
                    </div>
                    <div className="featurebody">
                        <div className="row">
                            <div className="col-sm-6 cards ">
                                <img src={examReviw} alt='imge' />
                                <h4>Exam Reviews</h4>
                                <p>Boost your exam performance with our comprehensive exam review feature. Our web app provides a powerful toolset to analyze your performance, identify areas for improvement, and track your progress over time. Access detailed reports, review past exams, and receive personalized insights to enhance your studying strategy and achieve better results.?</p>
                            </div>
                            <div className="col-sm-6 cards">
                                <img src={Mentorship} alt='imge' />
                                <h4>Mentorship</h4>
                                <p>Experience the power of mentorship with our web app's dedicated feature. Connect with experienced professionals, gain valuable insights, and receive personalized guidance to accelerate your professional growth. Unlock your full potential with the support of exceptional mentors at your fingertips</p>
                            </div>
                        </div>
                    </div>
                    <div className="featurebody">
                        <div className="row">
                            <div className="col-sm-6 cards ">
                                <img src={liveClass} alt='imge' />
                                <h4>Live Class</h4>
                                <p>Experience the power of live classes with our immersive feature. Interact in real-time with expert instructors, ask questions, and engage with fellow learners. Dive into dynamic discussions, receive instant feedback, and enhance your understanding through live demonstrations</p>
                            </div>
                            <div className="col-sm-6 cards">
                                <img src={community} alt='imge' />
                                <h4>Strong Community</h4>
                                <p>Join our vibrant community and become part of a strong network of learners. Connect with like-minded individuals, share insights, and collaborate on projects. Benefit from peer support, exchange ideas, and access valuable resources. Together, we create a supportive and empowering community that fosters growth and lifelong connections.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection