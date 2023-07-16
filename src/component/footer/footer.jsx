import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src='' alt='logo' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iure.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick links</h4>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Services</a></li>
                            <li><a href=''>Contact</a></li>
                            <li><a href=''>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Socials</h4>
                        <ul>
                            <li>fb</li>
                            <li>twi</li>
                            <li>lin</li>
                            <li>inst</li>
                        </ul>
                        <span>Contact us</span>
                        <p>445114541211</p>
                        <p>111654112</p>

                    </div>
                </div>
                <div className="row">
                    <p>@2022 - All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer