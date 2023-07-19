
import './contact.scss'
import contactbanner from '../../../assets/contact.png'


const ContactBanner = () => {
    return (
        <>
            <div className="contactSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Know More</h4>
                            <p> contact <span className='us'>us</span></p>
                        </div>
                        < div className="col-md-6">
                            <img src={contactbanner} alt='contactbanner' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactBanner