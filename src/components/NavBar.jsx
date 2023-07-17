import { Link } from 'react-router-dom'

const NavBar = () => {
    return <section id="navbar-container">
        <ul id="navbar">
            <li><Link to="/"><span className="logo">NC News</span></Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </section>
}

export default NavBar