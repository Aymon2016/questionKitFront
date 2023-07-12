import './card.scss'
import { Link } from 'react-router-dom'

const Card = ({ title }) => {
    return (
        <div className="card">
            <h4><Link className="link" to="/">{title}</Link></h4>
        </div>
    )
}

export default Card