import './footer.scss'
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row alldiv">
                    <div className="col-sm-4 left">
                        <img src={logo} alt='logo' />
                        <p>Unlock the World of Knowledge with LearnIt,  our app is designed to enhance your learning experience</p>
                    </div>
                    <div className="col-sm-4 middle">
                        <h4>Quick links</h4>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Services</a></li>
                            <li><a href=''>Contact</a></li>

                        </ul>
                    </div>
                    <div className="col-sm-4 middle">
                        <h4>Socials</h4>
                        <ul>
                            <li><a href=''>facebook</a></li>
                            <li><a href=''>twitter</a></li>
                            <li><a href=''>linkdin</a></li>
                            <li><a href=''>instagram</a></li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="row under">
                <p>@2022 - All right reserved</p>
            </div>
        </div>
    )
}

export default Footer