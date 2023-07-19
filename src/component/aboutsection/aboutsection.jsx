import './aboutsection.scss'

import aboutimg from '../../../assets/about1.png'

const Aboutsection = () => {
    return (
        <div className="aboutsection">
            <div className="container about">
                <div className="content">
                    <h4>About</h4>
                    <h4><span className='question'>Question</span> <span className='kit'>Kit</span></h4>
                    <p>Unlock the World of Knowledge with LearnIt,  our app is designed to enhance your learning experience</p>
                    <button>See Feature</button>
                </div>
                <div className="imge">
                    <img src={aboutimg} alt='aboutImage' />
                </div>
            </div>
        </div>
    )
}

export default Aboutsection