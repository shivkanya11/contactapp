import "./Navbar.css";
import {Link} from 'react-router-dom'
export default function Navbar()
{
    return(
        <div className="nav">
            <h2 className="name">Shivkanya Mhetre</h2>
            <a to = "/home" className="menu-item">Home</a>
            <a to = "/about" className="menu-item">About</a>
            <a to = "/contact" className="menu-item">Contact</a>
        </div>
    )
}