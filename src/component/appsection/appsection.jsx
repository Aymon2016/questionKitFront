import phone1 from '../../../assets/phone1.png'
import phone2 from '../../../assets/phone2.png'
import playstore from '../../../assets/playsote.png'
import './appsection.scss'
const Appsection = () => {
    return (
        <div className="appsection">
            <div className="leftImg">
                <img src={phone1} alt='phone img' />
            </div>
            <div className="content">
                <h4>Download QuestionKit App</h4>
                <p>Get more feature & download app</p>
                <img src={playstore} alt='playstore imge' />
            </div>
            <div className="rightImg">
                <img src={phone2} alt='phone img' />
            </div>
        </div>
    )
}

export default Appsection