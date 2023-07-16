import './index.scss'
import kid2 from '../../../assets/kid2.png'

const HeroSection = () => {
    return (
        <div className="herosection">
            <div className="row">
                <div className="col-md-6 left">
                    <h3>Smart School Management System</h3>
                    <button>
                        <p>Create Question</p>
                    </button>
                </div>
                <div className="col-md-6 right">
                    <img src={kid2} />
                </div>
            </div>

        </div>
    );
}

export default HeroSection