
import Contact from '../../component/contactSection/contact/contact'
import ContactBanner from '../../component/contactSection/contactSection'
import NavBar from '../../component/navBar/navBar'

const Contactpage = () => {
    return (
        <div>
            <NavBar color='#369FE4' />
            <ContactBanner />
            <Contact />
        </div>
    )
}

export default Contactpage