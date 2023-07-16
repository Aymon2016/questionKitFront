import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom"
import "./navBar.scss"
const NavBar = ({ color }) => {
    return (

        <div style={{ backgroundColor: `${color}` }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container" id='navbar'>
                    <div className="logo">
                        <img src={logo} alt='logo image' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link " aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link " aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/feature" className="nav-link" aria-current="page">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/price" className="nav-link " aria-current="page">Price</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/feature" className="nav-link " aria-current="page">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link " aria-current="page"><span className='login'>Login</span></Link>
                            </li>
                            <li>
                                <button>
                                    <p>start learn</p>
                                </button>
                            </li>
                            {/* <li className="nav-item">
                            <Link to="/logout" className="nav-link active" aria-current="page">Logout</Link>
                        </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
