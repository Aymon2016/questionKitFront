import tutorial1 from '../../../assets/tutorial1.png'
import './tutorialsection.scss';

const Tutorial = () => {
    return (

        <div className="tutorialsection">
            <div className="content">
                <h4>Quick Tutorial <span className='comming'> Coming </span ></h4>
                <p>Start your learning</p>
            </div>
            <div className="imge">
                <img src={tutorial1} alt='tutorial imge' />
            </div>
        </div>
    )
}

export default Tutorial